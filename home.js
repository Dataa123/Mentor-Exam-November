import localStorage from "./register.js";

const info = JSON.parse(localStorage.getItem('info'));
console.log(info);