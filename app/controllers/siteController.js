
let urlGP = "https://vi.wikipedia.org/wiki/Gi%C3%A1o_ph%E1%BA%ADn_C%C3%B4ng_gi%C3%A1o_t%E1%BA%A1i_Vi%E1%BB%87t_Nam"
const axios = require("axios")
const cheerio = require("cheerio")
const fs = require("fs")

class NewGpController {
    // GET /
    index(req,res){
      return res.send("TRANG KHONG TON TAI");
    }
}

module.exports = new NewGpController;
