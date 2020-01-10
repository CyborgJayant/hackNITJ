const express=require('express')
const User=require('./database/user-model.js')
const auth=require('./auth.js')
require('./database/connect.js')
const port=process.env.PORT||4000

const app=express()

app.use(express.static(__dirname))

app.use(express.json())

app.post('/users/login',async (req,res)=>{
    try{
        if(!req.body.email || !req.body.password)
        {
            throw new Error('Credentials Not Provided')
        }
        else
            {
        const user=await User.findByCred(req.body.email,req.body.password)
        const token=await user.genAuthToken()
        
        return res.send({user,token})
           }
    }
    catch(e){
        console.log(e)
        res.send(e)
    }
})

app.post('/users/register',async (req,res)=>{
     const user=new User(req.body) 
     console.log(req.body)
//     console.log(user)
       
    try{
       
        await user.save()
        console.log(`User Created ${user}`)
        return res.status(201).send(user)
    
    }
    catch(e){
        res.send(e.errmsg)
    }
})
app.post('/users/logOut',async (req,res)=>{
    try{
        req.user.tokens=req.user.tokens.filter((obj)=>{
            return obj.token !==req.token
        })
        await req.user.save()
        console.log('TILL HERE')
        res.send('Logged Out Successfully')
    }
    catch(e){
        return res.status(500).send(e)
    }
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})