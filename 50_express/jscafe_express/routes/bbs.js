var message = [];
exports.bbs = function(req, res){
    var message = req.body.message;
    if (message) message.push(message);
    res.render('bbs', { title: 'JSCafe', message: message });
};
