function solve(commands) {

    let atmBalance = [];

    function insert(banknotes) {
        atmBalance.push(...banknotes);
        return `Service Report: ${getSum(banknotes)}$ inserted. Current balance: ${getSum(atmBalance)}$.`;
    }

    function getSum(atmBalance) {
        return atmBalance.reduce((a, b) => a + b, 0);
    }

    function withdraw(personalBalance, moneyToWithdraw) {
        atmBalance = atmBalance.sort((a, b) => b - a);
        let sum = 0;

        for (let i = 0; i < atmBalance.length; i++) {
            if (sum === moneyToWithdraw) {
                break
            }
            if (sum + atmBalance[i] <= moneyToWithdraw) {
                sum += Number(atmBalance.splice(i, 1));
                i--;
            }
        }

        return `You get ${moneyToWithdraw}$. Account balance: ${personalBalance - sum}$. Thank you!`
    }

    function report(value) {
        let counter = 0;

        for (let i = 0; i < atmBalance.length; i++) {
            const banknote = atmBalance[i];
            if (value === banknote) {
                counter++;
            }
        }
        return `Service Report: Banknotes from ${value}$: ${counter}.`;
    }

    for (let command of commands) {
        if (command.length > 2) {
            console.log(insert(command));
        } else if (command.length === 2) {
            let [personalBalance, moneyToWithdraw] = command;

            if (personalBalance < moneyToWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${personalBalance}$.`);
            } else if (moneyToWithdraw > getSum(atmBalance)) {
                console.log('ATM machine is out of order!');
            } else {
                console.log(withdraw(personalBalance, moneyToWithdraw, atmBalance));
            }
        } else {
            let value = command[0];
            console.log(report(value));
        }
    }
}

solve([
        [20, 5, 100, 20, 1],
        [457, 25],
        [1],
        [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
        [20, 85],
        [5000, 4500],
    ]
);