const mongoose =require('mongoose')
const validator=require('validator')
conUrl='mongodb://hackNITJ:jayant.nitj@cluster0-shard-00-00-22pa2.mongodb.net:27017,cluster0-shard-00-01-22pa2.mongodb.net:27017,cluster0-shard-00-02-22pa2.mongodb.net:27017/hackNITJ?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(conUrl,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})