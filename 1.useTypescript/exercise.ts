// Problem: turn this code with types
// let bankAccount = {
//     money: 2000,
//     deposit(value) {
//         this.money += value;
//     }
// };

// let myself = {
//     name: "Max",
//     bankAccount: bankAccount,
//     hobbies: ["Sports", "Cooking"]
// };

// myself.bankAccount.deposit(3000);

// console.log(myself);

// *****************************************************
// solution

type bankAccountType = {
    money: number,
    deposit: (value: number) => void
};

let bankAccount: bankAccountType = {
    money: 2000,
    deposit(value){
        this.money += value;
    }
}

let myself: {
    name: string,
    bankAccount: bankAccountType,
    hobby: string[]
} = {
    name: "Jasen",
    bankAccount: bankAccount,
    hobby: ["react", "vue", "ng"]
};

myself.bankAccount.deposit(3000);
console.log(myself)
