const app=require('./app');
const fs=require('fs');
const https=require('https');
const port=3000;
const opts = { key: fs.readFileSync('server_key.pem')
             , cert: fs.readFileSync('server_cert.pem')
             , requestCert: true
             , rejectUnauthorized: false
             , ca: [ fs.readFileSync('server_cert.pem') ]
             }
https.createServer(opts,app).listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});
// app.listen(port,()=>{
//     console.log(`Server is listening on port ${port}`);
// });