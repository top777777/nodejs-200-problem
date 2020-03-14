const order1 = { no: 1, productName: "티셔츠", price: "30000"};
const order2 = { no: 2, productName: "청바지", price: "45000"};
const order3 = { no: 3, productName: "shoes", price: "55.70"};
const order4 = { no: 4, productName: "sunglas", price: "120.80"};

const concatenate = order1.price + order2.price;
const sum1 = parseInt(order1.price, 10) + parseInt(order2.price, 10);
const sum2 = parseInt(order3.price, 10) + parseInt(order4.price, 10);
const sumNumber = Number(order3.price) + Number(order4.price);

console.log(concatenate);
console.log(sum1);
console.log(sum2);
console.log(sumNumber);