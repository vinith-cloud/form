const form=document.getElementById("form");
const email=document.getElementById("email");
const password=document.getElementById("Password");
const emailerr=document.getElementById("emailerr");
const passworderr=document.getElementById("passworderr");



form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(`Email is : ${email.value} and Password is : ${password.value}`
    );    
    const emailtxt=email.value;
    const passwordtxt=password.value
    advancevalidation(emailtxt,passwordtxt);
});

function advancevalidation(email,password){
    console.log(`from function ${email} ${password}`);
    //email validation using regex

    const emailregex = /^\S+@\S+\.\S+$/;

    if(email.match(emailregex)){
        console.log("passed");
        
    }else{
        console.log("failed");
        emailerr.textContent="Try using the format yourname@gmail.com";
    };

    const passwordregex =  /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;

    if(password.match(passwordregex)){
        console.log("passed");
        
    }else{
        console.log("failed");
        passworderr.textContent="Min 8 chars,1 upper,1 lower,1 digit,1 symbol required";
    };

};
