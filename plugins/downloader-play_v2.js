let fetch = require('node-fetch') 
 let handler = async (m, {command, conn, text}) => { 
 if (!text) throw `*❰ ❗ ❱ Ingrese el nombre/titulo o link para descargar la canción o vídeo de YouTube*\n\n*Ejemplo*\n*#play.1 Vampire - OlvidoRodrigo*\n*#play.2 Lana del Rey - Cinnamon Girl*` 
 if (command == 'play.1') { 
 let espera = '*❰ ❗ ❱ Aguarde un momento en lo que envío su audio*' 
 m.reply(espera) 
 let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text) 
 let json = await res.json() 
 conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })} 
 if (command == 'play.2') { 
 let espera = '*❰ ❗ ❱ Aguarde un momento en lo que envío su video*' 
 m.reply(espera) 
 let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp4?text="+text) 
 let json = await res.json() 
 conn.sendFile(m.chat, json.result.url, 'error.mp4', `*Diego Bot*`, m)} 
 } 
 handler.command = ['play.1', 'play.2'] 
 module.exports = handler

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; 
 let yts = require('yt-search') 
 let fetch = require('node-fetch') 
 const { servers, yta, ytv } = require('../lib/y2mate') 
 let handler = async (m, { conn, command, text }) => { 
   if (!text) throw '*📌 Escriba el nombre/título del video o audio a bucar*\n\n*Ejemplo:*\n*#play Billie Eilish - Bellyache*' 
   let results = await yts(text) 
   m.reply('🔁 *Descargando...*\n\n*❰ ❗ ❱ Si no obtiene ningun resultado o le sale algun error intente con otro nombre*') 
   let vid = results.all.find(video => video.seconds < 3600) 
   if (!vid) throw '*Video/Audio No encontrado* ' 
   let isVideo = .test(command) 
   let { dl_link, thumb, title, filesize, filesizeF} = await (isVideo ? ytv : yta)(vid.url, 'id4') 
   //let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesizesLimit 
   conn.sendFile(m.chat, thumb, 'thumbnail.jpg', ` 
 *🪄 ️Reproductor By Diego Bot 🪄* 
  
 💗 *${title}* 
 9:99 ━❍──────── -9:99 
 ↻     ⊲  Ⅱ  ⊳     ↺ 
 VOLUME: ▁▂▃▄▅▆▇ 100% 
  
 *🎈 Tamaño del archivo:* ${filesizeF} 
 *🎁 Aguarde un momento en lo que envío su audio/video* 
 `.trim(), m) 
   let _thumb = {} 
   try { if (isVideo) _thumb = { thumbnail: await (await fetch(thumb)).buffer() } } 
   catch (e) { } 
   conn.sendFile(m.chat, dl_link, title + '.mp' + (.test(command)), ` 
 *🎈 Título:* ${title} 
 *🎁 Tamaño del archivo:* ${filesizeF} 
 `.trim(), m, false, _thumb || {}) 
 } 
 handler.help = ['play', 'play2'].map(v => v + ' <canción >') 
 handler.tags = ['downloader'] 
 handler.command = /^play2?$/i 
 handler.group = false 
  
 handler.exp = 0 
 handler.registrar = false 
 handler.limit = false 
  
 module.exports = handler