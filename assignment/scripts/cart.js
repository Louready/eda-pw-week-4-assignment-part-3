console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem( item ){
  console.log('in addItem', item );
  basket.push ( item );
  return basket;
} //end of addItem

addItem( 'bread' );
addItem( 'dough' );
addItem( 'cash' );
console.log (basket);

function loop(){
for (let i = 0; i < basket.length; i++) {
  console.log(i, basket[i]);
}
}
loop()
function emptyCart(array) {
  while ( basket.length > 0 ) {
    basket.pop();


  }
}
emptyCart()
console.log( 'items in ' , basket );
