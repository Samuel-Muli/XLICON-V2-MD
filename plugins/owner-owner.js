let handler = async (m, { conn, text, args }) => {
    m.reply(` Hi there,\n This is Samuel's Bot\n How can I Help you?`)
    m.react(`🖥️`)
}
handler.help = ['samu']
handler.tags = ['owner']
handler.command = /^s(amu|am)$/i

export default handler