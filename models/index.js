// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// a category has many products
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  // onDelete: 'CASCADE'
});

Category.hasMany(Product, {
  foreignKey: 'category_id'
});

Product.belongsToMany(Tag, {
  through: 'product_tag',
  foreignKey: 'product_id'
});

Tag.belongsToMany(Product, {
  through: 'product_tag',
  foreignKey: 'tag_id'
})



// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
