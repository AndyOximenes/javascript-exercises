const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
  }
  
  function createTransaction(transaction) {
    user.transactions.push(transaction)
  
    if(transaction.type == 'credit'){
      user.balance = user.balance + transaction.value
    }else{
      user.balance = user.balance - transaction.value
    }
  }
  
  
  function getHigherTransactionByType (type) {
  
    let higherTransaction
    let higherValue = 0
  
    for(let transaction of user.transactions) {
      if(type == transaction.type && higherValue < transaction.value ){
        higherValue = transaction.value
        higherTransaction = transaction
      }
    }
    console.log(higherTransaction)
  }
  
  function getAverageTransactionValue(){
    let sum = 0
    for(let transaction of user.transactions){
      sum += transaction.value
  }
    console.log(sum / user.transactions.length)
  }
  
  function getTransactionsCount(){
    let credit = 0
    let debit = 0
  
    for(let transaction of user.transactions){
      if(transaction.type == 'credit'){
        credit++
      }else{
        debit++
      }
    }
    return {
      credit,
      debit
    }
  }
  
  
  createTransaction({ type: 'credit', value: 50 })
  createTransaction({ type: 'credit', value: 120 })
  createTransaction({ type: 'debit', value: 80 })
  createTransaction({ type: 'debit', value: 30 })
  
  console.log(user.balance)
  
  getHigherTransactionByType('credit')
  getHigherTransactionByType('debit')
  
  getAverageTransactionValue()
  
  console.log(getTransactionsCount())