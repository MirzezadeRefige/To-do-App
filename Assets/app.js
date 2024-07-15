let input = document.querySelector(".to-do");
const click = document.querySelector(".btn");
const myList = document.querySelector(".list");
const myListEl = document.querySelector(".myListUl");
const button = document.querySelector(".delete-btn");

var myArr = [];

function render() {
  myList.innerHTML = "";

  myArr.forEach((item, index) => {
    myList.innerHTML += ` <div class="elm-div"><p class="p">${item} <div class="buttons"><button class="edit-btn" data-index="${index}"><i class="fa-solid fa-pen-to-square"></i></button><button class="delete-btn" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button></div> </p> </div>`;
  });
  // edit button
  const editButtons = document.querySelectorAll(".edit-btn");
  editButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      const newValue = prompt("Edit item:", myArr[index]);
      if (newValue) {
        myArr[index] = newValue;
      }
      render();
    });
  });

  // delete button
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      myArr.splice(index, 1);
      render();
    });
  });
}

click.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    myArr.push(input.value);
    render();
    console.log(myArr);
    input.value = "";
  } else {
    alert("Please, add something");
  }
});

// enter button
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (input.value.trim() !== "") {
      myArr.push(input.value);
      render();
      console.log(myArr);
      input.value = "";
    } else {
      alert("Please, add something");
    }
  }
});
