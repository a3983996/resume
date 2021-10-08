
let newList = [];
let num = 0;
let section = document.querySelector("section");


if (localStorage.getItem("item") !== "") {
    let oldList = JSON.parse(localStorage.getItem("item"));
    // console.log(oldList);
    localStorage.setItem("item", "");
    for (let i = 0; i < oldList.length; i++) {
        let oldTodo = oldList[i].todo;
        let oldMonth = oldList[i].month;
        let oldDay = oldList[i].day;
        addStorage(oldTodo, oldMonth, oldDay);
        addItem(oldTodo, oldMonth, oldDay);
    }
}


let addTodo = document.querySelector(".addTodo");
addTodo.addEventListener("click", e => {
    console.log(e);
    e.preventDefault();

    let todo = document.querySelector(".todo").value;
    let month = document.querySelector(".month").value;
    let day = document.querySelector(".day").value;

    if (todo == "" || month == "" || day == "") {
        return;
    }
    addStorage(todo, month, day);
    addItem(todo, month, day);

});
function addStorage(todo, month, day) {
    let item = { todo: todo, month: month, day: day, num, num }
    newList.push(item);
    localStorage.setItem("item", JSON.stringify(newList));
}
function addItem(todo, month, day) {


    let todoList = document.createElement("div");
    todoList.setAttribute('class', 'todoList');
    let id = "n" + num;
    todoList.setAttribute('id', id);
    num++;

    let todoItem = document.createElement("h2");
    todoItem.setAttribute('class', 'todoItem');
    todoItem.innerHTML = todo;

    let timeItem = document.createElement("h3");
    timeItem.setAttribute('class', 'timeItem');
    timeItem.textContent = month + " / " + day;

    let havedownBtn = document.createElement("button");
    havedownBtn.setAttribute('class', 'havedownBtn');
    havedownBtn.innerHTML = '<i class="fas fa-check"></i>';


    let deletBtn = document.createElement("button");
    deletBtn.setAttribute('class', 'deletBtn');
    deletBtn.innerHTML = '<i class="far fa-trash-alt"></i>';


    todoList.appendChild(todoItem);
    todoList.appendChild(timeItem);
    todoList.appendChild(havedownBtn);
    todoList.appendChild(deletBtn);
    section.appendChild(todoList);

    havedownBtn.addEventListener("click", e => {
        e.target.parentElement.classList.toggle("havedown");
    });
    deletBtn.addEventListener("click", e => {
        let item = e.target.parentElement;
        item.style.animation = "scaleDown 0.3s forwards";
        item.addEventListener("animationend", () => {
            e.target.parentElement.remove();
        });
        let n = item.id.slice(1, id.length);
        // console.log(n);
        newList.forEach((item, index) => {
            if (item.num == n) {
                newList.splice(index, 1);
                localStorage.setItem("item", JSON.stringify(newList));
            }
        });


    });
}

let sortByTime = document.querySelector(".sort");
sortByTime.addEventListener("click", () => {

    // for (let i = newList.length - 1; i > 0; i--) {
    //     for (let j = 0; j < i; j++) {

    //         if (Number(newList[j].month) > Number(newList[j + 1].month)) {
    //             let tmp = newList[j];
    //             newList[j] = newList[j + 1];
    //             newList[j + 1] = tmp;

    //         } else if (Number(newList[j].month) == Number(newList[j + 1].month)) {
    //             if (newList[j].day > newList[j + 1].day) {
    //                 let tmp = newList[j];
    //                 newList[j] = newList[j + 1];
    //                 newList[j + 1] = tmp;
    //             }
    //         }
    //     }
    // }
    newList.sort((a, b) => {
        return a.day - b.day;
    });
    newList.sort((a, b) => {
        return a.month - b.month;
    });
    localStorage.setItem("item", JSON.stringify(newList));

    let len = section.children.length;
    for (let i = 0; i < len; i++) {
        section.children[0].remove();
    }

    newList.forEach(item => {
        addItem(item.todo, item.month, item.day);
    });
});