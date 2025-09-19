const Onix = require('./class/onix')

const Polo = require('./class/polo')

const Strada = require('./class/Strada')


const onix = new Onix("Onix LT Turbo")

const polo = new Polo("Polo Comfortline")

const strada = new Strada("Strada Volcano")


console.log(onix.acessoPainel())

console.log(polo.acessoPainel())

console.log(strada.acessoPainel())