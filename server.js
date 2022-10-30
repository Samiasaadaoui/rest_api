const express = require("express") 
const connectDB = require("./config/connectDB");
const user = require("./model/user");

const  app =express()
app.use(express.json());
connectDB()
app.use ('/api/users'  , user)






  app.post("/addusers", async(req, res) => {
    const { name,  phone, email } = req.body;
    try{
    let user = await new User({ name,  phone, email });
    user.save()
    res.send({'user add':user})
    } catch(error){
        console.log('error add new user')

    }

  })

  app.get('/getuser' , async(req , res)=>{
    try {
        let user = await User.find()
        res.status(200).send({"users": users})        
    } catch (error) {
        console.log('error get users')
        
    }

  })
   
  app.delete('/removeuser/:id' , async(req , res)=>{
    const {id} = req.parames
    try {
        let user = await user.findByIdAndDelete(id)
        res.status(200).send("users deleted")        
    } catch (error) {
        console.log('error get users')
        
    }

  })

  app.put('/updateuser/:id' , async(req , res)=>{
    const {id} = req.params
    const {name , phone , email} =req.body
    try {
        let user = await user.findByIdAndupdate( id , {$set:{name, email , phone}})
        res.status(200).send("users deleted")        
    } catch (error) {
        console.log('error get users')
        
    }

  })



const port =7000

app.listen(port, (error)=> error ? console .log('error connect to database'):console.log(`database is connected on port ${port}`))