global.d = new Date()
global.calender = d.toLocaleDateString('id')

global.prefa = ['','!','.',',','🐤','🗿']
global.ownNumb = "628" //<== no lu ya
global.gclu = "https://chat.whatsapp.com/DWuXHxMRK3G56DbpvuezIf" //seterah
global.ownName = "𝙑𝙞𝙣𝙯 𝙓𝟳" //<== nama lu
global.outh = "Vinz X7" //sterah
global.wame = "wa.me/628" //jangan di ganti
global.botname = "𝐂𝐔𝐑𝐘 𝐁𝐎𝐓" //seterah tpi kalau di ganti jdi jelek


global.autOwn = "req(62-8S57547ms11).287p"
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})