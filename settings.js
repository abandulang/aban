require("./all/module.js")
const { color } = require('./all/function')
const { version } = require("./package.json")
//========== Setting Owner ==========//
global.owner = "62895392799797"
global.owner2 = "62895392799797"
global.namaowner = "Arachu"
global.botname = "FlowFalcon"
//======== Setting Bot & Link ========//
global.namabot = "Arachu" 
global.namabot2 = "- Arachu - BotWa"
global.foother = "© <_>"
global.idsaluran = false
global.linkgc = 'https://milik-pais.tech/'
global.linksaluran = ""
global.linkyt = 'https://milik-pais.tech/'
global.linktele = 'https://milik-pais.tech/'
global.packname = "Flow Falcon"
global.author = "https://milik-pais.tech/"

//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = true
global.owneroff = false


//========== Setting Panel Server  1==========//
global.domain = "https://panel.hoster.web.id"
global.apikey = ""
global.capikey = ""
//========== Setting Panel Server  2==========//
global.domain2 = ""
global.apikey2 = ""
global.capikey2 = ""
//======== egg & loc biasanya sama jadi gausah ========//
global.egg = "15"
global.loc = "1"

//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Bang ✅", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot!", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})