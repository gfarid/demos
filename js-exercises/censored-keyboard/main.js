var input = document.querySelector("input");

input.addEventListener("keydown", censorKey);
input.addEventListener("keydown", logKey);


function censorKey (e) {
  if (isBadKey(e.key)) {
    e.preventDefault();
  }
}

function isBadKey (key) {
  var badKeys = ["q", "x", "w"];
  return badKeys.indexOf(key) >= 0;
}

function logKey (e) {
  var method = isBadKey(e.key) ? "error" : "log";
  console[method]("User pressed '" + e.key + "'");
}
