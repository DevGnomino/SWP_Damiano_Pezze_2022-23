// Cookies vs Local Storage vs Session Storage
localStorage.setItem("name", "Martin");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");

sessionStorage.setItem("name", "Gerold");
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name");

document.cookie = "name=Hubert; expires=" + new Date(2023, 0, 1).toUTCString;
document.cookie = "lastName=Huber; expires=" + new Date(9999, 0, 1).toUTCString;
console.log(document.cookie);