var exp=require('express')
var rt=exp.Router()
var path=require('path')
var usr=require('../model/sch')
var mg=require('mongoose')
const passport = require('passport')
const { profile } = require('console')
rt.get('/regis',function(req,res){
    res.render('welcome',{msg:req.flash('msg'),ms:req.flash('ms')})
})
rt.post('/code',function(req,res){
    
    const usr1=new usr({
        _id:new mg.Types.ObjectId,
        name:req.body.t1,
        email:req.body.t2,
        pwd:req.body.t3
    })
    usr1.save().then(result=>{
        req.flash('msg','Registered Successfully')
        res.redirect('/users/regis')
    })
    .catch(err=>{
        console.log(" "+err)
    })
})
rt.get("/list",(req,res)=>{
    usr.find().then((result)=>{
        res.render('list',{data:result})
    
})
.catch(err=>{
    console.log(err)
})
})
rt.get('/edit',function(req,res){
    usr.find({_id:req.query.id}).then((result)=>{
        res.render('detail',{data:result})
    })
    .catch(err=>{
        console.log(err)

})
})
rt.post('/update',function(req,res){
    var myquery={_id:req.body.t10};
    var newvalues={$set:{name:req.body.t1,email:req.body.t2,pwd:req.body.t3}};
    usr.updateOne(myquery,newvalues)
    .then(res.redirect('/users/list'))
    .catch(err=>{
        console.log(" "+err) 
})
})
rt.get('/del',function(req,res){

    usr.deleteOne({_id:req.query.id}).then((result)=>{
        res.redirect('/users/list')
    })
    .catch(err=>{
        console.log(" "+err) 
})
})

rt.post('/log1',function(req,res){
    email=req.body.t4;
    pwd=req.body.t5;
    usr.findOne({email:email,pwd:pwd},function(err,user){
        if(!user){
            req.flash('ms','Email or Password is Invalid')
            res.redirect('/users/regis')
    }
        else{
            res.render('home')
    }
   
}) 
}) 
rt.get('/google',passport.authenticate('google',{scope:['profile'] }));
rt.get('/google/auth/callback',function(req,res){
    res.render('home')
})   
    


module.exports=rt