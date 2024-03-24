let userName = prompt('Enter your username');
document.getElementById('username').innerHTML = ("username: " + userName);
let cohort = prompt('Enter your cohort');
document.getElementById('cohort').innerHTML =("cohort: " + cohort);
let pass_Code = prompt('Enter your Passcode');
document.getElementById('passcode').innerHTML = ("passcode: " + pass_Code);

let i;
for(let i = 20 ; i <= 40; i++){
  i = prompt('guess a number 20 - 45 ')
 
  if(i == 20 || i == 22 || i == 39){
    alert('you loose')
    break; 
  }
  




  document.getElementById('score').innerHTML = i;
}



