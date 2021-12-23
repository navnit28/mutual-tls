const cli = require('../helper/cli');
exports.pingController=async(req,res)=>{
    const cert = req.connection.getPeerCertificate()
	if (req.client.authorized) {
		res.send(`Hello , your certificate was issued by ${cert.issuer.CN}!`);
		const str1='openssl req -newkey rsa:4096 -keyout abc_key.pem -out abc_csr.pem -nodes -days 365';
		const str2='openssl x509 -req -in abc_csr.pem -CA server_cert.pem -CAkey server_key.pem -out abc_cert.pem -set_serial 01 -days 365'
		await cli(str1);
		await cli(str2);
	} else if (cert.subject) {
		res.status(403)
		   .send(`Sorry ${cert.subject.CN}, certificates from ${cert.issuer.CN} are not welcome here.`)
	} else {
		res.status(401)
		   .send(`Sorry, but you need to provide a client certificate to continue.`)
	}
};