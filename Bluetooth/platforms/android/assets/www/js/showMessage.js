var p = document.getElementById('msg');
var img = document.getElementById('img')
p.innerHTML = localStorage.msg;
img.src = localStorage.img;
img.className = "img-rounded";
