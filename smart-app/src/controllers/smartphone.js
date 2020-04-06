let smartphone = require('../models/smartphone');

exports.getAll = function(request, response) {
    response.send('Ok!');
}

exports.create = function(request, response) {
    let phone = new smartphone(
        {
            nome: request.body.nome,
            marca: request.body.marca
        }
    );

    phone.save(function(err) {
        if(err) {
            return next(err);
        } else {
            response.send('Inserido c/ sucesso!');
        }
    });
}