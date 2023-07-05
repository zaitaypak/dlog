const PORT = 8888;
const express = require('express');
const hbs  = require('express-handlebars');
const path = require('path');
const app = express();
const route = require('../routes');

// Template engine
app.engine('hbs', hbs.engine({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources','views'));

// Router 
route(app);
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
