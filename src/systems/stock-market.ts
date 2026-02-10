// stock-market.ts

// This module implements a stock exchange and trading system

// Define Stock class
class Stock {
    constructor(public symbol: string, public price: number) {}
}

// Define Exchange class
class Exchange {
    private stocks: Stock[] = [];

    addStock(stock: Stock) {
        this.stocks.push(stock);
    }

    getStock(symbol: string): Stock | undefined {
        return this.stocks.find(stock => stock.symbol === symbol);
    }

    listStocks(): Stock[] {
        return this.stocks;
    }
}

// Define Trader class
class Trader {
    constructor(public name: string) {}
    buy(stock: Stock, quantity: number) {
        console.log(`${this.name} bought ${quantity} of ${stock.symbol} at ${stock.price}`);
    }
    sell(stock: Stock, quantity: number) {
        console.log(`${this.name} sold ${quantity} of ${stock.symbol} at ${stock.price}`);
    }
}

// Example usage
const exchange = new Exchange();
const appleStock = new Stock('AAPL', 150);
exchange.addStock(appleStock);

const trader = new Trader('John Doe');
trader.buy(appleStock, 10);

// List all stocks in the exchange
console.log(exchange.listStocks());
