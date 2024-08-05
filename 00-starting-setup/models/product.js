const db = require('../util/database')

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO products (title,price,imageurl,description) VALUES (?,?,?,?)',
      [this.title,this.price,this.imageUrl,this.description]
    );
  
  }

  static deleteByID(id){

  }

  static fetchAll(cb) {
   return db.execute('SELECT * FROM product')
  }


  static findByID(id) {
    return db.execute('SELECT * FROM  products WHERE products.id = ?',[id]);
  }
  
};
