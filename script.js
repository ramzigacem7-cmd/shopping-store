// verify if the access or(login) information are exist

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

// open and close the shopping card

const shop_btn = document.getElementById("shopping_card_btn");
const shop_card = document.querySelector(".shopping_card");
const exit_btn = document.getElementById("exit_btn");

shop_btn.addEventListener("click", () => {
  shop_card.style.display = "inherit";
});

exit_btn.addEventListener("click", () => {
  shop_card.style.display = "none";
});

const countity_in_card = document.getElementById("countity_in_card");

const first_added_pro = document.getElementById("added_product");
const remove_item = document.querySelector(".remove_item");

const products_cards = document.querySelectorAll(".product_card");

const shop_item = document.querySelector(".shop_items");

function create_shop_cart() {
  shop_item.innerHTML = "";
  let card = JSON.parse(localStorage.getItem("card")) || [];
  card.forEach((x) => {
    let new_div = document.createElement("div");
    new_div.classList.add("card_item");
    new_div.innerHTML = `
          <div>
            <button type="button" class="add_btn">+</button>
            <h3 style="color: white;"> ${x.countity}</h3>
             <button type="button" class="remove_btn">-</button>
            <h4 style="color: white;">total price:<ins style="color: lightgreen">${x.price}</ins>$</h4>
          </div>
          <div>
            <h2 style="color: white;"> ${x.name}</h2>
          </div>
        <br>
       `;
    shop_item.appendChild(new_div);
  });
}

products_cards.forEach((product) => {
  let btn = product.querySelector(".add_to_card_btn");
  btn.addEventListener("click", () => {
    name = product.querySelector(".name").textContent;
    price = parseInt(product.querySelector(".price").textContent);
    countity = parseInt(product.querySelector(".countity").value);
    let card = JSON.parse(localStorage.getItem("card")) || [];
    let exist = card.find((item) => item.name === name);
    if (exist) {
      exist.countity += countity;
      exist.price = price * exist.countity;
    } else {
      card.push({
        name,
        price,
        countity,
      });
    }
    localStorage.setItem("card", JSON.stringify(card));
    create_shop_cart();
  });
});
create_shop_cart();
