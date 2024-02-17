if (!JSON.parse(localStorage.getItem("userOnline"))[0]) {
  window.location.href = "login.html";
  localStorage.clear();
}
