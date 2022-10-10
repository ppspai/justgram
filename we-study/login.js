const ID = document.getElementById("input_Id");
const passWord = document.getElementById("input_passWord");
const loginBtn = document.getElementById("button");

/*
let idValue = "";
let pwValue = "";

ID.addEventListener("input", () => {
  const IDvalue = ID.value;
  console.log(IDvalue);
  console.log(loginBtn.disabled);
  updateLoginButtonDOM;
});

passWord.addEventListener("input", () => {
  const passWordvalue = passWord.value;
  console.log(passWordvalue);
  console.log(loginBtn.disabled);
  updateLoginButtonDOM();
});

function updateLoginButtonDOM(ID,passWord) {
  if (ID.value && passWord.value) {
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }
}
*/

function updateLoginButtonDom(){
  if(ID.value && ID.value.includes('@') && passWord.value.length >= 5){
    loginBtn.disabled = false;
  }
  else{
    loginBtn.disabled = true;
  }
}

ID.addEventListener('keyup',updateLoginButtonDom)
passWord.addEventListener('keyup',updateLoginButtonDom)