/**
 * Created by user on 2017/3/1.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username:{type:String,unique:true},
    email:String,
    color:String,
    hashed_password:String
});
mongoose.model('User',UserSchema);