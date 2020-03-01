server = require('./appAlgorithmia')
const  PORT = 3001;

const wellcomeMessage = (port)=>{
    console.log(`Listern at port ${port}`);
}

server.listen(PORT, wellcomeMessage(PORT));