const PORT = 8888;
const express = require("express");
const app = express();
const route = require('./routes');
route(app);
app.listen(PORT, () => console.log(`server running on port ${PORT}`));