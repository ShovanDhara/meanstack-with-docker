const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    const user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }
    });
}

module.exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!err) {
            res.status(200).send(user);
        }
        if (!user) {
            res.status(404).send('User not found.');
        }
        return next(err);
    });
}