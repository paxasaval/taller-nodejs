const express = require('express')
const app = express()
const Rol = require('../models/rol');

//GET
app.get('/rol',(req,res)=>{
    Rol.find({
        state: true
    }).exec((err,rolDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            });
        }
        res.status(200).json({
            ok:true,
            rolDB
        });
    });
});


//POST
app.post('/rol',(req,res)=>{
    let body = req.body

    let rol = new Rol({
        name: body.name,
        description: body.description
    });

    rol.save((err, rolDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            });

        }
        if(!rolDB){
            return res.status(400).json({
                ok:true,
                rolDB
            })
        }
        res.status(200).json({
            ok:true,
            rolDB
        });
    }); 
});


//PUT
app.put('/rol/:id',(req,res)=>{
    let id = req.param.id

    let body = req.body;

    let rolPorEditar = {
        name: body.name,
        description: body.description,
    }

    Rol.findByIdAndUpdate(id,rolPorEditar,{
        new:true,
        runValidator: true
    },(err, rolDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            });
        }
        if(!rolDB){
            return res.status(400).json({
                ok:false,
                rolDB
            })
        }
        res.status(200).json({
            ok:true,
            rolDB
        })
    })
});

//DELETE
app.delete('/rol:id',(req,res)=>{
    let id = req.params.id
    let rolState = {
        state: false
    }

    User.findByIdAndUpdate(id,rolState, {
        new: true,
        runValidators: true
    }, (err,rolDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            })            
        }
        if(!rolDB){
            return res.status(400).json({
                ok:false,
                rolDB
            })
        }
        res.status(200).json({
            ok:true,
            rolDB
        })

    })
})

module.exports = app