// Central Bank Monetary Policy and Economic Simulation

class CentralBank {
    constructor() {
        this.interestRate = 0.05; // Default interest rate
        this.moneySupply = 1000000; // Default money supply
    }

    setInterestRate(rate) {
        this.interestRate = rate;
        console.log(`Interest rate set to ${rate * 100}%`);
    }

    adjustMoneySupply(amount) {
        this.moneySupply += amount;
        console.log(`Money supply adjusted by ${amount}. New supply: $${this.moneySupply}`);
    }

    simulateEconomy(years) {
        for (let i = 0; i < years; i++) {
            console.log(`Simulating year ${i + 1}...`);
            // Simple simulation logic
            this.moneySupply *= (1 + this.interestRate);
            console.log(`End of year ${i + 1}: Money Supply is $${this.moneySupply}`);
        }
    }
}

// Example Usage
const centralBank = new CentralBank();
centralBank.setInterestRate(0.03);
centralBank.adjustMoneySupply(500000);
centralBank.simulateEconomy(5);
