// all categories routes
const express = require('express');
const router = express.Router();
const Categories = require('../models/Categories');


//GETS BACK ALL THE CATEGORIES
router.get('/', async(req, res)=>{
    try{
        const categories = await Categories.find();    //find() is a method on mongoose

    }catch(err){
        res.json({message: err})
    }

})
//SUBMITS A CATEGORY
router.post('/', async(req, res)=>{
    const  category = new Categories({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedCategory = await category.save();
        res.json(savedCategory)
    }catch(err){
        res.json({message: err});

    }
})

//GET BACK A SPECIFIC CATEGORY
router.get('/:categoryId', async(req, res) =>{
    try{
    const specificCategory = Categories.findById(req.params.postId);
    res.json(specificCategory);
    }catch(err){
        res.json({messsage: err});
    }
})

//DELETE A SPECIFIC CATEGORY
router.delete('/:categoryId', async (req, res)=>{
    try{
        const removedCategory = await Categories.remove({_id: req.params.postId})  //mongoose method to delete from db
        res.json(removedCategory);

    }catch(err){
        res.json({message: err})
    }
})

//UPDATE A CATEGORY
router.patch('/:categoryId', async (req, res)=>{
    try{   //mongoose method to delete from db
        const updatedCategory = await Categories.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}}) 
        res.json(updatedCategory);

    }catch(err){
        res.json({message: err})
    }
})
module.exports = router;