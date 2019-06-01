const express = require("express");
const app = express();
const User = require('../models/user');


//GET
app.get("/user", (req, res) => {
    User.find({
        state: true
    }).exec((err,userDB)=>{
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        res.status(200).json({
            ok: true,
            userDB
        });
    });
 });

//POST
app.post("/user", (req, res) => {
    let body = req.body;

    let usuario = new User({
        name: body.name,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
        age: body.age,
        rol: body.rol,
    });

    usuario.save((err,userDB)=>{
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!userDB) {
            return res.status(400).json({
                ok: false,
                userDB
            })
        }
        res.status(200).json({
            ok:true,
            userDB
        })
    })
});

//PUT
app.put('/user/:id',(req,res)=>{
    let id = req.params.id

    let body = req.body;
    
    let usuarioPorEditar = {
        name: body.name,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
        age: body.age,
        rol: body.rol,
        state: body.state
    }
    User.findByIdAndUpdate(id,usuarioPorEditar,{
        new:true,
        runValidators: true
    },(err, usuarioDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            });

        }
        if(!usuarioDB){
            return res.status(400).json({
                ok:false,
                usuarioDB
            })
        }
        res.status(200).json({
            ok:true,
            usuarioDB
        })
    })
});
//DELETE
app.delete('/user/:id',(req, res)=>{
    let id =req.params.id
    let userState = {
        state:false
    }
    
    User.findByIdAndUpdate(id,userState, {
        new:true,
        runValidators:true
    }, (err,userDB)=>{
        if (err) {
            return res.status(500).json({
                ok:false,
                err
            })
        }
        if (!userDB){
            return res.status(400).json({
                ok:false,
                userDB
            })
        }
        res.status(200).json({
            ok:true,
            userDB
        })

    })
})
module.exports = app;