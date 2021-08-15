const Inscricao = require('./../models/Cadastro');

class InscricaoControllers {

    async index (req, res) {
        try {
            const response = await Inscricao.findAll();
            return res.json(response);
        } catch (error) {
            return res.status(401).json({erro: error});
        };
    };

    async show (req, res) {
        try {
            const response = await Inscricao.findAll({
                raw: true,
                where: {
                    id: req.body.id,
                }
            });
            return res.json(response);
        } catch (error) {
            return res.status(400).json({erro: error})
        };
    };

    async store (req, res){

        try {
            const response = await Inscricao.findAll({
                attributes: ['cpf'],
                where: {
                    cpf: req.body.cpf,
                }
            })

            if(response.length > 0){
                return res.status(202).json({
                    status: 202,
                    message: "Cadastro já existente!"
                })
            }
        } catch(error){
          res.status(401).json({ error: error });
        };

        try {
            const response = await Inscricao.create(req.body);
            return res.json("Salvo com sucesso!");
        } catch (error) {
            return res.status(401).json({erro: error});
        };
    };

    async update(req, res) {
        const { id } = req.params;
      
        try {
            const response = await Inscricao.update( req.body,{
                where: {
                    id: id
                }
            })
            return res.json("Update concluido com sucesso!");
        } catch (error) {
            return res.status(401).json({erro: error});
        };
        
    };

    async destroy(req, res) {
        const { id } = req.params;
        try {
            const response = await Inscricao.destroy({

                where: {
                    id: id
                },

            });

            if (!response) {
                return res.status(204).json({ error: "invalid URL params" });
            }

            return res.json("Inscrição de usuário deletado com sucesso !");

        } catch (error) {
            return res.status(401).json(error)
        }
    };
};
module.exports = new InscricaoControllers;