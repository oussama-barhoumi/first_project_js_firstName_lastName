class User {
  static users = [];

  constructor(name, email, age, password) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.password = password;
    this.balance = 0;
    this.loan = 0;
    this.investment = 0;
    this.history = [];
  }

  static addUser(user) {
    User.users.push(user);
  }

  static findByEmail(email) {
    return User.users.find(u => u.email === email);
  }

  static login(email, password) {
    return User.users.find(
      u => u.email === email && u.password === password
    );
  }
}





function validateName(name) {
  name = name.trim();
  if (name.length < 5) return null;
  if (/[^a-zA-Z ]/.test(name)) return null;

  return name
    .toLowerCase()
    .split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function validateEmail(email) {
  email = email.trim().toLowerCase();

  if (email.includes(" ")) return null;
  if (email.length < 10) return null;
  if ((email.match(/@/g) || []).length !== 1) return null;
  if (User.findByEmail(email)) return null;
  return email;
}

function validateAge(age) {
  age = age.trim();
  if (!/^\d{1,2}$/.test(age)) return null;
  return Number(age);
}

function validatePassword(password) {
  password = password.trim();
  if (password.includes(" ")) return null;
  if (password.length < 7) return null;
  if (!/[@#\-+\*\/]/.test(password)) return null;
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


let currentUser = null;

function login() {
  let email = prompt("Email").trim().toLowerCase();
  let password = prompt("Password");

  let user = User.login(email, password);
  if (!user) return alert("Invalid credentials");

  currentUser = user;
  userMenu();
}



function userMenu() {
  while (true) {
    let choice = prompt(`
Balance: ${currentUser.balance} DH
1- Withdraw
2- Deposit
3- Loan
4- Invest
5- History
6- Logout
`);

    if (choice === "6") {
      currentUser = null;
      break;
    }

    switch (choice) {
      case "1": withdraw(); break;
      case "2": deposit(); break;
      case "3": loan(); break;
      case "4": invest(); break;
      case "5": history(); break;
    }
  }
}





