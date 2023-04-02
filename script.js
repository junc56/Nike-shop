let changemodel = document.getElementById("change-mod-l");
let changemoded = document.getElementById("change-mod-d");

changemodel.onclick = function () {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "style-d.css") {
    theme.href = "style.css";
  } else {
    theme.href = "style.css";
  }
};

changemoded.onclick = function () {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "style.css") {
    theme.href = "style-d.css";
  } else {
    theme.href = "style-d.css";
  }
};
