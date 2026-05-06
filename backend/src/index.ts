import express from 'express'
const app= express();

app.get('/', (req,res) => {
    res.send('Hello from ChatApp');
})

app.get('/health' ,(req,res)=> {
    res.send("Server is running ...")
} )

app.listen(3000 , () => {
    console.log("Express is working.Port open on 3000 ");
});
