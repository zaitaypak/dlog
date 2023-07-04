const gxRoute = require('./giaoxu');
const gpRoute = require('./giaophan');
const siteRoute = require('./sites');
function route(app){
    app.use('/giaoxu',gxRoute);
    app.use('/giaophan',gpRoute);
    app.use('/',siteRoute);
}
module.exports = route;