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

exports.one = function(request, response) {
    let phone = new smartphone();
    smartphone.findById(request.params.id, function(err, product) {
        if(err) {
            return send(err);
        } else {
            response.send(product);
        }
    });
}