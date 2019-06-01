const express = require('express')
const app = express()
const Sala = require('../models/sala');

//GET
app.get('/sala',(req,res)=>{
    Sala.find({
        state: true
    }).exec((err,salaDB)=>{
        if (err){
            return res.status(500).json({
                ok:false,
                err
            });
        }
        res.status(200).json({
            ok: true,
            salaDB
        });
    });
});

//POST
app.post('/sala', (req,res)=>{
    let body = req.body

    let sala = new Sala({
        name: body.name,
        description: body.description
    });

    sala.save((err,salaDB)=>{
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!salaDB) {
            return res.status(400).json({
                ok: false,
                salaDB
            })
        }
        res.status(200).json({
            ok:true,
            salaDB
        })
    })
});

//PUT
app.put('/sala/:id',(req,res)=>{
    let id = req.params.id

    let body = req.body;

    let sala = {
        name: body.name,
        description: body.description,
        state: body.state
    }
    Sala.findByIdAndUpdate(id,sala,{
        new:true,
        runValidators: true
    },(err, salaDB)=>{
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!salaDB) {
            return res.status(400).json({
                ok:false,
                salaDB
            })
        }
        res.status(200).json({
            ok: true,
            salaDB
        })
    })
});

//DELETE
app.delete('/rol:id',(req,res)=>{
    let id = req.params.id
    let salaState = {
        state: false
    }

    User.findByIdAndUpdate(id,salaState, {
        new: true,
        runValidators: true
    }, (err,salaDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            })            
        }
        if(!salaDB){
            return res.status(400).json({
                ok:false,
                salaDB
            })
        }
        res.status(200).json({
            ok:true,
            salaDB
        })

    })
})

module.exports = app