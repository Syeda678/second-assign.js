const account = {
  accountName: "some name",
  balance: 100, // we know this should be 100 from start
  getBalance: function () {
    alert("Your balance is " + this.balance);
    atm();
  },
  deposit: function () {
    let dep = parseFloat(prompt("How much would you like to deposit?"));
    if ((isNaN(dep) && dep) || dep <= 0) {
      return alert("Error: Please enter a valid number!");
    } else {
      let add = dep + 100;
      alert("Your current balance is " + add);
      atm();
    }
  },
  withdrawal: function () {
    let wit = parseFloat(prompt("How much would you like to withdraw?"));
    if ((isNaN(wit) && wit) || wit <= 0) {
      return alert("Error: Please enter a valid number!");
    } else {
      let sub = wit - 100;
      alert("Your current balance is " + sub);
      atm();
    }
  },
  getAccountName: function () {
    let name = prompt("Enter the name");
    if (isNaN(name)) {
      alert("Name of account: " + name);
      atm();
    } else {
      alert("Error: wrong input!");
      atm();
    }
  },
  exitWindow: function windowClose() {
    Window.close();
  },
};
function atm() {
  let choice = parseInt(
    prompt(
      "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
    )
  );
  switch (choice) {
    case 1:
      console.log(account.getBalance());
      break;
    case 2:
      console.log(account.deposit());
      break;
    case 3:
      console.log(account.withdrawal());
      break;
    case 4:
      console.log(account.getAccountName());
      break;
    case 5:
      console.log(account.exitWindow());
      break;
    default:
      console.log("Wrong input please choose between 1 - 5");
  }
}
atm();
