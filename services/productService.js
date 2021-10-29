// servicios manejo transaccional que debemos llevar hacia un producto
const faker = require('faker');
const boom = require('@hapi/boom');

class ProductsService {
  // fuente de datos que manejaremos todo en memoria
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        precio: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  // create(product = {}) {
  //   const newProduct = {
  //     id: this.products[this.products.length - 1].id + 1,
  //     name: product.name,
  //     price: parseInt(product.price),
  //     image: product.image,
  //   };
  //   this.products.push(newProduct);

  //   return newProduct;
  // }

  async create({ name, price, image }) {
    const newProduct = {
      id: faker.datatype.uuid(),
      // ...data,
      name,
      price,
      image,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }

  async findOne(id) {
    // const name = this.getTotal();
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('Product is block');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      // throw new Error('Product not found');
      throw boom.notFound('Product not found');
    }
    // this.products[index] = changes;
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      // throw new Error('Product not found');
      throw boom.notFound('Product not found');
    }
    this.products.splice(index, 1);
    return { message: true };
  }
}

module.exports = ProductsService;
