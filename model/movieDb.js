//Importing
const mongoose= require ("mongoose")
//connect Database
mongoose.connect("mongodb+srv://bilkees:bilkees@cluster0.urlh5.mongodb.net/?retryWrites=true&w=majority")
//Schema
const Schema=mongoose.Schema;
var movieSchema=new Schema({
    Title:String,
    Actor:String,
    Actress:String,
   
    Country:String,
    Director:String,
    Released:Date,
   
    Genre:String,
    Language:String
})
var MovieInfo=mongoose.model("movies",movieSchema)
module.exports= MovieInfo