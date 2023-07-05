
const axios = require("axios")
const cheerio = require("cheerio")
const fs = require("fs")

class NewGpController {
    // GET /
    index(req,res){
      res.render('home');
    }
}

module.exports = new NewGpController;
