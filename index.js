 //const fetch=require("node-fetch")
const Discord=require("discord.js");
const keepAlive = require("./app");
const client = new Discord.Client();

client.on("ready",()=>{
  console.log(`logged in as ${client.user.tag}...`);
})
let pin;
let date;

client.on("message",mssg =>{
  if(!mssg.author.bot){
let str=mssg.content.split(" ")
if(str[0]==="$vs"){
  pin=str[1]
 date=str[2]
}
// fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`).then(value=>{
// return value.json()})
// .then(ds=>{
//   console.log(`${pin}.....${date}..`)
//   console.log(ds.sessions);
// ds.sessions.forEach(ele=>{
//   const emd=new Discord.MessageEmbed()
//   .setTitle(`${ele.name}`)
// 	.setDescription(`${ele.address}`)
// 	.addFields(
// 		{ name: `${ele.min_age_limit}`, value: `${ele.vaccine}` },
// 		{ name: 'DOSE-1', value: `${ele.available_capacity_dose1}`, inline: true },
// 		{ name: 'DOSE-2', value: `${ele.available_capacity_dose2}`, inline: true },
// 	)
//   mssg.channel.send(emd)
// })
// }).catch(err=>console.log(err))
//console.log(`got the meassage as${pin}...${date}`);
  }
})
// // const token="ODU5MjcwMDI2NjA2MjgwNzQ0.YNqPkg.62VOdloyGgExVATiHMXvX84mVYE";
 keepAlive();
 client.login(`ODU5MjcwMDI2NjA2MjgwNzQ0.YNqPkg.62VOdloyGgExVATiHMXvX84mVYE`);
