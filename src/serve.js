const express = require('express')
const ejs = require('ejs')
const path = require('path')
const puppeteer = require('puppeteer')
const app = express()

const dados = {
    "name": "Fulana da costa",
    "age": 21,
    "address": "Praça da Sé Localizada na Sé",
    "city": "Brasília",
    "state": "DF",
    "cellphone": "61990753256",
    "email": "emailteste@gmail.com",
    "linkedln_link": "https://www.linkedin.com/",
    "area": "Administração",
    "area_level": "Estagiário(a)",
    "goal": "Colocar em prática os conhecimentos em gestão que adquiri ao longo da graduação",
    "scholarity": "Superior",
    "courseName": "Gestão Pública",
    "courseSchool": "Instituto Federal de Brasília - IFB",
    "courseEndYear": "2021",
    "courses": "Licitações e contratos - enap",
    "language": "Francês",
    "language_level": "Avançado",
    "cientificResearch": "NOT_PRINT",
    "companyName": "Agência nacional do petróleo, gás natural e biocombustíveis - anp",
    "companyOccupation": "Estagiária",
    "companyDescription": "Auxilio em professos de licitação",
    "companyStartEnd": "2019 - 2021",
    "companyNameVolunteer": "NOT_PRINT",
    "companyOccupationVolunteer": "NOT_PRINT",
    "companyDescriptionVolunteer": "NOT_PRINT",
    "companyStartEndVolunteer": "NOT_PRINT"
}

app.get('/pdf', async(request, response) => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://localhost:3000/', {
        waitUntil: 'networkidle0'
    })

    const pdf = await page.pdf({
        printBackground: true,
        format: 'Letter',
        margin:{
            top:"20px",
            bottom:"20px",
            left:"20px",
            right:"20px"
        }
    })

    await browser.close()

    response.contentType("application/pdf")

    return response.send(pdf)

})

app.get('/curvi2', (request, response) => {
    const filePath = path.join(__dirname, "curvi2.ejs")
    ejs.renderFile(filePath, { dados }, (err, html) => {
        if(err) {
            return response.send('Erro na leitura do arquivo')
        }
        // enviar para o navegador
        return response.send(html)
    })

})
app.get('/curvi4', (request, response) => {
    const filePath = path.join(__dirname, "curvi4.ejs")
    ejs.renderFile(filePath, { dados }, (err, html) => {
        if(err) {
            return response.send('Erro na leitura do arquivo')
        }
        // enviar para o navegador
        return response.send(html)
    })

})
app.get('/curvi5', (request, response) => {
    const filePath = path.join(__dirname, "curvi5.ejs")
    ejs.renderFile(filePath, { dados }, (err, html) => {
        if(err) {
            return response.send('Erro na leitura do arquivo')
        }
        // enviar para o navegador
        return response.send(html)
    })

})

// curvi 1
app.get('/curvi1', (request, response) => {
    const filePath = path.join(__dirname, "curvi1.ejs")
    ejs.renderFile(filePath, { dados }, (err, html) => {
        if(err) {
            return response.send('Erro na leitura do arquivo')
        }
        // enviar para o navegador
        return response.send(html)
    })

})


app.listen(3000)