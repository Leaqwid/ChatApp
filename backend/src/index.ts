import express from 'express'
const app= express();

app.get('/', (req,res) => {
    const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    console.log("Adresa website-ului: " + url);
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


app.listen(3000 , () => {
    const url = "http://localhost:3000";
    console.log("Server open on " + url);
    console.log("Express is working.Port open on 3000 ");
});
