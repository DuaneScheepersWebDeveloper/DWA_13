//In your terminal
//npm run doc  --> this runs your jsdoc
//tsc -w  --> this runs and watches for any changes in your TypeScript src and publishes it to your public file
const provinces = [
  'Western Cape',
  'Gauteng',
  'Northern Cape',
  'Eastern Cape',
  'KwaZulu-Natal',
  'Free State',
];
const names = [
  'Ashwin',
  'Sibongile',
  'Jan-Hendrik',
  'Sifso',
  'Shailen',
  'Frikkie',
];
//----------------------------------------------------------------
// foreach a higher order function
//1.Use forEach to console log each name to the console.
// You are allowed to call console.log seven times. -done
names.forEach((name, index) => {
  const newValue = `${name} - ${provinces[index]}`;
  console.log(newValue);
});
//----------------------------------------------------------------
//2.Using map loop over all province names and turn the string to all uppercase.
//Log the new array to the console.-done
const provincesUpperCase = provinces.map((provinces) =>
  provinces.toUpperCase()
);
console.log(provincesUpperCase);
//----------------------------------------------------------------
//3.Create a new array with map that has the amount of characters in each name.
//The result should be: [6, 9, 11, 5, 8, 7, 7]
const characterCounts = names.map((name) => name.length);
console.log(characterCounts);
//----------------------------------------------------------------
//4.Using toSorted to sort all provinces alphabetically.
const sortArrayAlphabetically = (arr: string[]) => {
  return arr.sort();
};
const sortedNames = sortArrayAlphabetically(names);
console.log(sortedNames);
//----------------------------------------------------------------
//5.Use filter to remove all provinces that have the word Cape in them. After filtering the array, return the
//amount of provinces left. The final value should be 3
const filteredProvinces = provinces.filter(
  (province) => !province.includes('Cape')
);
console.log(filteredProvinces.length);
//----------------------------------------------------------------
//5.Create a boolean array by using map and some to determine whether a name contains an S character.
//The result should be [true, true, false, true, false, true, false]
const booleanArray = names.map((name) => name.includes('S'));
console.log(booleanArray);
//----------------------------------------------------------------
//6.Using only reduce, turn the above into an object that indicates the province of an individual.
const provinceByNames: { [key: string]: string } = names.reduce(
  (acc: { [key: string]: string }, name, index) => {
    acc[name] = provinces[index];
    return acc;
  },
  {}
);

console.log(provinceByNames);
//----------------------------------------------------------------
//7.Use forEach to console.log each product name to the console.
const products = [
  { product: 'banana', price: '2' },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: '8' },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

products.forEach((product) => {
  console.log(product);
});
//----------------------------------------------------------------
//8.Use filter to filter out products that have a name longer than 5 characters
const filteredProducts1 = products.filter(
  (product) => product.product.length <= 5
);
//----------------------------------------------------------------
//9.Using both filter and map. Convert all prices that are strings to numbers, and remove all products from the array that do not have prices. After this has been done
//then use reduce to calculate the combined price of all remaining products.
const combinedPrice = products
  .filter(
    (product) => typeof product.price === 'number' && !isNaN(product.price)
  )
  .map((product) => ({ ...product, price: Number(product.price) }))
  .reduce((totalPrice, product) => totalPrice + product.price, 0);
//----------------------------------------------------------------
//10.Use reduce to concatenate all product names to create the
//following string: banana, mango, potato, avocado, coffee and tea.
const productNames = products.reduce((acc, product, index) => {
  if (index === products.length - 1) {
    return `${acc} and ${product.product}.`;
  } else {
    return `${acc}${product.product}, `;
  }
}, '');
//----------------------------------------------------------------
//11.Use reduce to calculate both the highest and lowest-priced items. The names should be returned
// as the following string: Highest: coffee. Lowest: banana.
const result = products.reduce(
  (acc, cur) => {
    const price = Number(cur.price);
    if (!isNaN(price)) {
      // only consider products with valid prices
      if (price > acc.highest.price) {
        acc.highest = { product: cur.product, price };
      }
      if (price < acc.lowest.price) {
        acc.lowest = { product: cur.product, price };
      }
    }
    return acc;
  },
  {
    highest: { product: '', price: -Infinity },
    lowest: { product: '', price: Infinity },
  }
);

const output = `Highest: ${result.highest.product}. Lowest: ${result.lowest.product}.`;
console.log(output); // "Highest: coffee. Lowest: banana."
//----------------------------------------------------------------
//12 Using only Object.entries and reduce recreate the object with the exact same values. However, the following object keys should be changed in the new array in typescript:
//     product should be changed to name
//     price should be changed to cost
const updatedProducts = products.reduce<
  Array<{ name: string; cost: string | number }>
>((acc, { product, price }) => {
  const updatedObject = {
    name: product,
    cost: price,
  };
  acc.push(updatedObject);
  return acc;
}, []);
console.log(updatedProducts);
