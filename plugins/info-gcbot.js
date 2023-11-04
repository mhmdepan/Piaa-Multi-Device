let handler = async (m, { conn }) => {
conn.reply(m.chat, `_List Group @piaadev_
*Offcial Group*
${link.gc}

`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
