let handler = async (m, { conn, isPrems}) => { //lastmiming
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

let user = global.db.data.users[m.sender]
let premium = user.premium  
let minar = `${pickRandom(['Que pro 😎 has minado',
'🌟✨ Genial!! Obtienes',
'WOW!! eres un(a) gran Minero(a) ⛏️ Obtienes',
'Has Minado!!',
'😲 Lograste Minar la cantidad de',
'Tus Ingresos subiran gracias a que minaste',
'⛏️⛏️⛏️⛏️ Minando',
'🤩 SII!!! AHORA TIENES',
'La minaria esta de tu lado, por ello obtienes',
'😻 La suerte de Minar',
'♻️ Tu Mision se ha cumplido, lograste minar',
'⛏️ La Mineria te ha beneficiado con',
'🛣️ Has encontrado un Lugar y por minar dicho lugar Obtienes',
'🏴‍☠️ Gracias a que has minado tus ingresos suman',
'Felicidades!! Ahora tienes','⛏️⛏️⛏️ Obtienes'])}`

let pp = './Menu2.jpg' 
  
 let aqua = `${pickRandom([0, 2, 3, 1, 5])}` * 1 
 let aquapremium = `${pickRandom([2, 4, 6, 7, 5, 9])}` * 1 
  
 let rock = `${pickRandom([6, 9, 0, 12, 2])}` * 1 
 let rockpremium = `${pickRandom([13, 9, 17, 20, 25])}` * 1 
  
 let pancingan = `${pickRandom([1, 0, 2, 1, 0, 0, 0])}` * 1 
 let pancinganpremium = `${pickRandom([1, 3, 4, 9, 2, 5, 8])}` * 1 
  
 const recompensas = {         
   aqua: premium ? aquapremium : aqua, 
   rock: premium ? rockpremium : rock, 
   pancingan: premium ? pancinganpremium : pancingan, 
 } 
 //let xp = Math.floor(Math.random() * 2000000) 
 let money = `${pickRandom([10200, 20080, 25090, 37000, 37070, 40070, 45800, 48090, 50900, 51090, 666666, 68050, 70074, 76700, 80890, 84170, 88830, 99001, 10009, 10599, 10808, 11006, 11902, 12306, 13810, 13989, 12920, 13000, 134880, 136850, 15970, 140990, 145990, 179900, 180990, 190000, 200000, 6668, 672920, 10738, 109182, 990929, 999999, 177889, 1430092])}` * 1 
 let moneypremium = `${pickRandom([10200, 20080, 25090, 37000, 37070, 40070, 45800, 48090, 50900, 51090, 666666, 68050, 70074, 76700, 80890, 84170, 88830, 99001, 10009, 10599, 10808, 11006, 11902, 12306, 13810, 13989, 12920, 13000, 134880, 136850, 15970, 140990, 145990, 179900, 180990, 190000, 200000, 6668, 672920, 10738, 109182, 990929, 999999, 177889, 1430092])}` * 1 
  
 let time = user.lastcoins + 6000000 //10 min 
 if (new Date - user.lastcoins < 600000) return await conn.reply(m.chat, `*⏱️ 𝙑𝙪𝙚𝙡𝙫𝙖 𝙚𝙣 ${msToTime(time - new Date())} 𝙥𝙖𝙧𝙖 𝙘𝙤𝙣𝙩𝙞𝙣𝙪𝙖𝙧 𝙢𝙞𝙣𝙖𝙣𝙙𝙤 ${global.rpgshopp.emoticon('money')}⛏️*\n\n*𝙂𝙚𝙩 𝙗𝙖𝙘𝙠 𝙞𝙣 ${msToTime(time - new Date())} 𝙩𝙤 𝙢𝙞𝙣𝙚 ${global.rpgshopp.emoticon('money')}⛏️*`, fkontak,  m) 
 user.money += premium ? moneypremium : money   
 let texto = '' 
 for (let reward of Object.keys(recompensas)) { 
     if (!(reward in user)) continue 
     user[reward] += recompensas[reward] 
 texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`} 
  
 conn.sendHydrated(m.chat, `*${premium ? '🎟️ Recompensa Premium' : '🆓 Recompensa Gratis'}*\n*${minar}*\n*${money} ${global.rpgshop.emoticon('money')}*`,`🏦 B O N O\n` + texto + `\n\n🎟️ P R E M I U N ⇢ ${premium ? '✅' : '❌'}\n${wm}`, pp, md, 'Diego-Bot-MD', null, null, [ 
 ['𝙈𝙞𝙣𝙖𝙧 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 💎', `.minar3`], 
 ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `.menu`] 
 ], m,) 
 user.lastcoins = new Date * 1   
 }
handler.help = ['minar2']
handler.tags = ['gata']
handler.command = ['minar2', 'miming2', 'mine2', 'minarcoinsidago', 'minarcoins', 'minaridago'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
