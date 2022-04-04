console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem (item){
    if (isFull()===true){ 
     console.log('Put this', item, 'back please, your basket is full');}
    
    else {basket.push(item);
     console.log('true: I added ',item , 'to my basket')}
};


// Update the required `addItem` function to:
// - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
// - If an item was added to the array, return `true`
// - If there was no room and the item could not be added return `false`
addItem('peas');
console.log('Adding peas to my basket', basket);

function listItems (){
    for (let i=0; i<basket.length; i++){
    console.log('List of items:', basket[i]);}
};
function empty () {
basket=[];
}
empty();
console.log(basket, 'should return empty');

addItem('Sauce');
console.log(basket);
addItem('Peas');
console.log(basket);

// const maxItems = 5;
function isFull () {
    if (basket.length < maxItems){
        return false;
    }
    else {
        return true;
    }
}
console.log( 'In function isFull', isFull());
addItem('Cherry');
addItem('Egg');
addItem('Soup');
console.log('In function isFull', isFull(), 'I cannot fit anymore!');
console.log(addItem('Pear'));
console.log(basket);
console.log(listItems());

function removeItem( itemToRemove ) {
    let locationOfItemToRemove = basket.indexOf(itemToRemove);
    console.log( locationOfItemToRemove);
    if (locationOfItemToRemove === -1){
        return null;

    } else {
    let theRemovedItem = basket.splice(locationOfItemToRemove, 1);
    console.log(basket);
    return theRemovedItem;
    }
    
};

console.log('Removing cherry', removeItem('Cherry'));
console.log('Removing item not in list:', removeItem('Cup'));



