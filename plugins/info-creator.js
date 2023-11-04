function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: EpiaaaChan\nitem1.TEL;waid=6282226799373:6282226799373\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;Email Owner:epanstore21@gmail.com\nORG: INI OWNER\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler