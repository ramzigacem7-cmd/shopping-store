let username = "ramzi";
let password = "1234";
const user_name = document.getElementById("username");
const pass_word = document.getElementById("password");
const login_btn = document.getElementById("loginbtn");

document.addEventListener("DOMContentLoaded", () => {
  login_btn.addEventListener("click", () => {
    let user = user_name.value.trim();
    let pass = pass_word.value.trim();
    if (user !== username && pass !== password) {
      alert("Incorrect Username and Password");
      user_name.value = "";
      pass_word.value = "";
    } else if (pass !== password) {
      alert("Incorrect passward");
      pass_word.value = "";
    } else if (user !== username) {
      alert("Incorrect Username");
      user_name.value = "";
    } else {
      window.location.href = "main.html";
    }
  });
});

const total_btn = document.getElementById("checkout");
if (total_btn) {
  total_btn.addEventListener("click", () => {
    alert("Total Price is: '500$'");
  });
}

const shop_btn = document.getElementById("shopping_card_btn");
const shop_card = document.querySelector(".shopping_card");

const exit_btn = document.getElementById("exit_btn");

shop_btn.addEventListener("click", () => {
  shop_card.style.display = "inherit";
});

exit_btn.addEventListener("click", () => {
  shop_card.style.display = "none";
});
