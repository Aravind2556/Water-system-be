const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema({
  busNo: {type: String,required: true, unique: true, trim: true},
  startPoint: {type: String,required: true,trim: true},
  endPoint: { type: String,required: true,trim: true},
  totalSeat : {type : Number , required : true},
}, { timestamps: true }); 

const BusModel = mongoose.model('BusTracking', BusSchema);

module.exports = BusModel;
