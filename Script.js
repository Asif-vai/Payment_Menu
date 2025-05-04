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

let pin = prompt("Enter your PIN to continue: ");

if (pin === "BoomBoom") {
    let option = prompt("Choose an option : ");

    if (option === "1") {
        function checkBalance(balance) {
            console.log("Your Balance is", balance)
        }
        checkBalance("1000Tk")

    } else if (option === "2") {
        function deposit() {
            let depositMoney = prompt("How Much Do You Deposit? : ");
            console.log(depositMoney, "Deposit Money Successful");
        }
        deposit();

    } else if (option === "3") {
        function withdraw() {
            let withdrawAmount = prompt("How Much Do You Withdraw? : ");
            console.log(withdrawAmount, "Withdraw Money Successful");
        }
        withdraw();

    } else if (option === "4") {
        function transfer() {
            let transferNumber = prompt("Write number where you want to send or transfer: ");
            let transferAmount = prompt("Amount: ");
            console.log("Transfer Money To", transferNumber);
            console.log("Total Amount:", transferAmount);
            let sureTransferAmount = prompt("Are you sure (y/n): ");

            if (sureTransferAmount.toLowerCase() === "y") {
                console.log(`Money Transfer Successfully on ${transferNumber}. Transfer Money is ${transferAmount}. TrxId: XXXXXEJEI234`);
            } else {
                console.log("Transfer canceled.");
            }
        }
        transfer();

    } else if (option === "5") {
        console.log("Thank you for using the ATM. Goodbye!");

    } else {
        console.log("Invalid option. Please try again.");
    }

} else {
    console.log("Invalid PIN. Access Denied.");
}
