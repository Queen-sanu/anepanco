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
  react: "🎀",
  alias: ["big thaks","system","speed1","owner"],
  desc: "Get bot\'s command list.",
  category: "main",
  use: '.menu',
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{


if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
let monspacenew ='`'
const cap = `🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️

╭───═❮ *📜 ᴍᴇɴᴜ ʟɪsᴛ 📜* ❯═───❖
│ *🚀𝙑𝙀𝙍𝙎𝙄𝙊𝙉:* ${require("../package.json").version}
│ *⌛𝙈𝙀𝙈𝙊𝙍𝙔:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│ *🕒𝙍𝙐𝙉𝙏𝙄𝙈𝙀:* ${runtime(process.uptime())}
│ *📍𝙋𝙇𝘼𝙏𝙁𝙊𝙍𝙈:* ${hostname}
╰━━━━━━━━━━━━━━━┈⊷`
var vajiralod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ██▒▒▒▒▒▒▒▒▒▒》20%",
"《 ███▒▒▒▒▒▒▒▒▒》30%",
"《 ████▒▒▒▒▒▒▒▒》40%",
"《 █████▒▒▒▒▒▒▒》50%",
"《 ██████▒▒▒▒▒▒》60%",
"《 ███████▒▒▒▒▒》70%",
"《 ████████▒▒▒▒》80%",
"《 █████████▒▒▒》90%",
"《 ██████████▒▒》95%",
"《 ███████████▒》99%",
"《 ████████████》100%",
"`🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️`"	
]
let { key } = await conn.sendMessage(from, {text: ''})

for (let i = 0; i < vajiralod.length; i++) {
await conn.sendMessage(from, {text: vajiralod[i], edit: key })
}	


if (config.MODE === 'nonbutton') {

const category = q.trim().toUpperCase();
let menuc = `╭━━〔${new Date().getHours() < 12 ? '*🌄 සුබ උදෑසනක් 🌄*' : '*🌛 සුබ රාත්‍රියක්  🌛*'}〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*
┃◈└───────────┈⊷
╰──────────────┈
*◈╾──────${category} I,AM ALIVE NOW──────╼◈*\n\n> 𝚃𝙷𝙴 𝚉𝙰𝙽𝚃𝙰-𝚇𝙼𝙳 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝙼𝚁 𝚂𝚄𝚁𝙰𝙽𝙶𝙰 𝙼𝙾𝙳-𝚉 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*'	

  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'ᴢᴀɴᴛᴀ-xᴍᴅ'){
  if(!commands[i].dontAddCommandList){

menuc += `• *${commands[i].pattern}*\n`
}}};
  menuc += `\n⭓ *🚀Version:* ${require("../package.json").version}


*⌛Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB


*🕒Runtime:* ${runtime(process.uptime())}


*📍Platform:* ${hostname}

🎀 i am zanta-xmd, a whatsapp bot based on nodejs java script. i was created based on code, and the person who created me is suranga chamith official 💖
                    
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖`

let menuc1 = `╭━━〔${new Date().getHours() < 12 ? '*🌄 සුබ උදෑසනක් 🌄*' : '*🌛 සුබ රාත්‍රියක්  🌛*'}〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*
┃◈└───────────┈⊷
╰──────────────┈
*◈╾──────${category}MY SYSTEM──────╼◈*\n\n> 𝚃𝙷𝙴 𝚉𝙰𝙽𝚃𝙰-𝚇𝙼𝙳 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝙼𝚁 𝚂𝚄𝚁𝙰𝙽𝙶𝙰 𝙼𝙾𝙳-𝚉 💖\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'ᴢᴀɴᴛᴀ-xᴍᴅ'){
  if(!commands[i].dontAddCommandList){

menuc1 += `• *${commands[i].pattern}*\n`
}}};
  menuc1  += `🖥️ *ZANTA-XMD SYSTEM INFO* 🖥️

📌  *_Server System informations_*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

*🚀𝙑𝙀𝙍𝙎𝙄𝙊𝙉:* ${require("../package.json").version}


*⌛𝙈𝙀𝙈𝙊𝙍𝙔:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB


*🕒𝙍𝙐𝙉𝙏𝙄𝙈𝙀:* ${runtime(process.uptime())}



*📍𝙋𝙇𝘼𝙏𝙁𝙊𝙍𝙈:* ${hostname}

> *𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*`


