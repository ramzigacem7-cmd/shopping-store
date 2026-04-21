let username = "ramzi";
let password = "1234";
const user_name = document.getElementById("username");
const pass_word = document.getElementById("password");
const login_btn = document.getElementById("loginbtn");

login_btn.addEventListener("click", () => {
  let user = user_name.value.trim();
  let pass = pass_word.value.trim();

  if (user === username && pass === password) {
    window.location.href = "main.html";
  } else {
    alert("Incorrect Username and Password");
  }
});
