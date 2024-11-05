const mongoose = require('mongoose')

const OrdersSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    Pid: {
        type: Number,
        required: true
    },
oPrice: {
        type: Number,
        required: true
    },
    ShippingAddress: {
        type: String,
        required: true
    },
orderDate: {
        type:String
    },
})

const Orders = mongoose.model("Orders", OrdersSchema)

module.exports =Orders;
