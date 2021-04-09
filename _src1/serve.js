const expres = require('express')
const ejs = require('ejs')
const path =require('path')
const pdf = require('html-pdf')
const app = expres()





const passengers = [
    {
        name: "Joyce",
        flightNumber: 7859,
        time: "18h00",
    },
    {
        name: "Brock",
        flightNumber: 7859,
        time: "18h00",
    },
    {
        name: "Eve",
        flightNumber: 7859,
        time: "18h00",
    },
];

app.get('/', (request, response) => {

    
      const filePath =  path.join(__dirname,"/print.ejs") /* juntar os caminhos, dirname serve para motsra o diterio atual, callback=função passada como argumento para outra função */ 
      // Primeiro callback simples
      ejs.renderFile(filePath,{passengers}, (err, html) => {    /*  erro envira  */
         if(err){
             return response.send("Erro na leitura do aqrquivo")
         }
         // configuração do pdf
         const options = {
             height: "11.25in",
             width: "8.5in",
             header:{
             height:"20mm"

             },
             footer:{
                 height:"20mm"
             }
         }


        //criar o pdf
        pdf.create(html, options).toFile("report.pdf", (err,data)=>{
        //segundo callback
            if(err){
                return response.send("Erro ao gerar  o PDF")
            }
            return response.send("Arquivo gerado com sucesso!")
        })

        // enviar para o navegador
         //return response.send(html) 
      })  /*se mudar o nome da função para passageiros(passengers: passageiros) */
    /*callback= chame de volta, assicrono */

})
app.listen(3000) 


 