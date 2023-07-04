let urlGP =
  "https://vi.wikipedia.org/wiki/Gi%C3%A1o_ph%E1%BA%ADn_C%C3%B4ng_gi%C3%A1o_t%E1%BA%A1i_Vi%E1%BB%87t_Nam";
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

class NewGpController {
  // GET /giaophan
  index(req, res) {
    axios(urlGP)
      .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);
        const list = [];
        let ht = "";
        const Arr = $(
          "#mw-content-text > div.mw-parser-output > table:nth-child(51) > tbody > tr > td:nth-child(2) > a"
        );
        Arr.slice(1, Arr.length).each(function () {
          list.push(`https://vi.wikipedia.org` + $(this).attr("href"));
        });
        if (list.length > 1) {
          fs.writeFile("giaophan.json", JSON.stringify(list), (err) =>
            console.log(err)
          );
          ht = list
            .map((e, i) => {
              return `<li>${i + 1}. ${e}</li>`;
            })
            .join("");
          return res.send(ht);
        }
      })
      .catch((error) => console.log(error));
  }
}

module.exports = new NewGpController();
