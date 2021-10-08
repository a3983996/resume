const test = document.querySelector(".test");

let vIDArr = [];
async function getInpu() {
  vIDArr = [];
  if (!document.getElementById("inpu").value) {
    return;
  }
  let inpu = document.getElementById("inpu").value;
  //輸入的文字轉成url看得懂的碼
  // let covSearch = encodeURIComponent(document.getElementById("inpu").value);

  let url =
    "https://www.googleapis.com/youtube/v3/search" +
    "?key=AIzaSyCiCtmO4qtfhbaV4X3PvcmlP4Z5Sg_OQPc" +
    "&part=snippet" +
    "&type=video" +
    "&maxResults=12" +
    "&safeSearch=strict" +
    "&q=" +
    inpu;
  let over = document.querySelector("#over");
  over.setAttribute("href", url);
  // over.click();

  try {
    let urlData = await fetch(url);
    let body = await urlData.json();
    console.log(urlData);
    // test.textContent = JSON.stringify(body);
    body.items.forEach((item) => {
      vIDArr.push(item.id.videoId);
    });
    // for (let i = 0; i < 5; i++) {
    //   vIDArr.push(`p${i + 1}`);
    // }
    if (document.querySelector(".container1 ul")) {
      document.querySelector(".container1 ul").remove();
    }
    console.log(vIDArr);
    let container = document.querySelector(".container1");
    let ul = document.createElement("ul");
    vIDArr.forEach((url, i) => {
      let li = document.createElement("li");
      let player = document.createElement("div");
      player.setAttribute("id", `p${i + 1}`);
      player.style = "width:300px; height:150px;background-color:black";
      li.appendChild(player);
      ul.appendChild(li);
      container.appendChild(ul);
      onYouTubeIframeAPIReady(url, `p${i + 1}`);
    });

    // vIDArr.forEach((url) => {
    // let li = document.createElement("li");
    // let iframe = document.createElement("iframe");
    // iframe.setAttribute("src", url);
    // iframe.setAttribute("title", "YouTube video player");
    // iframe.setAttribute("frameborder", "0");
    // iframe.setAttribute(
    //   "allow",
    //   "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    // );
    // iframe.setAttribute("allowfullscreen", true);
    // li.appendChild(iframe);
    // ul.appendChild(li);
    // });
  } catch (e) {
    console.log(e);
  }
}
