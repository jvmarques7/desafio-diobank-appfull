const conta = {
    email: 'admin@dio.bank',
    password: '123456',
    name: 'Joao Victor',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
