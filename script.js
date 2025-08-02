const btnel = document.getElementById("btn");

const birthdayel = document.getElementById("birthday");

const res = document.getElementById("result");

function calculateage(){
    //console.log("clicked");

    const birthdayValue = birthdayel.value ;

    //console.log(birthdayValue)

    if(birthdayValue==""){
        alert("Please enter your birthday");
    }else{
        const age = getage(birthdayValue);
        
        if(age<1) {
            res.innerText = `Your age is ${age} Years old`
        }else{
            res.innerText = `Your age is ${age} Year old`
        }

    }


}

function getage(birthdayValue){
    const currentdate = new Date();
    const birthdate = new Date(birthdayValue);

    let age = currentdate.getFullYear() - birthdate.getFullYear();

    const month = currentdate.getMonth() - birthdate.getMonth();

    if(month<0 || ( month==0 && currentdate.getDate()< birthdate.getDate()) ){
        age--;
    }

    return age;

}

btnel.addEventListener("click",calculateage)