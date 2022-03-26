// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})

// Categories have many Products

// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  foreignKey: 'producttag_id',
  // or would it be product id from the producttag reference in the model?
})

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// Team.hasMany(Player);
// Player.belongsTo(Team);