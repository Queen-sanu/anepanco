const config = require('../settings')
const os = require('os')
const fs = require('fs')
const prefix = config.PREFIX
const { cmd, commands } = require('../lib/command')
const devlopernumber = "94711453361"
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson,clockString, jsonformat} = require('../lib/functions')
var { updateCMDStore,isbtnID,getCMDStore,getCmdForCmdId,connectdb,input,get, updb,updfb } = require("../lib/database")
const {
    default: makeWASocket,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    proto
} = require('@whiskeysockets/baileys')


 function genMsgId() {
  const prefix = "3EB";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomText = prefix;

  for (let i = prefix.length; i < 22; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters.charAt(randomIndex);
  }

  return randomText;
} 

const reportedMessages = {}
//const isBan = banUser.includes(mek.sender)
	    

	
var BOTOW = ''
if(config.LANG === 'SI') BOTOW = "*ඔබ Bot\'s හිමිකරු හෝ  උපපරිපාලක නොවේ !*"
else BOTOW = "*You are not bot\'s owner or moderator !*"


cmd({
    pattern: "alive",
    react: "👨‍💻",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	var msg = mek
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
var vajiralod = [
"LOADING ●●○○○○",
"LOADING ●●●●○○",
"LOADING ●●●●●●",
"`COMPLETED ✅`"	
]
let { key } = await conn.sendMessage(from, {text: ''})

for (let i = 0; i < vajiralod.length; i++) {
await conn.sendMessage(from, {text: vajiralod[i], edit: key })
}	

  const sections = [
    {
	title: "",
	rows: [
	    {title: "1", rowId: prefix + 'menu' , description: 'COMMANDS MENU'},
	    {title: "2", rowId: prefix + 'ping' , description: 'VAJIRA-MD SPEED'} ,

	]
    } 
]
const listMessage = {
caption: `${monspace}👋 කොහිමද ${pushname} I'm alive now${monspace}
    
*🚀Version:* ${require("../package.json").version}
*⌛Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*🕒Runtime:* ${runtime(process.uptime())}
*📍Platform:* ${hostname}

🐼This is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot
                    
*🌻Have A Nice Day..*🌻`,
image : { url: config.LOGO },	
footer: config.FOOTER,
title: '',
buttonText: '*🔢 Reply below number*',
sections
}
	
return await conn.replyList(from, listMessage ,{ quoted : mek })
	
} catch (e) {
  reply('*ERROR !!*')
  l(e)
}
})

cmd({
    pattern: "menu2",
    react: "📂",
    alias: ["help"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.menu',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,  isSachintha, isSavi, isSadas, isMani, isMe,isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    let menuc1 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'download'){
if(!commands[i].dontAddCommandList){
menuc1 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc2 = ``
for (let i=0;i<commands.length;i++) { 
  if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){
  menuc2 += `*│⩥* .${commands[i].pattern}\n`
  }}};

let menuc3 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'convert'){
  if(!commands[i].dontAddCommandList){
    menuc3 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc4 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'logo'){
  if(!commands[i].dontAddCommandList){
menuc4 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc5 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'main'){
  if(!commands[i].dontAddCommandList){
menuc5 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc6 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'group'){
if(!commands[i].dontAddCommandList){
  menuc6 += `*│⩥* .${commands[i].pattern}\n`
}}};

let menuc7 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'bug'){
if(!commands[i].dontAddCommandList){
  menuc7 += `*│⩥* .${commands[i].pattern}\n`
}}};	

let menuc8 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'other'){
if(!commands[i].dontAddCommandList){
  menuc8 += `*│⩥* .${commands[i].pattern}\n`
}}};
     
let menumg = `*Hellow👸* ${pushname}

*╭─     ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ*
*│🕵️‍♂️ 𝘙𝘶𝘯 𝘛𝘪𝘮𝘦 -* ${runtime(process.uptime())} 
*│🕵️‍♂️ 𝘙𝘢𝘮 𝘜𝘴𝘦 -* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰──────────●●►*
*👸 𝘝𝘈𝘑𝘐𝘙𝘈 𝘔𝘥 𝘊𝘰𝘮𝘮𝘢𝘮𝘥 𝘗𝘢𝘯𝘦𝘭*
*╭──────────●●►*
*│🧙‍♂️ DOWNLOAD COMMANDS*
*│   ───────*

${menuc1}*╰───────────●●►*
*╭──────────●●►*
*│🧙‍♂️ SEARCH COMMANDS*
*│   ───────*

${menuc2}*╰───────────●●►*

*╭──────────●●►*
*│🧙‍♂️ CONVERT COMMANDS*
*│   ───────*

${menuc3}*╰───────────●●►*

*╭──────────●●►*
*│🧙‍♂️ LOGO COMMANDS*
*│   ───────*

${menuc4}*╰───────────●●►*

*╭──────────●●►*
*│🧙‍♂️ MAIN COMMANDS*
*│   ───────*

${menuc5}*╰───────────●●►*

*╭──────────●●►*
*│🧙‍♂️ GROUP COMMANDS*
*│   ───────*

${menuc6}*╰───────────●●►*
		       
*╭──────────●●►*
*│🧙‍♂️ BUG COMMANDS*
*│   ───────*

${menuc7}*╰───────────●●►*	

*╭──────────●●►*
*│🧙‍♂️ OTHER COMMANDS*
*│   ───────*

${menuc8}*╰───────────●●►*	

👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ 👨‍💻`	


	    
await conn.sendMessage(from, { image: { url: config.LOGO }, caption: menumg }, { quoted: mek, messageId:genMsgId() })
} catch (e) {
reply('*Error !!*')
l(e)
}
})