let menuc2 = `╭━━〔${new Date().getHours() < 12 ? '*🌄 සුබ උදෑසනක් 🌄*' : '*🌛 සුබ රාත්‍රියක්  🌛*'}〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*
┃◈└───────────┈⊷
╰──────────────┈
*◈╾──────${category}MY OWNER──────╼◈*\n\n> 𝚃𝙷𝙴 𝚉𝙰𝙽𝚃𝙰-𝚇𝙼𝙳 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝙼𝚁 𝚂𝚄𝚁𝙰𝙽𝙶𝙰 𝙼𝙾𝙳-𝚉 💖\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'ᴢᴀɴᴛᴀ-xᴍᴅ'){
  if(!commands[i].dontAddCommandList){


}}};
  menuc2 += `===========❮ 𝐀𝐁𝐎𝐔𝐓 𝐌𝐄 ❯===========

*හායිම් || 💦💖😼 °ᥫ᭡ _ 🐼💗*💫
*_Ｆᴏʀ ＳᴛΔᵀᴜs Ｖɪᴠᴇs_ °ᥫ᭡ _ 🐼💗*💫
*♥️💸 Name =: ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ / ᴢᴀɴᴛᴀ°ᥫ᭡ _*
*♥️💸 From =: ɢᴀᴍᴘᴀʜᴀ / ᴋᴇɢᴀʟʟᴀ°ᥫ᭡ _*
*♥️💸 Age  =: 20°ᥫ᭡*
♥️💸 *Birthday=2005.04.04*
♥️💸 *Gender=Bʙᴏʏ*
▔▔▔▔▔▔▔▔▔▔▔▔

◯━━━━━━━━◯ *http://wa.me/+94760264995?text=*Hi/ලස්සන_ලමයො*♥️🦋 
◯━━━━━━━━◯ *http://wa.me/+94760879639?text=*Hi/ලස්සන_ලමයො*♥️🦋 
◯━━━━━━━━◯ *http://wa.me/+94769819044?text=*Hi/ලස්සන_ලමයො*♥️🦋 

> *𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*`


let menuc3 = `╭━━〔${new Date().getHours() < 12 ? '*🌄 සුබ උදෑසනක් 🌄*' : '*🌛 සුබ රාත්‍රියක්  🌛*'}〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*
┃◈└───────────┈⊷
╰──────────────┈
*◈╾──────${category}MY REPO──────╼◈*\n\n> 𝚃𝙷𝙴 𝚉𝙰𝙽𝚃𝙰-𝚇𝙼𝙳 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝙼𝚁 𝚂𝚄𝚁𝙰𝙽𝙶𝙰 𝙼𝙾𝙳-𝚉 💖\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'ᴢᴀɴᴛᴀ-xᴍᴅ'){
  if(!commands[i].dontAddCommandList){


}}};
  menuc3 += `╭━━〔 *𝙕𝘼𝙉𝙏𝘼-𝙓𝙈𝘿* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *🤠 𝐎𝐰𝐧𝐞𝐫: ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ*
┃◈┃• *🪪 𝐕𝐞𝐫𝐬𝐢𝐨𝐧*:  1.0*
┃◈└───────────┈⊷
╰──────────────┈⊷

╭━━〔 *𝙕𝘼𝙉𝙏𝘼-𝙓𝙈𝘿* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃⛩️ 𝐁𝐎𝐓 𝐑𝐄𝐏𝐎 : 𝙲𝙾𝙼𝙸𝙽𝙶 𝚂𝙾𝙾𝙽..
┃◈┃
┃◈┃⛩️ 𝐏𝐀𝐈𝐑 𝐖𝐄𝐁 : https://zantax-md-pair-2f8b1bdc5303.herokuapp.com/
┃◈┃
┃◈┃⛩️ 𝐁𝐎𝐓 𝐂𝐇𝐀𝐍𝐄𝐋 : https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28
┃◈└───────────┈⊷
╰──────────────┈⊷
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖`


