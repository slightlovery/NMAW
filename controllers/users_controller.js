/**
 * Created by user on 2017/3/1.
 */
var signup = function (req,res) {
    var user = new User({username:req.body.username});
    user.set('hashed_password',hashPW(req.body.password));
    user.set('email',req.body.email);
    user.save(function (err) {
        if(err){
            res.session.error = err;
            res.redirect('/signup');
        }else{
            req.session.user = user.id;
            req.session.username = user.username;
            req.session.msg = 'Authenticated as' + user.username;
            res.redirect('/');
        }
    });
};