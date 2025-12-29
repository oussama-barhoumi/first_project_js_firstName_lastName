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