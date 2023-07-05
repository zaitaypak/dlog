const axios = require("axios");
const cheerio = require("cheerio");

async function getGx(url) {
  return await axios(url)
    .then((response) => {
      const list = [];
      const html = response.data;
      const $ = cheerio.load(html);
      $("#mw-content-text > div.mw-parser-output > ol > li").each(function () {
        list.push($(this).text().trim());
      });
      if (list.length > 1) {
        return list;
      }
    })
    .catch((error) => console.log(error));
}
module.exports = { getGx };
