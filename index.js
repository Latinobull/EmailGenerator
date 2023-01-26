import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import moment from 'moment';
dotenv.config();
let todaysDate = moment().format('M/D/YY');
const email = process.env.EMAIL;
const password = process.env.PASS;
const studentName = 'John Doe';
const zoomRecording = 'https://google.com';
const myCalendlyLink = 'https://calendly.com/fsf-tutor-team/donnahue-george';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const mailOption = {
  from: email,
  to: 'donnahuegjr@gmail.com',
  subject: `Tutoring Session ${todaysDate}`,
  text: `Hey ${studentName},

  I hope you enjoyed your session and found it helpful!
    
  You can find our zoom session recording at this link: ${zoomRecording}
  
  Please fill out this required survey to provide feedback about our session if you have not already done so: http://bit.ly/students-eval 
  
  If you would like me again as your tutor, you may use this link: ${myCalendlyLink}
  
  If my availability does not work for you, or you would like to try a different tutor, you can use this link: https://tinyurl.com/BootCampTutorTeam
  
  Let me know if you have any questions!
  
  --
  Donnahue George
  Tutor
  Bootcamp Spot
  `,
};

transporter.sendMail(mailOption, (err, info) => {
  err ? console.log(err) : console.log(`Email sent: ${info.response}`);
});
