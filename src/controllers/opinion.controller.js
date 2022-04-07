const OpinionCtrl = {};
const Opinion = require('../models/Opinion');


OpinionCtrl.renderOpinionForm = (req, res) => {
    res.render('/about');
}; 

OpinionCtrl.createNewOpinion = async (req, res) => {
    const {title, description} = req.body;
    const newOpinion = new Opinion({title,description});
    await newOpinion.save();
    req.flash('success_msg', 'Opinion Añadida Satisfactoriamente');
    res.redirect('/about');
};

OpinionCtrl.renderOpinions = async (req, res)=> {
    const opinions = await Opinion.find().lean();
    res.render('about', {opinions});
};




module.exports = OpinionCtrl;