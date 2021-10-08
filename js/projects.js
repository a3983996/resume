$(document).ready(function () {
  $("main").height($(".wrap").height() - $("header").height());
  $(".prev").click(function () {
    $(".prev").css("display", "none");
    $(".next").css("display", "block");
    $("aside").css("width", "0px");
    $("header").css("animation", "hideHeader 0.3s forwards");
    $("header").css("pointer-events", "none");
    $(".open_menu").prop("checked", false);
    $("header").on("animationend", () => {
      $("main").height("100%");
    });
  });
  $(".next").click(function () {
    $(".next").css("display", "none"); //開啟紐關閉
    $(".prev").css("display", "block"); //關閉紐打開
    $("aside").css("width", "200px"); //打開側選單
    $("header").css("animation", "showHeader 0.3s forwards"); //動畫顯示header
    $("header").css("pointer-events", "auto"); //開啟header點擊事件
    $("header").on("animationend", () => {
      //讓main的高度為全部減去header 達到占比100%
      $("main").height($("body").height() - $("header").height());
    });
  });
  $(window).resize(function () {
    $("main").height($(this).height() - $("header").height());
  });
});

addProject("hawaii");
addProject("dinner_room");
addProject("hexschool");
addProject("myYoutube");
addProject("todolist");
// addProject("outback");

function addProject(pageName) {
  let list = document.querySelector("aside .list");

  let openMethod = document.createElement("div");
  openMethod.classList.add("openMethod");

  let projectName = document.createElement("p");
  projectName.classList.add("projectName");
  projectName.textContent = pageName;
  let openPagi = document.createElement("a");
  openPagi.classList.add("openPagi");
  openPagi.setAttribute("href", `projects/${pageName}/index.html`);
  openPagi.setAttribute("target", "_blank");
  openPagi.textContent = "open this";

  openMethod.appendChild(projectName);
  openMethod.appendChild(openPagi);

  list.appendChild(openMethod);

  projectName.addEventListener("click", (e) => {
    let projects = e.target.parentElement.parentElement.children;
    for (let i = 0; i < projects.length; i++) {
      projects[i].classList.remove("active");
    }
    e.target.parentElement.classList.add("active");
    let main = document.querySelector("main");
    let iframe = document.createElement("iframe");
    let url = "projects/" + pageName + "/index.html";
    iframe.setAttribute("src", url);
    if (document.querySelector(".manu")) {
      document.querySelector(".manu").remove();
    }
    if (document.querySelector("iframe")) {
      document.querySelector("iframe").remove();
    }
    main.appendChild(iframe);
  });
}
