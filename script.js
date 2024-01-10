const password = document.getElementById("password");
const msg = document.getElementById("msg");
const state = document.getElementById('state');

password.addEventListener('input',() => {
  let lengthCheck = password.value.length;
  lengthCheck  > 0 ? msg.style.display="block":msg.style.display="none";
  if(lengthCheck <= 4){
    state.innerHTML=' weak';
    msg.style.color='red';
  }else if (lengthCheck >= 4 && lengthCheck <= 8){
    state.innerHTML=' medium';
    msg.style.color= 'yellow';
  }else if(lengthCheck >8){
    state.innerHTML = ' strong';
    msg.style.color= 'green';
  }
})