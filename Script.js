const prompt = require('prompt-sync')();

console.log("************************")
console.log("|Welcome To ATM Machine|")
console.log("************************\n\n")

console.log("******************************")
console.log("* 1 - Check Balance\t |")
console.log("* 2 - Deposit \t\t |")
console.log("* 3 - Withdraw \t\t |")
console.log("* 4 - Transfer \t\t |")
console.log("* 5 - Exit \t\t |")
console.log("*******************************")

let option = prompt("Choose an option : ");

if (option === "1") {
    function checkBalance(balance) {
        console.log("Your Balance is ",balance)

    }
    checkBalance("1000Tk")
}else if (option === "2") {
    function deposit() {
        let depositMoney = prompt("How Much Do You Deposit? :")
        console.log(depositMoney,"Deposit Money Successfull");
    }
    deposit();
}else if (option === "3") {
    function withdraw() {
        let withdrawAmount = prompt("How Much Do You Withdraw? :")
        console.log(withdrawAmount,"Withdraw Money Successfull");
    }
    withdraw();
}else if (option === "4") {
    function Transfer (){
        let transferNumber = prompt("Write Number There you want to send or transfer : ");
        let transferAmount = prompt("Amount : ")
        console.log("Transfer Money To",transferNumber)
        console.log("Totall Amount :",transferAmount)
        let sureTransferAmount = prompt("Are You sure(y/n):");

        if(sureTransferAmount === "y") {
            console.log(`Money Transfer Successfully on ${transferNumber} Tranfer Money is ${sureTransferAmount} TrxId :XXXXXEJEI234`);
        }
    }
    Transfer()
}