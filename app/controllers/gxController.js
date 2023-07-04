
const url ="https://vi.wikipedia.org/wiki/Gi%C3%A1o_ph%E1%BA%ADn_Xu%C3%A2n_L%E1%BB%99c"
const axios = require("axios")
const cheerio = require("cheerio")
const fs = require("fs")

class NewGxController {
    // GET /giaoxu
    index(req,res){
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
    }
}

module.exports = new NewGxController
