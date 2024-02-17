let i = 2;
setInterval(() => {
  if (i <= 0) {
    window.location.href = "index.html";
  } else {
    document.querySelector("#backIndex").innerHTML = `กลับหน้าแรกใน ${i}`;
  }
  i--;
}, 1000);
