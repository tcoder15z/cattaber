let display = document.getElementById('display');
let exchange = document.getElementById('exchange');


let tab = document.getElementById('tab');
let change= document.getElementById('change');


let coin = 0;
let dollar = 0;



tab.onclick  = function(){
    coin += 1;
    display.textContent = coin;
}
change.onclick  = function(){
    dollar += coin * 0.151901;
    coin=  0;

    exchange.textContent = `$${dollar}`;
    
}
console.log(coin , dollar)
