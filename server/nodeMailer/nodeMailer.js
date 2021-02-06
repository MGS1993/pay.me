let nodemailer = require('nodemailer');



let transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'mannyg1218@yahoo.com',
      pass: 'orxnalmuowpkucnv'
    }
  });
  
  let mailOptions = {
    from: 'mannyg1218@yahoo.com',
    to: 'm_guzman74@yahoo.com',
    subject: 'test',
    text: 'this is a test to see if this api works well enough'
  };
  // transporter.sendMail(mailOptions, function(error, info) {
  
  //   if(error) {
  //     console.log(error);
  //   } else {
  //     console.log('Email sent ' + info.response)
  //   }
  // })