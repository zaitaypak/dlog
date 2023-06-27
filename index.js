const PORT = 8888
const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')
const fs = require('fs')

const app = express()
const url = 'https://vi.wikipedia.org/wiki/T%E1%BB%95ng_gi%C3%A1o_ph%E1%BA%ADn_H%C3%A0_N%E1%BB%99i'

async function Scraper(u){
   return await axios(u)
}
    Scraper(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const list = []
        $('#mw-content-text > div.mw-parser-output > ol > li').each(function(){
            list.push($(this).text().trim())
        })
        console.log(list)
        fs.writeFile("list.json",JSON.stringify(list), (err) => console.log(err))
    })
    .catch(error => console.log(error))

    app.listen(PORT, () =>console.log(`server running on port ${PORT}`))