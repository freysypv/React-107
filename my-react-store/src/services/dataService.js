//this is my logic. I will export the data from here and import it in the Catalog.jsx file and then map through it to display the products.
// product catalog data
const Catalog = [
  {
    title: "Orange",
    category: "Fruits",
    price: 15.99,
    image: "orange.png.png",
    _id: "1", //must be unique
  },
  {
    title: "Apple",
    category: "Fruits",
    price: 18.99,
    image: "apple.png.png",
    _id: "2", //must be unique
  },
  {
    title: "Strawberry",
    category: "Berries",
    price: 14.99,
    image: "./strawberry.png.png",
    _id: "3", //must be unique
  },
  {
    title: "Banana",
    category: "Fruits",
    price: 5.99,
    image: "./banana.png.jpg",
    _id: "4", //must be unique
  },
];

class dataService {
  //this is a class that will contain the logic to get the products from the catalog.
  getProducts() {
    //this is a method that will return the products from the catalog
    return Catalog;
  }
}

export default dataService; //this is the default export of the DataService class.
//now we have a component.
