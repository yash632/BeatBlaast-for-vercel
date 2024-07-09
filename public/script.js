
//……………………Logo Rotation………………………
const image = document.getElementById('flogo');
let timeout;
function tiltImage() {
  image.classList.add('tilted');
  timeout = setTimeout(() => {
    image.classList.remove('tilted');
  }, 1000);
}
setInterval(tiltImage, 2000);
//………………Logo Rotation END…………………

//………………………variables……………………………
let idFlag;
let logPassword;
let logEmail;
//……………………variables END…………………………

//………………………local storage………………………
if (localIdFlag == 1) {
  
  if (localName && localEmail && localPassword && localPhone) {
    details = `<br>Name: ${localName}<br>Mobile No: ${localPhone}<br>Email: ${localEmail}`;

window.location.href = "music.html";
  }
}
//…………………local storage END…………………


//………………………Sign up button………………………
let btn = document.querySelector('.btn');
btn.addEventListener("click", function() {
  window.location.href = "sign.html";
});
//…………………Sign up button END…………………

//………………………Log In Button………………………
let logBtn = document.querySelector('.log_btn');
logBtn.addEventListener("click", function() {

  window.location.href = "log.html";
});
//…………………Log In Button END………………

if (btn.classList.contains('none')&&logBtn.classList.contains('none')){

  btn.classList.remove('none');
  logBtn.classList.remove('none');
  document.querySelector('.back_btn').classList.add('none');
}

const redirectedFrom = localStorage.getItem('redirectedFrom');

if (redirectedFrom === 'music') {
  btn.classList.add('none');
  logBtn.classList.add('none');
  document.querySelector('.back_btn').classList.remove('none');
 localStorage.removeItem('redirectedFrom');
    }
document.querySelector('.back_btn').addEventListener('click', function() {
  idFlag = 1;
  localStorage.setItem('idFlag', idFlag);
   //window.location.href = "music.html";
  window.close();
});