let menuc4 = `╭━━〔${new Date().getHours() < 12 ? '*🌄 සුබ උදෑසනක් 🌄*' : '*🌛 සුබ රාත්‍රියක්  🌛*'}〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*
┃◈└───────────┈⊷
╰──────────────┈
*◈╾──────${category}BIG THANKS──────╼◈*\n\n> 𝚃𝙷𝙴 𝚉𝙰𝙽𝚃𝙰-𝚇𝙼𝙳 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝙼𝚁 𝚂𝚄𝚁𝙰𝙽𝙶𝙰 𝙼𝙾𝙳-𝚉  💖\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'ᴢᴀɴᴛᴀ-xᴍᴅ'){
  if(!commands[i].dontAddCommandList){


}}};
  menuc4 += `╭━━〔 *𝐙𝐀𝐍𝐓𝐀-𝐗𝐌𝐃* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *🤠 𝐎𝐰𝐧𝐞𝐫: ꜱᴜʀᴀɴɢᴀ ᴄʜᴀᴍɪᴛʜ*
┃◈┃• *🪪 𝐕𝐞𝐫𝐬𝐢𝐨𝐧*:  1.0*
┃◈└───────────┈⊷
╰──────────────┈⊷

╭━━〔 *𝐁𝐈𝐆 𝐓𝐇𝐀𝐍𝐊𝐒* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃⛩️ *𝙲𝚈𝙱𝙴𝚁 𝙵𝙻𝙰𝙲𝙷* 
┃◈┃
┃◈┃⛩️ *𝙿𝙾𝙳𝙸 𝙻𝙴𝙾*
┃◈┃
┃◈┃⛩️ *𝙼𝚁 𝙽𝙸𝙺𝙾*
┃◈┃
┃◈┃⛩️ *𝚃𝙷𝙴 𝚂𝙷𝙴𝙼𝙾*
┃◈┃
┃◈┃⛩️ *𝙰𝙽𝙳 𝙼𝚈 𝙱𝙾𝚃 𝙰𝙻𝙻 𝚄𝚂𝙴𝚁𝚂*
┃◈┃
┃◈└───────────┈⊷
╰──────────────┈⊷
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖`
	
let menuc5 = `*◈╾──────${category}DEPLOY PRICE──────╼◈*\n\n> 𝚃𝙷𝙴 𝚉𝙰𝙽𝚃𝙰-𝚇𝙼𝙳 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝙼𝚁 𝚂𝚄𝚁𝙰𝙽𝙶𝙰 𝙼𝙾𝙳-𝚉  💖\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'ᴢᴀɴᴛᴀ-xᴍᴅ'){
  if(!commands[i].dontAddCommandList){

}}};
  menuc5 += `╭━━〔${new Date().getHours() < 12 ? '*🌄 සුබ උදෑසනක් 🌄*' : '*🌛 සුබ රාත්‍රියක්  🌛*'}〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*
┃◈└───────────┈⊷
╰──────────────┈
       
╭━━━〔 🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*〕━━━┈⊷
┃★╭──────────────
┃★│ 👑 Owner : *ᴍʀ ꜱᴜʀᴀɴɢᴀ*
┃★│ 📚 Version : *1.0*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭━━〔 *DEPLOY PRICE* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈│🎀 ᴏɴᴇ ᴡᴇᴇᴋ
┃◈│💸 ʟᴋʀ. 100
┃◈│
┃◈│🎀 ᴛᴡᴏ ᴡᴇᴇᴋꜱ
┃◈│💸 ʟᴋʀ. 150
┃◈│
┃◈│🎀 ᴏɴᴇ ᴍᴏɴᴛʜ
┃◈│💸 ʟᴋʀ. 200
┃◈│
┃◈│🎀 ᴛᴏᴡ ʏᴇᴀʀ
┃◈│💸 ʟᴋʀ. 800
┃◈│
┃◈│🎀 ʟɪꜰᴇᴛɪᴍᴇ
┃◈│💸 ʟᴋʀ.1500
┃◈╰───────────┈⊷
╰──────────────┈⊷

◖┉┉┉┉┉┉┉┉┉┉┉┉┉◗
 ⚠️   ᴀ ᴡᴀʀɴɪɴɢ   ⚠️
◖┉┉┉┉┉┉┉┉┉┉┉┉┉◗

*මෙමෙ මිල ගනන් වලට හෝ ඊට වැඩිය ᴢᴀɴᴛᴀ-xᴍᴅ ᴅᴇᴘʟᴏʏ කරනදෙන පවසන හොරුන්ට අසු නොන්න එම පුද්ගලයන් විසින් කරනු ලබන ගනුදෙනු සදහා අප වගකියනු නොලැබේ...!

𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖*`


