const productsTable = [
  {
    id: 1,
    title: "Nitro Laptop",
    price: 999.99,
    description: "Fastest laptop",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Vue Monitor",
    price: 299.99,
    description: "4K display",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Mechanical Keyboard",
    price: 149.99,
    description: "Clicky keys",
    image: "https://via.placeholder.com/150",
  },
];

let messagesTable = [];

export const db = {
  async getProducts() {
    return productsTable;
  },

  async getProductById(id) {
    return productsTable.find((p) => p.id === parseInt(id));
  },

  async addMessage(message) {
    messagesTable.push(message);
    return message;
  },

  async getMessages() {
    return messagesTable;
  },
};
