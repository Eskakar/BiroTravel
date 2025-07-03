const express = require('express');
const app = express();

app.get('/users/:id',(req,res)=>{
    const user = getUserByID(req.params.id);
    res.json(user);
})