const PORT = 8888
const axios = require("axios")
const express = require("express")
const cheerio = require("cheerio")
const fs = require("fs")
const app = express()
const url =
  "https://vi.wikipedia.org/wiki/Gi%C3%A1o_ph%E1%BA%ADn_Xu%C3%A2n_L%E1%BB%99c"
  
app.get("/giaoxu", function (req, res) {
  axios(url)
    .then((response) => {
      const html = response.data
      const $ = cheerio.load(html)
      const list = []
      let ht = ""
      $("#mw-content-text > div.mw-parser-output > ol > li").each(function () {
        list.push($(this).text().trim())
      })
      if (list.length > 1) {
        fs.writeFile("giaoxu.json", JSON.stringify(list), (err) =>
          console.log(err)
        )
        ht = list
          .map((e, i) => {
            return `<li>${i}. ${e}</li>`
          })
          .join("")
          return res.send(ht)
      }
    })
    .catch((error) => console.log(error))
})
app.get("/giaophan", function (req, res) {
    let urlGP = "https://vi.wikipedia.org/wiki/Gi%C3%A1o_ph%E1%BA%ADn_C%C3%B4ng_gi%C3%A1o_t%E1%BA%A1i_Vi%E1%BB%87t_Nam"
    axios(urlGP)
      .then((response) => {
        const html = response.data
        const $ = cheerio.load(html)
        const list = []
        let ht = ""
        const Arr = $("#mw-content-text > div.mw-parser-output > table:nth-child(51) > tbody > tr > td:nth-child(2) > a")
        Arr.slice(1,Arr.length).each(function () {
            list.push(`https://vi.wikipedia.org`+$(this).attr("href"))
        })
        if (list.length > 1) {
          fs.writeFile("giaophan.json", JSON.stringify(list), (err) =>
            console.log(err)
          )
          ht = list
            .map((e, i) => {
              return `<li>${i+1}. ${e}</li>`
            })
            .join("")
            return res.send(ht)
        }
      })
      .catch((error) => console.log(error))
  })
app.get("/readgiaophan", function (req, res) {
   return res.send("")
  })

app.listen(PORT, () => console.log(`server running on port ${PORT}`))