const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const qrcode = require('qrcode-terminal')
const { Client ,LocalAuth } = require('whatsapp-web.js');

const whatsApp = new Client({
    authStrategy : new LocalAuth(),
    //puppeteer: { headless: false }
});

whatsApp.on('qr', (qr) => {
   qrcode.generate(qr ,{
    small : true
   })
});

whatsApp.on('message', async(message)=>{
    let UserMessage = message.body
    console.log("----UserMessage --", message)
    if(
        (UserMessage === "hi" )
     || (UserMessage === "hello" ) 
     || (UserMessage === "hii" )
     || ( UserMessage === "Hi" )
     || ( UserMessage === "Hii" )
     ){
        message.reply("Hello I Am Your Assistance From Iorta.Tech Solutions Pvt Ltd Please enter the daily loss")
    return
    }
    // console.log("---- message ---", message)
    const delayLossValue = parseFloat(UserMessage);
    if (isNaN(delayLossValue)) {
    // Call the function to automate WhatsApp messages
      message.reply("We apologize for the inconvenience. Please Enter your losss in numbers ")
      return 
    } 

    else if (delayLossValue >= 0 && delayLossValue <= 1000 ) {
       message.reply(`We Hvae Recorded your Reponse Our Team Will Reach Out To You For Loass Of ${UserMessage}`)
       return
      }
    else if (delayLossValue > 1000 && delayLossValue <= 200000000) {
        message.reply(`We Hvae Recorded your Reponse Our Team Will Reach Out To You For Loass Of ${UserMessage}`)
        return
      }
 

})

// const alertMessage = async ()=>{
    
//     if (delayLoss >= 0 && delayLoss <= 10) {
//        message.reply("Sorry to hear about the delay. We'll do our best to improve.";
//       }
//     else if (delayLoss > 10 && delayLoss <= 20) {
//        message.reply("We understand the frustration. Please bear with us as we work to resolve the issue.";
//       }
//    else {
//        message.reply("We apologize for the inconvenience. Our team is actively addressing the situation.";
//       }
    
// }

whatsApp.on('ready', () => {
    console.log('Client is ready!');
});

whatsApp.initialize();


app.listen(8080, (err , res)=>{
    console.log(" ---  port is  8080 runnig ----")
})