let url =  "https://vi.wikipedia.org/wiki/Gi%C3%A1o_ph%E1%BA%ADn_C%C3%B4ng_gi%C3%A1o_t%E1%BA%A1i_Vi%E1%BB%87t_Nam";
const  {getGiaoPhan} = require('../models/giaoPhan')
class GpController {
  // GET /giaophan
  index(req, res) { 
    getGiaoPhan(url).then(arr => {
      res.render('gx/giaophan', {li : arr});
    });
}
}
module.exports = new GpController();
