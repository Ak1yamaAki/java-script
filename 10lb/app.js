const form = document.querySelector('.grocery-form');
const input = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const alertMsg = document.querySelector('.alert');
const listContainer = document.querySelector('.grocery-list');
const container = document.querySelector('.grocery-container');
const clearBtn = document.querySelector('.clear-btn');

let editFlag = false;
let editID = '';

window.addEventListener('DOMContentLoaded', () => {
  const storedItems = localStorage.getItem('groceryList');
  if (storedItems) {
    items = JSON.parse(storedItems);
    items.forEach(item => addItemToDOM(item));
  }
  updateContainerVisibility();
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) {
    displayAlert('Будь ласка, введіть назву продукту', 'danger');
    return;
  }

  if (editFlag) {
    const itemToEdit = items.find(item => item.id === editID);
    if (itemToEdit) {
      itemToEdit.title = value;
      const article = document.querySelector(`[data-id="${editID}"]`);
      article.querySelector('.title').textContent = value;
      displayAlert('Продукт відредаговано', 'success');
    }
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'Додати';
  } else {
    const id = Date.now().toString();
    const newItem = { id, title: value };
    items.push(newItem);
    addItemToDOM(newItem);
    displayAlert('Продукт додано', 'success');
  }

  saveToLocalStorage();
  updateContainerVisibility();
  input.value = '';
});

clearBtn.addEventListener('click', () => {
  items = [];
  listContainer.innerHTML = '';
  saveToLocalStorage();
  updateContainerVisibility();
  displayAlert('Список очищено', 'danger');
});

function addItemToDOM(item) {
  const article = document.createElement('article');
  article.className = 'grocery-item';
  article.setAttribute('data-id', item.id);
  article.innerHTML = `
    <p class="title">${item.title}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `;

  article.querySelector('.edit-btn').addEventListener('click', () => editItem(item.id));
  article.querySelector('.delete-btn').addEventListener('click', () => deleteItem(item.id));

  listContainer.append(article);
}

function editItem(id) {
  const item = items.find(item => item.id === id);
  if (!item) return;
  input.value = item.title;
  editFlag = true;
  editID = id;
  submitBtn.textContent = 'Редагувати';
}

function deleteItem(id) {
  const article = document.querySelector(`[data-id="${id}"]`);
  if (article) article.remove();
  items = items.filter(item => item.id !== id);
  saveToLocalStorage();
  updateContainerVisibility();
  displayAlert('Продукт видалено', 'danger');
}

function displayAlert(text, type) {
  alertMsg.textContent = text;
  alertMsg.classList.add(`alert-${type}`);
  setTimeout(() => {
    alertMsg.textContent = '';
    alertMsg.classList.remove(`alert-${type}`);
  }, 1500);
}

function updateContainerVisibility() {
  if (items.length > 0) {
    container.classList.add('show-container');
  } else {
    container.classList.remove('show-container');
  }
}

function saveToLocalStorage() {
  localStorage.setItem('groceryList', JSON.stringify(items));
}


let items = [];