const indexCtrl={};
const Meme=require('../models/Meme');
const User=require('../models/User');
indexCtrl.renderIndex = async (req, res)=>{
    const memes=await Meme.find().sort({createdAt:'desc'}).lean();
    res.render('index',{memes});
};

indexCtrl.renderAbout = (req, res)=>{
    res.render('about');
};

indexCtrl.renderReport = async (req, res)=>{
    const memes=await Meme.count().lean();
    const users=await User.count().lean();
    res.render('reports/reports',{users,memes});
};

module.exports=indexCtrl;