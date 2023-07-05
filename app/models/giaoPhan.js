const axios = require("axios");
const cheerio = require("cheerio");

async function getGiaoPhan(url) {
  return await axios(url)
    .then((response) => {
      const list = [];
      const html = response.data;
      const $ = cheerio.load(html);
      const Arr = $("#mw-content-text > div.mw-parser-output > table:nth-child(51) > tbody > tr > td:nth-child(2) > a");
        Arr.slice(1, Arr.length).each(function () {
          list.push(`https://vi.wikipedia.org` + $(this).attr("href"));
        });
      if (list.length > 1) {
        return list;
      }
    })
    .catch((error) => console.log(error));
}
module.exports = { getGiaoPhan };
