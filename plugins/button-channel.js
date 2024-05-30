import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async m => {
  const imageBuffer = await (await fetch('https://telegra.ph/file/9f5d82d5c216daa31cfc5.png')).buffer()
  let imgurl = await uploadImage(imageBuffer)
  
  const messageContent = `
  ╭⭑⭑⭑★✪ *Shotgun_Suppressor* ✪★⭑⭑⭑
  │ 📂 *BOT Name:* _Shotgun_Suppressor_
  │ 📝 *Description:* _I'm Shotgun_Suppressor. A MultiDevice WhatsApp bot with rich features Created By Samuel Muli._
  │ 👤 *Owner:* _Samuel Muli_
  │ 🌐 *Channel:* https://chat.whatsapp.com/IJ3M3dQ2ZxcGAJYxfz5OzK
  ╰━━━━━━━━━━━━━━━━╯
  `.trim()
  const imageBuffer = await response.buffer()
      let imgurl = await uploadImage(imageBuffer)
      await conn.sendButton(m.chat,'Here is your Result', author, imgurl, [['MENU', `${usedPrefix}menu`]], null, [['WATCH ANIME', `https://ab-streamer.vercel.app`]], m)
}
handler.help = ['bchannel']
handler.tags = ['main']
handler.command = ['connect', 'channel']
export default handler
