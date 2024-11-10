const form = document.getElementById('form');
const submit = document.getElementById('submit');

function done(name1, email, password, adminChose){
    localStorage.setItem('info', JSON.stringify([name1, email, password, adminChose]));
    window.location.href = "./login.html";
}

submit.addEventListener('click', function(e){
    e.preventDefault();
    const name1 = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const confirmPassword = form.elements.confirmPassword.value;
    const adminChose = form.elements.adminChose.value;
    if(password == confirmPassword && name1 != '' && email != '' && password != '' && confirmPassword != ''){
        done(name1, email, password, adminChose);
    } 

})

export default localStorage;
