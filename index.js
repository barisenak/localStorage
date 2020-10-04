const submitBtn = document.querySelector("#submitBtn");
const desk = document.querySelector(".desk");
const reloadBtn = document.querySelector("#reloadBtn");

async function arr() {
  const array = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await array.json();
  console.log(result);
  localStorage.setItem("arr", JSON.stringify(result));
  let data = JSON.parse(localStorage.getItem("arr"));
  paint(data);
  return data;
}

function paint(data) {
  data.forEach((item) => {
    desk.innerHTML += `<div class="card"><p class="title">${item.name}</p>
                  </div>`;
  });
}

function doReload() {
  window.location.reload();
}

submitBtn.addEventListener("click", (event) => {
  desk.innerHTML = "";
  arr();
});

reloadBtn.addEventListener("click", (event) => {
  event.preventDefault();
  doReload();
  let info = JSON.parse(localStorage.getItem("arr"));
  info.forEach((item) => {
    desk.innerHTML += `<div class="card"><p class="title">${item.name}</p>
                  </div>`;
  });
});
