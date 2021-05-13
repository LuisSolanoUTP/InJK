const {Router}= require('express');
const router= Router();

const {renderMemeForm, 
    createNewMeme, 
    renderMemes, 
    renderEditForm, 
    updateMeme, 
    deleteMeme}=require('../controllers/memes.controller');

const{isAuthenticated}=require('../helpers/auth');

//new meme
router.get('/memes/add',isAuthenticated, renderMemeForm);

router.post('/memes/new-meme', isAuthenticated, createNewMeme);

//get all memes
router.get('/memes', isAuthenticated, renderMemes);

//edit Memes
router.get('/memes/edit/:id', isAuthenticated, renderEditForm);

router.put('/memes/edit/:id', isAuthenticated, updateMeme);

//Delete meme
router.delete('/memes/delete/:id', isAuthenticated, deleteMeme);

module.exports=router;