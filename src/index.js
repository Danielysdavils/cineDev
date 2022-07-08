// importação do express e do .env
// import "dotenv/config"
import  Express  from "express"
import cors from'cors'
const port = process.env.PORTA||3000

const app = Express();
//middleware
app.use(cors())
app.use(Express.json());
app.use((req,res,next)=>{
    next();
});

import {bd} from './infra/bdSQLite-filmes.js'
import {filmes} from './controllers/filmes-controller.js'
filmes(app, bd)

import {bdA} from './infra/bdSQLite-assinaturas.js'
import {signatures} from './controllers/assinaturas-controller.js'
signatures(app, bdA)

import {bdS} from './infra/bdSQLite-series.js'
import {series} from './controllers/series-controller.js' 
series(app, bdS)

app.listen(port,(port)=>{
  console.log("Porta funcionando")
})


export default app