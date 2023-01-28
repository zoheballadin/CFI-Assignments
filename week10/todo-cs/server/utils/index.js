const accountSid = "AC228f4d7ae385c110e4367f019d64a175";
const authToken = "c82f5b226c9682b343613ac131777181";
import twilio from "twilio";
let client = twilio(accountSid, authToken);

async function sendSMS(obj) {
  try {
    let mes = await client.messages.create({
      body: obj.messageBody,
      from: "+16516611544",
      to: obj.ph,
    });
    console.log(mes.sid);
  } catch (err) {
    console.error(err);
  }
}

// sendSMS({
//   messageBody: "HELLO MESSAGE 5",
//   ph: "+918712128572",
// });

var randomStringGenerator = (length) => {
  var alphanum =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiJklmnopqrstuvwxyz0123456789";

  var str = "";

  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * alphanum.length);
    str += alphanum[index];
  }

  return str;
};

export { randomStringGenerator, sendSMS };
