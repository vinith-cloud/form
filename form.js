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
        emailerr.classList.add("hidden");
        // emailerr.classList.remove("flex");
        //emailerr.classList.replace("flex","hidden");
        
    }else{
        console.log("failed");
        emailerr.classList.remove("hidden");
        // emailerr.classList.add("flex");
        // emailerr.classList.replace("hidden","flex");


    };

    const passwordregex =  /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;

    if(password.match(passwordregex)){

        console.log("passed");
        passworderr.classList.add("hidden");
        // passworderr.classList.remove("flex");
        // passworderr.classList.replace("flex","hidden");
        

        
    }else{
         console.log("failed");     
        passworderr.classList.remove("hidden");
        // passworderr.classList.add("flex");
        // passworderr.classList.replace("hidden","flex");


    };

};
