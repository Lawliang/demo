const userModel = require('../db/inputModel.js');

module.exports = {
    addNote: (req, res, next) => {
        console.log(req.body.value);
        userModel.create({note: req.body.value})
            // .then(data => data.json())
            .then(data => {
                console.log('hi!!!');
                res.locals.addNote = data;
                console.log(data);
                return next();
            })
            
    }
}