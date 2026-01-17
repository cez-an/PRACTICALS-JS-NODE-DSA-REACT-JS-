import express from 'express'
import fs from 'fs'

const app = express();
const port = 3000;

// get point accept query parameter add that to a text file
app.get('/',(req,res)=>{
    let {string} = req.query;
    console.log(typeof string)
    let file = fs.writeFile('text.txt',string,(err,data)=>{
        if(err){
            console.log('fhj')
        }
    });
    console.log(string);
    res.send(string)
})

app.listen(port,()=>{
    console.log('the server is running on http://localhost:3000');
})