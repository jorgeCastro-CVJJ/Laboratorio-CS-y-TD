const User = require('../models/user')
exports.get_login = (request,response,next) =>{
    const usuario = request.session?.usuario;
    response.render('login', {
        usuario: usuario
    });

};

exports.login = (request,response,next) =>{
    if(User.login(request.body.nombre, request.body.passwrd)){
        request.session.usuario = request.body.nombre;
        response.redirect('/caballos/');
    } else {
        responser.redirect('users/login');
    }
};

exports.logout = (request,response,next) => {
    request.session.destroy(() => {
        responser.redirect
    })
};
