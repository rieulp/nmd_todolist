const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const user_area = document.querySelector(".user_area");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "username";

function paintingGreetings(userName) {
    greeting.textContent = `안녕하세요 ${userName}님!`;
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    user_area.classList.remove(HIDDEN_CLASS_NAME);
}

function showLoginForm() {
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
}

function onLoginSubmit(event) {
    event.preventDefault(); //event의 기본 행동을 막음
    const userName = loginInput.value;
    // 데이터 저장 -> localStorage
    window.localStorage.setItem(USERNAME_KEY, userName);
    paintingGreetings(userName);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
    showLoginForm();
}else {
    paintingGreetings(savedUserName);
}