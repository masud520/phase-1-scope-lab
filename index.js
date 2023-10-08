
// Declare a variable in global scope called customerName using the var keyword.
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'Masud';

function upperCaseCustomerName(){
    if(typeof customerName === 'string'){
        customerName= customerName.toUpperCase();
    }
}

function setBestCustomer(){
   bestCustomer = 'not bob';

}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer(){
   leastFavoriteCustomer = 'Zobegah'
}


