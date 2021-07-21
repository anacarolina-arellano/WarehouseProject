/**
 * Mocking client-server processing
 */

//make products public
export const _products = [
  {
    id: 1,
    nameProduct: "Blue Dress",
    price: 500.01,
    inventory: 2,
    category: "Clothing",
    description:
      "Beautiful dress that is perfect for any event! Its blue color is trendy, there are only a few left!",
    imageName: "dress.jpeg",
  },
  {
    id: 2,
    nameProduct: "Nike Shoes",
    price: 70.99,
    inventory: 10,
    category: "Shoes",
    description:
      "This pair of shoes is perfect for any occasion. They are super comfortable, you will love them!",
    imageName: "shoes.jpg",
  },
  {
    id: 3,
    nameProduct: "White top",
    price: 19.99,
    inventory: 5,
    category: "Tops",
    description:
      "White top that is perfect for the summer, it is made of good materials and fits sizes S and M.",
    imageName: "top.jpeg",
  },
];

export default {
  getProducts(cb) {
    setTimeout(() => {
      /*const productsInLocalStorage = window.localStorage.getItem("products");
      if (productsInLocalStorage == null) {
        window.localStorage.setItem("products", JSON.stringify(_products))
        cb(_products);
      } else {
        cb(JSON.parse(productsInLocalStorage));
      }*/
    }, 2000);
  },

  saveProducts(newProducts, cb, errorCb)
  {
    setTimeout(() => {
      window.localStorage.setItem("products", JSON.stringify(newProducts))
     // cb()
    }, 1000)
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb();
    }, 100);
  },
};
