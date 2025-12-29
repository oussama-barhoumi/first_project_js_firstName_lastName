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

