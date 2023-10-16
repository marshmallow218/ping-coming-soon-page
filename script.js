const btn = document.querySelector('.btn');
const inputEmail = document.querySelector('.email');
const msg = document.querySelector('.message'); 


const validateEmail = email => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|mil|edu|biz|gov|info|name|museum|[a-zA-Z]{2})$/;
    
    return regex.test(email);
};


btn.addEventListener('click', function (e) {
    e.preventDefault();
    
    let text = "";
    const emailValue = inputEmail.value;
    
    if (emailValue === "") {
        text = "Please enter your email address";
        msgStyle("error");
    } else if (validateEmail(emailValue)) {
        text = "Your validation is successful!";
        msgStyle("success");
    } else {
        text = "Please provide a valid email address";
        msgStyle("error");
    }
    return msg.innerText = text;
});

const msgStyle = function (status) {
    if (status === "error") {
        msg.style.color = 'var(--light-red)';
        msg.style.marginBottom = '2em';
        inputEmail.style.borderColor = "var(--light-red)";
    } else if (status === "success") {
        msg.style.color = "#00ff03";
        msg.style.marginBottom = '0.5em';
    };                   
};