#! /usr/bin/env node

import inquirer from "inquirer";

let Convertion ={
    "PKR":{
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP":{
        "USD": 1.21,
        "PKR": 271.79,
        "GBP" : 1
    },
    "USD":{
        "PKR":225.50,
        "GBP":0.83,
        "USD":1

    }
}

const answer :{
    from: "PKR" | "GBP" | "USD",
    to: "PKR" | "GBP" | "USD",
    amount:number
}= await inquirer.prompt([{
    type:"list",
    name:"from",
    choices:["PKR","USD","GBP"],
    message:"SELECT YOUR CURRENCY:"
},
{
    type:"list",
    name:"to",
    choices:["PKR","USD","GBP"],
    message:"IN WHICH CURRENCY YOU WANT TO CONVERT:"
},
{
    type:"number",
    name:"amount",
    message:"ENTER AMOUNT THAT CONVERT:"
}

]);

const {from,to,amount} = answer;
if (from && to && amount){
    let result = Convertion[from][to] * amount
    console.log(`YOUR CONVERSION FROM ${from} TO ${to} IS ${result}`)
}else{
    console.log("INVALID INPUT")
}