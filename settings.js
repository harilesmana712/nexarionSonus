//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +6285864562024
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs');
const chalk = require('chalk');

// Owner v card
global.ytname = "" // Your YouTube channel name
global.socialm = "" // Your GitHub or Instagram name
global.location = "" // Your location

// New settings
global.botname = 'nexarion sonus' // Your bot name
global.ownernumber = ['6285864562024'] // Owner number, don't add more than one
global.ownername = 'harry' // Your owner name
global.websitex = ""
global.wagc = ""
global.themeemoji = '🪀'
global.wm = "nexarion sonus"
global.botscript = '://github.com/DGXeon/CheemsBot-MD15' // Script link
global.packname = "Sticker By"
global.author = "nexarion sonus\n\n+6285864562024"
global.creator = "6285864562024@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6285864562024"] // Premium User

// Channel ID
global.xchannel = {
    jid: ''
}

// Bot settings
global.botnumber = '6585603972274'; // Change to bot number
global.typemenu = 'v12' // Menu type 'v1' => 'v12'
global.typereply = 'v4' // Reply type 'v1' => 'v4'
global.autoblocknumber = '92' // Set autoblock country code
global.antiforeignnumber = '91' // Set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json' // Update to the correct path

global.limit = {
    free: 2,
    premium: 99999,
    vip: 'VIP',
    owner: Infinity, // Limit for owner, can be adjusted as needed
    bot: Infinity // Limit for bot, can be adjusted as needed
}

global.uang = {
    free: 10000,
    premium: 1000000,
    vip: 10000000,
    owner: Infinity, // Uang untuk owner
    bot: Infinity // Uang untuk bot
}

global.mess = {
    error: 'Error!',
    nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done'
}

global.bot = {
    limit: 0,
    uang: 0
}

global.game = {
    suit: {},
    menfes: {},
    tictactoe: {},
    kuismath: {},
    tebakbom: {},
}
global.userLimits = {}; // Menyimpan limit per pengguna

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
});