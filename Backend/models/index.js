const mongoose = require("mongoose");
const uri = "mongodb+srv://swapnil:Sk%4012345@cluster0.gmjmgio.mongodb.net/Wearhouse?retryWrites=true&w=majority";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };