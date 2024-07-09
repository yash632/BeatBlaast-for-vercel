//…………………………Submit login………………………
let loginForm = document.querySelector('#formLog');
loginForm.addEventListener("submit", async function(event) {
  event.preventDefault();
  logEmail = document.querySelector('#logEmail').value.trim();
  logPassword = document.querySelector('#logPassword').value.trim();

  await tryForLog(logEmail,logPassword);
  
  logFlagCheck = localStorage.getItem('logFlag');
   if (logFlagCheck == 1)
   { document.querySelector('.logFail').classList.remove('snone');
       setTimeout(() => {
   document.querySelector('.logFail').classList.add('snone');
logFlag = 0;
localStorage.setItem('logFlag', logFlag);
         }, 3000);
    
   }
else {
        window.location.href = "music.html";
   }
});
//……………………Submit login END……………………

