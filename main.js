let inputBtn = document.getElementById("inputBtn");
let resetBtn = document.getElementById("resetBtn");

inputBtn.onclick = function() {
  if (
    document.getElementById("noteInput").value == null ||
    document.getElementById("noteInput").value == undefined ||
    document.getElementById("noteInput").value == ""
  ) {
    alert("Gebe eine gültige Note ein.");
  } else {
    let text = "<div class='note'>";
    text += document.getElementById("noteInput").value;
    text += "</div>";
    document.getElementById("notes").innerHTML += text;
    document.getElementById("noteInput").value = "";
  }
};

resetBtn.onclick = function() {
  document.getElementById("notes").innerHTML = "";
};
