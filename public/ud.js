let details;
const webUri = "https://beatblaast.vercel.app/";

let localName = localStorage.getItem("fullName");

let localEmail = localStorage.getItem("email");

let localPassword = localStorage.getItem("password");

let localPhone = localStorage.getItem("mobileNo");

let localIdFlag = localStorage.getItem("idFlag");

if (localName && localEmail && localPassword && localPhone) {
    details = `<br>Name: ${localName}<br>Mobile No: ${localPhone}<br>Email: ${localEmail}`;

  }




















async function tryForLog(logEmail,logPassword) {
   try {
     const response = await fetch(`${webUri}login`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ email: logEmail, password: logPassword }),
     });

     const data = await response.json();

     if (response.ok) {
       localStorage.setItem('token', data.token);
       idFlag = 1;
       localStorage.setItem('idFlag', idFlag);
       localStorage.setItem('fullName', data.user.Name);
       localStorage.setItem('email', data.user.Email);
       localStorage.setItem('mobileNo', data.user.MobileNo);
       localStorage.setItem('password', data.user.Password);
       loginForm.classList.add('none');

       details = `<br>Name: ${data.user.Name}<br>Mobile No: ${data.user.MobileNo}<br>Email: ${data.user.Email}`;
       //details = JSON.parse(localStorage.getItem('userDetails'));
     } 
     else {
logFlag = 1;
   localStorage.setItem('logFlag', logFlag);
       
     }
   } catch (error) {
     console.error('Error:', error);
   }
}
