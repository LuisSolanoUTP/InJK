const {Router}= require('express');
const router= Router();

const{renderAbout,renderIndex,renderReport}=require('../controllers/index.controller');

router.get('/', renderIndex);

router.get('/about',renderAbout);

router.get('/reportes',renderReport);

module.exports=router;