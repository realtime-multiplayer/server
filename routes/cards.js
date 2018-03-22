const express   = require('express');
const router    = express.Router();
const {addCard} = require('../controllers/cards')
const {sendUploadToGCS} = require('../middleware/uploadGCS')
const multer = require('multer')

const upload = multer({
   storage  : multer.memoryStorage(),
   limits   : {
     fileSize: 10*1024*1024
  } 
 })

router.post('/add',upload.single('image'),sendUploadToGCS,addCard)


module.exports = router