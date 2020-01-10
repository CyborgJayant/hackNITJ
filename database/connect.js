const mongoose =require('mongoose')
const validator=require('validator')
conUrl='mongodb://127.0.0.1:27017/hackNITJ'
mongoose.connect(conUrl,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})