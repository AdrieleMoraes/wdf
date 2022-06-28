let person={
    name: 'Ana',
    age: 20,
    cc: 123  
}

let operation={
    sacar: function(saldo, valor){
        return saldo-=valor;
    },
    depositar: function(saldo, valor){
        return saldo+=valor;
    }
}

let bank={
    person: person,
    operation: operation,
    saldo: 50
}

let value=20;
console.log(bank.person.name + 
    " portador da conta " + 
    bank.person.cc + 
    " realizou um saque no valor de R$ " +
    value +
    " ficando com R$ " +
    bank.operation.sacar(bank.saldo,value)
);

    let value1=40;
    console.log(bank.person.name + 
        " portador da conta " + 
        bank.person.cc + 
        " realizou um depósito no valor de R$ " +
        value1 +
        " ficando com R$ " +
        bank.operation.depositar(bank.saldo,value1)
);