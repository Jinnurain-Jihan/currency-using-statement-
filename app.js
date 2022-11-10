// let amount=prompt("Enter your amount");
// let currency=prompt("Enter your currency");

// if(amount=="" || currency==""){
//     alert("All fields are required!");
// }else{
//     if(currency=="dollar"){
//         console.log(`
//         ${amount} ${currency}=${amount*86.5} BDT
//         `);
//     }else if(currency=="pound"){
//         console.log(`
//         ${amount} ${currency}=${amount*99.3} BDT
//         `);
//     }else if(currency=="euro"){
//         console.log(`
//         ${amount} ${currency}=${amount*74.2} BDT
//         `);
//     }
// }
let name=prompt("enter your name");
let age=prompt("enter your age");
if(name==""|| age==""){
    alert("all fields are required");
}else{
    if(age>0 && age<10){
        console.log("tmi amdr sathe jeta parbe na");
    }else if(age>=10 && age <=18){
        console.log("tmi garir pichoner sit a bosbe");
    }else if(age>18){
        console.log("tmi garir samner sit a bosbe");
    }
}