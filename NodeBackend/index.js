var express    = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app        = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("Hello World !!!");
})

global.lat = 0.0000;
global.lng = 0.0000;

//needs to be called by andoird app 
app.post('/sos',(req,res)=>{

    global.lat  = req.body.lat;
    global.lng = req.body.lng; 
	console.log(global.lat);
	console.log(global.lng);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user :process.env.G_USERNAME,
            pass :process.env.G_PASSWORD
        }
    });

    var mailOptions = {}

    mailOptions = {
        from: process.env.G_USERNAME,
        to: req.body.email,
        subject: 'Emergency SOS',
        text: 'Click the link to track the live location : http://192.168.43.232:3000/',

    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Email Sent' + info.response);
            var messageString = "Click the link to track the live location : http://192.168.43.232:3000/";
            console.log(messageString);
            req.headers({
                "authorization":process.env.AUTH 
        });

    req.form({
        "sender_id": "FSTSMS",
        "message": messageString,
        "language": "english",
        "route": "p",
        "numbers": req.body.phno,
    });

    req.end(async function (res) {
        if (res.error) {
            console.log(res.error);
	res.status(200).json({
                Response:"Success"
                    });
        }
        else {
            console.log(res.body);
            res.status(200).json({
                Response:"Success"
                    });
                }
            });   
        }
    });
});

//needs to b called by react 
app.get('/sosReact',(req,res)=>{
    if(lat!=0.000 && lng!=0.0000){
        res.send({
            latitude:global.lat,
            longitude:global.lng
        });
    }
});

app.listen(5000,()=>{
    console.log("Listening on port 5000")
})
