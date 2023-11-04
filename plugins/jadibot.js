let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
*❏––––––『 JADI 𝐁𝐎𝐓 』––––––❏*

OWNER BOT MELAYANI : 
~~~~~~~~~~~~~~~~~~~~~~~~~~
JADIBOT = FREE AJA DEH
---------------------------------------------------------------------
KONTAK OWNER : wa.me/6282226799373



⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
        © @piaadev_

`.trim()
  conn.sendFile(m.chat, 'https://telegra.ph/file/8dadb05b047a86a47d0d6.jpg', null, caption, m)
}
handler.help = ['jadibot']
handler.tags = ['jadibot']
handler.command = /^(jadibot)$/i;

handler.register = false
export default handler