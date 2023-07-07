
const url ="https://vi.wikipedia.org/wiki/Gi%C3%A1o_ph%E1%BA%ADn_Xu%C3%A2n_L%E1%BB%99c"
const { getGx } = require("../models/giaoXu")

class GxController {
    // GET /giaoxu
   index(req,res){
    getGx(req.query.p).then(arr => {
      res.render('gx/giaoxu', {li : arr});
    });
  };
}
module.exports = new GxController
