const Login = require('./../models/Login');

class LoginController {
    async index(req, res) {
        try {
            const response = await Login.findAll();
            return res.json(response);
        } catch (error) {
            return res.status(400).json({ error: err.message });
        }
    }

    async show(req, res) {
        try {
            const response = await Login.findAll({
                raw: true,
                where: {
                    email: req.body.email,
                },
            });
            return res.json(response)
        } catch (error) {
            return res.status(500).json(error)
        };
    }

    async store(req, res) {
        
        try {
            const response = await Login.create({
                email: req.body.email,
                senha: req.body.senha
            });
            return res.json("senha salva com sucesso!");
        } catch (error) {
            res.status(401).json({ message: 'Parametros errado', error: error });
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const { email, senha } = req.body;
        try {
            const response = await Login.update({ email, senha }, {

                where: {
                    id: id
                },

            });

            if (!response) {
                return res.status(204).json({ error: "invalid URL params" });
            }



            return res.json("Update realizado com sucesso !");

        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async destroy(req, res) {
        const { id } = req.params;
        try {
            const response = await Login.destroy({

                where: {
                    id: id
                },

            });

            if (!response) {
                return res.status(204).json({ error: "invalid URL params" });
            }

            return res.json("Login de usuário deletado com sucesso !");

        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

module.exports = new LoginController;