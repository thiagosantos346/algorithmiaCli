var Algorithmia = require('algorithmia');

class AlgoritmiaController{

    async run(req, res){

        const result = {};
        const { parameters } = req.body;
        const { input } = req.body;
        console.log(input);
        await Algorithmia.client(parameters.key)
            .algo(parameters.algorithmo)
            .pipe(input)
            .then(
                async (result)=>{
                    result = await result.get();
                    res.status(200).append("Content-Type", "application/json; charset=utf-8").send(result);
                },
                (erro)=>{
                    res.status(500).send({"erro":erro});        
                }
            )
        
        
    }
}

module.exports = new AlgoritmiaController;