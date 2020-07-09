const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  manufacturer: {
    type: ObjectId,
    ref: 'Manufacrurer'
  }
});

const ManufacturerSchema = Schema({
  id: ObjectId,
  name: String,
});

const Product = Model('Product', productSchema);
const Manufacturer = model('Manufacturer', ManufacturerSchema);

module.exports = {Product, Manufacturer};