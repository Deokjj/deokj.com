const functions = require('firebase-functions');
const https = require('https');

exports.app = functions.https.onRequest( async (request, response) => {

    const resumeUrl = 'https://drive.google.com/uc?export=download&id=12IWT6BrpOIXidTcYHYeSX2ndFnZfZ_Tc';

    const remotePdfRequest = new Promise((resolve, reject) => {
        https.get(resumeUrl, (res) => {
            // get the actual URL
            const realUrl = res.headers.location;
            
            https.get(realUrl, (res) => {
                const rawData = [];

                // stream data
                res.on('data', (chunk) => rawData.push(chunk));
                res.on('end', () => {
                    const data = Buffer.concat(rawData);
                    resolve(data);
                });
            });
        });
    });
    
    const data = await remotePdfRequest; // Buffer Obj

    // Response as a pdf
    response.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=resume.pdf',
        'Content-Length': data.length,
        'Access-Control-Allow-Origin': '*'
    });
    response.end(data);
});
