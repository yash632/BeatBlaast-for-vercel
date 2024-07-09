//…………………………Submit signup………………………
signupForm = document.querySelector("#formSign")
signupForm.addEventListener('submit', async function(event) {
  event.preventDefault();

  let fullName = document.getElementById('fullName').value.trim().toUpperCase();
  let mobileNo = document.getElementById('mobileNo').value.trim();
  let email = document.getElementById('email').value.trim();
  let password = document.getElementById('newPassword').value.trim();

  try {
    const response = await fetch(`${webUri}signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName, email, password, mobileNo }),
    });

    if (response.ok) {
    details =`<br>Name : ${fullName}<br>Mobile No : ${mobileNo}<br>Email : ${email}`;
      localStorage.setItem('fullName', fullName);
      localStorage.setItem('email', email);
      localStorage.setItem('mobileNo', mobileNo);
      localStorage.setItem('password', password);

      idFlag = 1;
      localStorage.setItem('idFlag', idFlag);
      window.location.href = "music.html";
    } 
    else {
document.querySelector('.signFail').classList.remove('snone');
      setTimeout(() => {
document.querySelector('.signFail').classList.add('snone');
        }, 3000);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

//…………………Submit signup END…………………
