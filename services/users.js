var User = require("./../models/user");


exports.login = function(req, res) {
    res.render("login");
}

exports.singin = function(req, res) {
    User.findOne({
        username: req.body.username,
        password: req.body.password
    }, function(err, user) {
        if (err) {
            console("Nao foi encontrado nenhum usuario com os dados informados");
            return;
        }
        if (user != null) {
            req.session.user = {
                username: user.username
            };

            res.redirect("/");
            return;
        }
        res.render("usernotfound");
    });
}

exports.register = function(req, res) {
    res.render("register");
}

exports.create = function(req, res) {
    User.create(req.body, function(err, user) {
        if (err) {
            console("erro ao inserir usuario");
            return;
        }
        res.redirect("/users/login");
    });
}