let menuc6 = `╭━━〔${new Date().getHours() < 12 ? '*🌄 සුබ උදෑසනක් 🌄*' : '*🌛 සුබ රාත්‍රියක්  🌛*'}〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*
┃◈└───────────┈⊷
╰──────────────┈
       
╭━━━〔 🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*〕━━━┈⊷
┃★╭──────────────
┃★│ 👑 Owner : *ᴍʀ ꜱᴜʀᴀɴɢᴀ*
┃★│ 📚 Version : *1.0*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
*◈╾──────${category}MY INFO──────╼◈*\n\n> 𝚃𝙷𝙴 𝚉𝙰𝙽𝚃𝙰-𝚇𝙼𝙳 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝙼𝚁 𝚂𝚄𝚁𝙰𝙽𝙶𝙰 𝙼𝙾𝙳-𝚉  💖\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'ᴢᴀɴᴛᴀ-xᴍᴅ'){
  if(!commands[i].dontAddCommandList){


}}};
  menuc6 += `⛩️ *MY OWNER ABOUT :-* *My ultimate goal is not just to find success, but to create it — by building a powerful brand that will be known and respected worldwide. Every step I take is a move towards that vision — driven by hard work, dedication, and a desire to give my mother the life she deserves.*

*This is just the beginning of my journey. One day, the world will know the name suranga .*

