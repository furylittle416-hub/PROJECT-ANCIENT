// player-manager.ts

// Function to create a player account
function createPlayerAccount(username: string, email: string): { username: string; email: string } {
    // Logic to create a player account
    return { username, email };
}

// Function to create a company
function createCompany(companyName: string): { companyName: string } {
    // Logic to create a company
    return { companyName };
}

// Example usage
const player = createPlayerAccount('exampleUser', 'user@example.com');
const company = createCompany('exampleCompany');

console.log(player);
console.log(company);