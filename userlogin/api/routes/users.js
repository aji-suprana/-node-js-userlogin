const express = require('express');
const router = express.Router();

router.post('/signup',(req,res,next)=>
{
    res.status(200).json({
        message:"signup is called"
    });
});

module.exports = router;