let handler = async (m, { conn, usedPrefix }) => {
	let donasi = `
╭─「 • *ᴘᴜʟꜱᴀ* • 」
│ • *TELKOM* ${pay.pulsa}
╰─────

╭─「 • *ᴇ-ᴡᴀʟʟᴇᴛ* • 」
│ • *ᴅᴀɴᴀ* -
│ • *ɢᴏᴘᴀʏ* -
│ • *ᴏᴠᴏ* -
╰─────

_◛˖ ᴛᴇʀɪᴍᴀᴋᴀꜱɪʜ ᴜɴᴛᴜᴋ ʏᴀɴɢ ꜱᴜᴅᴀʜ ʙᴇʀᴅᴏɴᴀꜱɪ_`
await conn.sendFile(m.chat, pay.qris, 'qris.jpg', donasi, m)
}
handler.command = /^(donasi|dns)$/i
handler.tags = ['info']
handler.help = ['donasi']
export default handler