import axios from 'axios'

let handler = async (m, { text, conn, usedPrefix, command }) => {


 await conn.sendButton(m.chat,result, author, 'https://i.imgur.com/yXLnyrF.jpg', [['GROUPS', `${usedPrefix}groups`]], null, [['STREAM ANIME', `https://github.com/salmanytofficial/XLICON-V2-MD`]], m)

  }

handler.help = ['stream']

handler.tags = ['main']

handler.command = ['stream']

export default handler
