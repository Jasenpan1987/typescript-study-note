// Problem: turn this code with types
// let bankAccount = {
//     money: 2000,
//     deposit(value) {
//         this.money += value;
//     }
// };
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Jasen",
    bankAccount: bankAccount,
    hobby: ["react", "vue", "ng"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
