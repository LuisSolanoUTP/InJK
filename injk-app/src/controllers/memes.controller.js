const memesCtrl={};
const Meme=require('../models/Meme');

memesCtrl.renderMemeForm=(req,res)=>{
    res.render('memes/new-meme')
};

memesCtrl.createNewMeme=async (req,res)=>{
    const {title,memelink}=req.body;
    const newMeme= new Meme({title, memelink});
    newMeme.user=req.user.id;
    await newMeme.save();
    req.flash('success_msg','Meme Added Successfully');
    res.redirect('/memes');
};

//este metodo es el que trae todos los memes, por lo tanto hay que mandar en el index controler a hacer algo similar cuando traiga lo de home
memesCtrl.renderMemes=async (req,res)=>{
    const memes=await Meme.find({user:req.user.id}).sort({createdAt:'desc'}).lean();
    res.render('memes/all-memes',{memes});
};

memesCtrl.renderEditForm= async (req,res)=>{
    const meme=await Meme.findById(req.params.id).lean();
    if(meme.user!=req.user.id){
        req.flash('error','>:( Not authorized');
        return res.redirect('/memes');
    }
    res.render('memes/edit-meme', {meme});
};

memesCtrl.updateMeme= async (req,res)=>{
    const { title, memelink, user} = req.body;
    const meme=await Meme.findById(req.params.id).lean();
    if(meme.user!=req.user.id){
        req.flash('error','>:( Not authorized');
        return res.redirect('/memes');
    }
    await Meme.findByIdAndUpdate(req.params.id, {title, memelink});
    req.flash('success_msg','Meme Edited Successfully');
    res.redirect('/memes');
};

memesCtrl.deleteMeme=async (req,res)=>{
    const meme=await Meme.findById(req.params.id).lean();
    if(meme.user!=req.user.id){
        req.flash('error','>:( Not authorized');
        return res.redirect('/memes');
    }
    await Meme.findByIdAndDelete(req.params.id);
    req.flash('success_msg','Meme Deleted Successfully');
    res.redirect('/memes');
};

module.exports=memesCtrl;