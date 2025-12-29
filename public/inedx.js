class User {
    constructor(name , email , age , password){
        this.mame = name;
        this.email= email;
        this.age = age ;
        this .password =password;
    }
}





function validateName(name){
    name = name.trim();

    if ( name.length < 5)
        return null;
    if (/[^a-zA-Z ]/.test(name))
        return null;


    return name
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    
}
 
function validatEmail(email){
    email = email.trim().toLowerCase();
  if ( email.includes (" ")) 
    return null ;
  if (email.length < 10 )
    return null;
if (email.match(/@/g)||[].length !==1)
    return null;
if (users.some( u => u.email === eamil)) 
    return null;
return email;
  }
  function validatAge(age){
    agr = age.trim();
    if (!/^\d{1,2}$/.test(age))
        return null;
    return Number(age)
  }




function validatePassword(password) {

    password = password.trim();

    if (password.includes(" "))
        return null;
    if (password.length < 7 )
        return null;
    if (!/[@#\-+\*\/]/.test(password))
        return null;

    return password;
}

function signUp() {
  let name = validateName(prompt("Enter full name:"));
  if (!name) return alert("Invalid name");

  let email = validateEmail(prompt("Enter email:"));
  if (!email) return alert("Invalid email");

  let age = validateAge(prompt("Enter age:"));
  if (!age) return alert("Invalid age");

  let password = validatePassword(prompt("Enter password:"));
  if (!password) return alert("Invalid password");

  let confirm = prompt("Confirm password:");
  if (confirm !== password) {
    alert("Blocked: passwords do not match");
    return;
  }

  let user = new User(name, email, age, password);
  users.push(user);
  alert("Account created successfully");
}

