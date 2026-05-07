import dotenv from 'dotenv'
import express from 'express'

dotenv.config();

const app= express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.json({message:"Hello and welcome !"})
})

app.get('/api/user/:id' ,(req,res) => {
    if (req.params.id === '123') {
        res.status(200).json({ 
            id: '123',
            username: 'Leaqwid',
            email: 'test@test.com'
        });
    }else {
        res.status(404).json({ message : 'Not found'})
    }
    
})

app.get('/health' ,(req,res)=> {
    res.json({status:"Succes" , message: "Server is running succesfuly" })
} )


app.listen(PORT, () => {
    
    const url = "http://localhost:" + PORT;
    console.log("Server open on " + url);

});
