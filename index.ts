#! /usr/bin/env node

// shebang command for publish this code on NPM


// now code starts from here below

import inquirer from "inquirer";
import figlet from "figlet";

// Prints Welcome Msg

await figlet.text("Zain  Ul  Abideen", async (err, art) => {
  if (err) {
    console.error(err);
  } else {
    console.log("");
    console.log(art);
    console.log("Welcome to Zain's ATM machine!");
    console.log("");
  }
});

// Data
let myBalance = 20000;
let myUserName = "";
let myPin = "";

// Username input
let userNameAnswer = await inquirer.prompt([
  { name: "userName", message: "Please enter your name", type: "string" },
]);

myUserName = userNameAnswer.userName;

//Create New Pin and login to account

let pinAnswer = await inquirer.prompt([
  { name: "pin", message: "Create a new pin code", type: "number" },
  { name: "enterPin", message: "Please enter your pin", type: "number" },
]);

if (pinAnswer.pin === pinAnswer.enterPin) {
  myPin = pinAnswer.pin;
  console.log(`Pin Codes Matched`);
} else {
  console.log("");
  console.log(`${myUserName} Your Pin Code does not match`);
}

// 1234 === 12345  false

if (pinAnswer.pin === myPin) {
  console.log("");
  console.log("Welcome to your account " + myUserName + " !!! 🙂");
  console.log(`Your Current Balance is: ${myBalance}
  `);

  // List of operations

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select an option which you want to do:",
      type: "list",
      choices: [
        "Withdraw",
        "Fast Cash",
        "Deposit",
        "Send Money",
        "Pay Bills",
        "Balance Inquiry",
      ],
    },
  ]);

  // Withdraw setup

  if (operationAns.operation === "Withdraw") {
    let withdrawAns = await inquirer.prompt([
      { name: "amount", message: "Please Enter Amount", type: "number" },
    ]);

    if (withdrawAns.amount > myBalance) {
      console.log("");
      console.log("Insufficient Balance");
      console.log(`Please Select amount between: ${myBalance}`);
      console.log("");
    } else {
      myBalance -= withdrawAns.amount;

      console.log("");
      console.log("Withdraw Successful !!");
      console.log(`${myUserName} Your Remaining Balance is: ${myBalance}
      `);
    }
  }

  // Fast Cash Setup
  else if (operationAns.operation === "Fast Cash") {
    let fastCashAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Please Select an amount:",
        type: "list",
        choices: ["500", "1000", "2000", "5000"],
      },
    ]);

    if (fastCashAns.amount > myBalance) {
      console.log("Insufficient Balance !!");
      console.log(`Please Select amount between: ${myBalance}`);
    } else {
      myBalance -= fastCashAns.amount;

      console.log("");
      console.log("Withdraw Successful !!");
      console.log(`${myUserName} Your Remaining Balance is: ${myBalance}
      `);
    }
  }

  // Deposit setup
  else if (operationAns.operation === "Deposit") {
    let depositAns = await inquirer.prompt([
      { name: "amount", message: "Please Enter Amount", type: "number" },
    ]);

    myBalance += depositAns.amount;

    console.log("");
    console.log("Deposit Successful !!");
    console.log(`${myUserName} Your New Balance is: ${myBalance}
    `);
  }

  // Send Money setup
  else if (operationAns.operation === "Send Money") {
    let sendMoneyAns = await inquirer.prompt([
      { name: "amount", message: "Please Enter Amount", type: "number" },
      { name: "receiver", message: "Enter Receiver's Name", type: "string" },
      {
        name: "receiverPhone",
        message: "Enter Receiver's Phone Number",
        type: "number",
      },
    ]);

    myBalance -= sendMoneyAns.amount;

    console.log("");
    console.log(`Money Sent Successfully to ${sendMoneyAns.receiver} !!`);
    console.log(`${myUserName} Your Remaining Balance is: ${myBalance}
    `);
  }

  // Pay Bills setup
  else if (operationAns.operation === "Pay Bills") {
    let payBillsAns = await inquirer.prompt([
      {
        name: "bill",
        message: "Please Select Your Bill",
        type: "list",
        choices: ["Electricity", "Gas", "Internet"],
      },
    ]);

    // ELECTRICITY BILL
    if (payBillsAns.bill === "Electricity") {
      let electricityAns = await inquirer.prompt([
        {
          name: "accNo",
          message: "Enter You Bill Account No.",
          type: "number",
        },
        { name: "amount", message: "Please Enter Amount", type: "number" },
      ]);
      if (electricityAns.amount > myBalance) {
        console.log("Insufficient Balance !!");
        console.log(`Please Select amount between: ${myBalance}`);
      } else {
        myBalance -= electricityAns.amount;

        console.log("");
        console.log("You Have Successfully Paid Your Electricity Bill !!");
        console.log(`${myUserName} Your Remaining Balance is: ${myBalance}
        `);
      }
    }

    // GAS BILL
    else if (payBillsAns.bill === "Gas") {
      let gasAns = await inquirer.prompt([
        {
          name: "accNo",
          message: "Enter You Bill Account No.",
          type: "number",
        },
        { name: "amount", message: "Please Enter Amount", type: "number" },
      ]);
      if (gasAns.amount > myBalance) {
        console.log("Insufficient Balance !!");
        console.log(`Please Select amount between: ${myBalance}`);
      } else {
        myBalance -= gasAns.amount;

        console.log("");
        console.log("You Have Successfully Paid Your Gas Bill !!");
        console.log(`${myUserName} Your Remaining Balance is: ${myBalance}
        `);
      }
    }

    // INTERNET BILL
    else if (payBillsAns.bill === "Internet") {
      let internetAns = await inquirer.prompt([
        {
          name: "accNo",
          message: "Enter You Bill Account No.",
          type: "number",
        },
        { name: "amount", message: "Please Enter Amount", type: "number" },
      ]);
      if (internetAns.amount > myBalance) {
        console.log("Insufficient Balance !!");
        console.log(`Please Select amount between: ${myBalance}`);
      } else {
        myBalance -= internetAns.amount;

        console.log("");
        console.log("You Have Successfully Paid Your Internet Bill !!");
        console.log(`${myUserName} Your Remaining Balance is: ${myBalance}
        `);
      }
    } else {
      console.log("Invalid Bill !!");
    }
  }

  // Balance inquiry setup
  else if (operationAns.operation === "Balance Inquiry") {
    console.log("");
    console.log(`${myUserName} Your Balance is: ${myBalance}
    `);
  }
} else {
  console.log(`
  Incorrect Pin !!
  `);
}
