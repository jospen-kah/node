const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ngumkahjospen@gmail.com',
        pass: 'Kah123jospen.'
    }
});

const mailOptiions = {
    from: 'ngumkahjospen@gmail.com',
    to: 'jospenngumk@gmail.co,,',
    subject: 'Sending Email in Js',
    text: 'send your momo number!!',
};

transporter.sendMail(mailOptiions, (error, info)=>{
    if(error) {
        console.log(error);
    }
    else {
        console.log('Email sent: ' + info.response);
    }
})