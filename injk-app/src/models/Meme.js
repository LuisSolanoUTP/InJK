const {Schema, model}=require('mongoose');

const MemeSchema=new Schema({
    title: {
        type: String,
        required: true
    },
    memelink:{
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports=model('Meme',MemeSchema);