*🐉 If you need any help from me, you can type the "alive" command and get the "menu" thanks*
*────────────────────────┈⊷*
⊷
*•────────────•⟢*
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐲 - 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂 💖
*•────────────•⟢*`
	
let menuc7 = `*◈╾──────${category} OTHER COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'other'){
  if(!commands[i].dontAddCommandList){

menuc7 += `• *${commands[i].pattern}*\n`
}}};
  menuc7 += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`
	
let menuc8 = `*◈╾──────${category} MOVIE COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        
  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'movie'){
  if(!commands[i].dontAddCommandList){

menuc8 += `• *${commands[i].pattern}*\n`
}}};
  menuc8 += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`
	
let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: `` },
              carouselMessage: {
                cards: [
                  {
                    
                    header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/iex8ou.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc,
          gifPlayback: true,
          subtitle: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
          hasMediaAttachment: false
        }),
                    body: { text: '' },
                    nativeFlowMessage: {
                      
                    },
                  },
                  {                   

header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/an060w.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc1,
          gifPlayback: true,
          subtitle: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {

                    },
                  },
                  {                   

header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/ko9219.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc2,
          gifPlayback: true,
          subtitle: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },
                  {                   
			  
header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/ujeiox.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc3,
          gifPlayback: true,
          subtitle: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },                                    

                  {                   
			  
header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/b3lm4s.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc4,
          gifPlayback: true,
          subtitle: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },                                    
                      {                   
			  
header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/jqpiut.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc5,
          gifPlayback: true,
          subtitle: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },        
	                  {                   
			  
header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/f3wszs.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc6,
          gifPlayback: true,
          subtitle: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },         
	                  {             
	                  
header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/wm37xc.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc8,
          gifPlayback: true,
          subtitle: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },         
	                  {                                                 
			  			  
header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/q7e5va.jpg' } }, { upload: conn.waUploadToServer })),
          title: menuc7,
          gifPlayback: true,
          subtitle: "🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️",
          hasMediaAttachment: false
        }),
                    body: { text: ``},
                    nativeFlowMessage: {
                      
                    },
                  },                                    		
                ],
                            messageVersion: 1,
                        },
                         contextInfo: {
                         mentionedJid: [m.sender],
                         forwardingScore: 999,
                         isForwarded: true,
                         forwardedNewsletterMessageInfo: {
                         newsletterJid: '120363421846535301@newsletter',
                         newsletterName: `🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️`,
                         serverMessageId: 143
                            }
                        }
                    }
                }
            },
        },
        { quoted: m })
        
            await conn.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
    

} if (config.MODE === 'button') {


        let sections = [{
                title: '💙 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 - 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀 𝐎𝐅𝐂',
                rows: [{
                        title: 'DOWNLOAD MENU',
                        description: `Download commands`,
                        id: `${prefix}downmenu`
                    },
                    {
                        title: `SEARCH MENU`,
                        description: 'Search commands',
                        id: `${prefix}searchmenu`
                    },
		    {
                        title: `CONVERT MENU`,
                        description: 'Convert commands',
                        id: `${prefix}convertmenu`
                    },
                    {
                        title: `MAIN MENU`,
                        description: 'Convert commands',
                        id: `${prefix}mainmenu`
                    },
		    {
                        title: `GROUP MENU`,
                        description: 'Group commands',
                        id: `${prefix}groupmenu`
                    },
                    {
                        title: `LOGO MENU`,
                        description: 'Logo commands',
                        id: `${prefix}logomenu`
                    },
		    {
                        title: `BUG MENU`,
                        description: 'Bug commands',
                        id: `${prefix}bugmenu`
                    },
                    {
                        title: `MOVIE MENU`,
                        description: 'Movie commands',
                        id: `${prefix}moviemenu`
                    },   
		    {
                        title: `OTHER MENU`,
                        description: 'Other commands',
                        id: `${prefix}othermenu`
                    },      
                ]
            }
        ]

        let listMessage = {
            title: 'Click Here⎙',
            sections
        };
        conn.sendMessage(from, {
            image: { url: config.LOGO },
    caption: cap,
    footer: config.FOOTER,
                buttons: [
			{
                    buttonId: `${prefix}alive`,
                    buttonText: {
                        displayText: 'ALIVE'
                    },
                },
		{
                    buttonId: `${prefix}ping`,
                    buttonText: {
                        displayText: 'PING'
                    },
                },	
                {
                    buttonId: 'action',
                    buttonText: {
                        displayText: 'ini pesan interactiveMeta'
                    },
                    type: 4,
                    nativeFlowInfo: {
                        name: 'single_select',
                        paramsJson: JSON.stringify(listMessage),
                    },
                },
            ],
            headerType: 1,
            viewOnce: true
        }, {
            quoted: m
        });
	
}
	
} catch (e) {
reply()
l(e)
}
})   











//============================================================================	

cmd({
    pattern: "downloadmenu",
    react: "⬇👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*'	

  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'download'){
  if(!commands[i].dontAddCommandList){

menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421846535301@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})


cmd({
    pattern: "moviemenu",
    react: "⬇👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*'	

  for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'movie'){
  if(!commands[i].dontAddCommandList){

menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421846535301@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28" ,
thumbnailUrl: config.LOGO,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})


cmd({
    pattern: "searchmenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421846535301@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})


cmd({
    pattern: "convertmenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'convert'){
if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421846535301@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})


cmd({
    pattern: "logomenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'logo'){
if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421846535301@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})


cmd({
  pattern: "mainmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'main'){
if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421846535301@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})


cmd({
  pattern: "groupmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'group'){
if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421846535301@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})

cmd({
  pattern: "bugmenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'bug'){
if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

  
        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421846535301@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})

cmd({
  pattern: "othermenu",
  react: "👨‍💻",
  dontAddCommandList: true,
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const category = q.trim().toUpperCase();
let menuc = `*◈╾──────${category} SUB COMMAND LIST──────╼◈*\n\n> Select you want command type and enjoy ZANTA-XMD whatsapp bot 💖\n\n`;
        let wm = '*ᴢᴀɴᴛᴀ-xᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴛʜᴇ ᴛᴇᴀᴍ • ᴛᴅᴅ*'
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'other'){
if(!commands[i].dontAddCommandList){
menuc += `╭────────●●►\n│ • *${commands[i].pattern}* \n╰────────────────────●●►\n`
}}};
  menuc += `\n⭓ *Total Commands List ${category}*: ${commands.filter(cmd => cmd.category.toUpperCase() === category).length}\n\n${wm}`

  
        //await conn.sendMessage(from, { text: commandList }, { quoted: mek });
        await conn.sendMessage(from, {
text: menuc,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1111,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363421846535301@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '🧙‍♂️ 𝐙𝐀𝐍𝐓𝐀 × 𝐌𝐃 𝐎𝐅𝐂 🧙‍♂️',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VbBNZJcAzNbvfssOXP28" ,
thumbnailUrl: config.LOGO ,
renderLargerThumbnail: true,
showAdAttribution: false
}
}}, { quoted: mek})
    } catch (e) {
        reply('*Error !!*')
        console.log(e)
    }
})
 
//============================================================================