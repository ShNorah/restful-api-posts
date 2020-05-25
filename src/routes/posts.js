//all routes go here
const express = require('express');
const router = express.Router();  //call as a function
const Post = require('../models/Post')


//GETS BACK ALL THE POSTS
router.get('/', async(req, res)=>{
    try{
        const posts = await Post.find();    //find() is a method on mongoose

    }catch(err){
        res.json({message: err})
    }

})
//SUBMITS A POST

router.post('/', async(req, res)=>{
    console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost)
    }catch(err){
        res.json({message: err});

    }
})

//GET BACK A SPECIFIC POST
router.get('/:postId', async(req, res) =>{
    try{
    const singlePost = Post.findById(req.params.postId);
    res.json(singlePost);
    }catch(err){
        res.json({messsage: err});
    }
})

//DELETE A SPECIFIC POST
router.delete('/:postId', async (req, res)=>{
    try{
        const removedPost = await Post.remove({_id: req.params.postId})  //mongoose method to delete from db
        res.json(removedPost);

    }catch(err){
        res.json({message: err})
    }
})

//UPDATE A POST
router.patch('/:postId', async (req, res)=>{
    try{   //mongoose method to delete from db
        const updatedPost = await Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}}) 
        res.json(updatedPost);

    }catch(err){
        res.json({message: err})
    }
})
module.exports = router;





