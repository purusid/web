const express = require('express');
const cors = require('cors');
const httpsRedirect = require('express-https-redirect');
const fs = require('fs');

const app = express();
app.use(cors());
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server Works !!! at port ${process.env.PORT || 4000}`);
});
app.use('/', httpsRedirect());
app.use('/', express.static('./static'));
app.get('*', (_req,res)=>{res.redirect('/404.html')});