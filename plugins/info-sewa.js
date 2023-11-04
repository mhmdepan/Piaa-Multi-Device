let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/8dadb05b047a86a47d0d6.jpg'
let sewa = ` ---『 *LIST HARGA* 』---
❏──「 *Sewa Bot* 」
│ • *1 Minggu:* Rp.5.000
│ • *2 Minggu:* Rp.10.000
│ • *1 Bulan:* Rp.25.000
│ • *Permanen:* Rp.40.000
❏──────────────๑
❏──「 *Premium* 」
│ • *1 Minggu:* Rp.5.000
│ • *2 Minggu:* Rp.10.000
│ • *1 Bulan:* Rp.20.000
│ • *Permanen:* Rp.30.000
❏──────────────๑
*Premium itu hanya akses fitur premium saja kak seperti hdr, remini dll dan tidak bisa di masukkan ke grup*

_Sewa bot bisa bisa memasukkan bot ke grup dan mendapatkan premium jadi bisa akses fitur premium di bot_
❏──「 *Pembayaran* 」
│ • *Ovo:* -
│ • *Dana:* -
│ • *Qris:* Hub owner
❏──────────────๑
│ Hubungi Owner!!!
│wa.me/6282226799373
❏──────────────๑
 _2023 © @piaadev_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['menuprem']
handler.tags = ['main']
handler.command = /^(sewa|sewabot|prem)$/i

export default handler