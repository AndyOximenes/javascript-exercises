const users = [
    {
        name: 'Salvio',
        revenue: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: 'Marcio',
        revenue: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: 'Lucia',
        revenue: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
]

function calculateBalance(revenue, expenses) {
    const revenueSum = numbersSum(revenue)
    const expensesSum = numbersSum(expenses)

    return revenueSum - expensesSum
}

function numbersSum(numbers) {
    let sum = 0
    for (let number of numbers) {
        sum = sum + number
    }

    return sum
}


for (let user of users) {
    let balance = calculateBalance(user.revenue, user.expenses)
    if (balance < 0) {
        console.log(`${user.name} has a NEGATIVE balance of ${balance.toFixed(2)}`)
    } else {
        console.log(`${user.name} has a POSTIVE balance of ${balance.toFixed(2)}`)
    }
}