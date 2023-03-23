const onClickAdd = () => {
  let inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';

  // Tag
  const li = document.createElement('li');
  const div = document.createElement('div');
  div.className = 'list';
  const p = document.createElement('p');
  p.innerText = inputText;

  const todos = document.getElementById('todos');
  const dones = document.getElementById('dones');

  // Done Button
  const doneBtn = createButton('完了');
  // Delete Button
  const deleteBtn = createButton('削除');

  // 完了ボタン押下時
  doneBtn.addEventListener('click', () => {
    deleteTarget(doneBtn, todos);
    const addTarget = setTarget(doneBtn);

    // Back Button
    const backBtn = createButton('戻す');
    let donesElements = [p, backBtn];
    createTarget(donesElements, addTarget, li, dones);

    // 戻すボタン押下時
    backBtn.addEventListener('click', () => {
      deleteTarget(backBtn, dones);
      const addTarget = setTarget(backBtn);
      let backElements = [p, doneBtn, deleteBtn];
      createTarget(backElements, addTarget, li, todos);
    });
  });

  // 削除ボタン押下時
  deleteBtn.addEventListener('click', () => {
    deleteTarget(deleteBtn, todos);
  });
  
  // 整形
  let elements = [p, doneBtn, deleteBtn];
  createTarget(elements, div, li, todos);
}


function createButton(btnName) {
  let btn = document.createElement('button')
  btn.innerText = btnName;

  return btn;
}

function deleteTarget(btn, parent) {
  let deleteTarget = btn.parentNode.parentNode;
  parent.removeChild(deleteTarget);
}

function createTarget(elements, target, li, parent) {
  elements.forEach(e => {
    target.appendChild(e);
  });
  li.appendChild(target);
  parent.appendChild(li);
}

function setTarget(btn) {
      const addTarget = btn.parentNode;
      const addText = addTarget.firstElementChild.innerText;
      addTarget.textContent = null;
      getP(addText);

      return addTarget;
}

function getP(text) {
  const p = document.createElement('p');
  p.innerText = text;

  return p;
}


document.getElementById('add').addEventListener('click', () => onClickAdd());