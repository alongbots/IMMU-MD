const config = require('../config');
const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const fs = require('fs');

cmd({
    pattern: "menu3",
    desc: "Unified bot menu",
    category: "menu",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
        const dec = `
╭━━━〔 *${config.BOT_NAME} Main Menu* 〕━━━╮
┃ 👑 *Owner:* ${config.OWNER_NAME}
┃ ⚙️ *Mode:* ${config.MODE}
┃ ⌨️ *Prefix:* ${config.PREFIX}
┃ 🧠 *Runtime:* ${runtime(process.uptime())}
┃ 💻 *Platform:* Heroku
┃ 🔮 *Version:* 1.0.0 Beta
╰━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━〔 🧩 *All Commands* 〕━━╮

🕋 *AI MENU*
> ai, gpt, gpt3, gptmini, meta, blackbox, imagine, copilot

🎭 *ANIME MENU*
> waifu, neko, maid, loli, animegirl, foxgirl, naruto

💫 *REACTIONS MENU*
> bite, blush, cuddle, cry, hug, kiss, lick, pat, poke, wink, wave, smile, dance, slap, kill, glomp, bonk, highfive, cringe, happy

🎉 *FUN MENU*
> joke, rate, hack, ship, insult, pickup, shapar, hand, hug, hifi, poke, character

⬇️ *DOWNLOAD MENU*
> facebook, twitter, instagram, tiktok, pinterest, mediafire, spotify, play, video, ytmp3, ytmp4, gdrive, ssweb

🧚 *CONVERT MENU*
> sticker, emojimix, fancy, tomp3, tts, trt, base64, tinyurl, urlencode, urldecode

🎧 *AUDIO EFFECTS*
> bass, slow, fast, nightcore, demon, reverse, radio, chipmunk, robot, smooth

👥 *GROUP MENU*
> tagall, tagadmins, add, remove, kick, promote, demote, revoke, lockgc, unlockgc, welcome, goodbye, antilink

🧩 *OTHER MENU*
> date, timenow, fact, weather, movie, define, wikipedia, githubstalk, news, count, roll, gpass

🗿 *MAIN MENU*
> alive, ping, runtime, uptime, owner, repo, restart, menu, allmenu

🔰 *OWNER MENU*
> listcmd, updatecmd, fullpp, shutdown, block, unblock, gjid, jid

🖌️ *LOGO MENU*
> neonlight, blackpink, dragonball, sadgirl, galaxy, hacker, angelwings, luxury, paint, typography, birthday

⚙️ *SETTINGS*
> autoreply, autotyping, autostatus, alwaysonline, prefix, mode, botname

╰━━━━━━━━━━━━━━━━━━━━━━━╯
> ${config.DESCRIPTION}
`;

        // send menu image with caption
        await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL || 'https://i.postimg.cc/xTTgKc2W/IMG-20250801-WA0019.jpg' },
            caption: dec
        }, { quoted: mek });

        // play sound
        await conn.sendMessage(from, {
            audio: fs.readFileSync('./assets/menu.m4a'),
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`❌ Error:\n${e}`);
    }
});
