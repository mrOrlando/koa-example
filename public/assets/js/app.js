const infoElem = document.querySelector('.info');

const getUsersBtn = document.querySelector('.get-users-btn');
const usersListElem = document.querySelector('.users-list');

const userIdInput = document.querySelector('input[name="user-id"]');
const getUserBtn = document.querySelector('.get-user-name-btn');
const userElem = document.querySelector('.user-name');

hideInfo();

getUsersBtn.addEventListener('click', async () => {
  try {
    hideInfo();
    while (usersListElem.firstChild) {
      usersListElem.removeChild(usersListElem.firstChild);
    }

    const response = await fetch('/users');
    const users = await response.json();

    users.map(({ id, name }) => {
      const li = document.createElement('li');
      const node = document.createTextNode(`id: ${id}, name: ${name}`);
      li.appendChild(node);
      usersListElem.appendChild(li);
    });
  } catch (error) {
    console.error(error);
    showInfo('An error occurred while executing the request.');
  }
});

getUserBtn.addEventListener('click', async () => {
  try {
    hideInfo();

    const userId = userIdInput.value;
    const response = await fetch(`/users/${userId}`);

    if (response.status === 200) {
      const user = await response.json();
      userElem.innerText = user.text;
    } else {
      const error = await response.json();
      userElem.innerText = error.msg;
    }
  } catch (error) {
    console.error(error);
    showInfo('An error occurred while executing the request.');
  }
});

function hideInfo() {
  infoElem.style.display = 'none';
  infoElem.innerText = '';
}

function showInfo(msg) {
  infoElem.innerText = msg;
  infoElem.style.display = 'block';
}
