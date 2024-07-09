document.querySelector('.home_tab').addEventListener('click', function() {

localStorage.setItem('redirectedFrom', 'music');
  idFlag = 0;
  localStorage.setItem('idFlag', idFlag);
  //window.location.href = "index.html";
  window.open("index.html", "_blank")
});

