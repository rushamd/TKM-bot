"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "menu", catégorie:"Général", reaction: "✨", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const img = 'https://telegra.ph/file/e07a3d933fb4cad0b3791.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `┏❏ ⌜ Rush ⌟ ❐
┃👨‍💻 *OWNER* :Rush
     ┏❏ *General*
┃ ⎔ mods
┃ ⎔ dev
┃ ⎔ support
┃ ⎔ menu2
┃ ⎔ ping
┃ ⎔ info
┃ ⎔ runtime
┃ ⎔ repo
┃ ⎔ test
┃ ⎔ testb
┃ ⎔ tkminc
┃ ⎔ channel
┃ ⎔ vv
┗❏
┏❏ *Mods*
┃ ⎔ afk
┃ ⎔ boom
┃ ⎔ left
┃ ⎔ reboot
┗❏
┏❏ *Audio-Edit*
┃ ⎔ deep
┃ ⎔ bass
┃ ⎔ reverse
┃ ⎔ slow
┃ ⎔ smooth
┃ ⎔ tempo
┃ ⎔ nightcore
┗❏
┏❏ *dev*
┃ ⎔ bugmenu
┃ ⎔ bug
┃ ⎔ crash
┃ ⎔ loccrash
┃ ⎔ crashbug
┃ ⎔ amountbug
┃ ⎔ pmbug
┃ ⎔ delaybug
┃ ⎔ docubug
┃ ⎔ unlimitedbug
┃ ⎔ bombug
┃ ⎔ lagbug
┃ ⎔ trollybug
┗❏
┏❏ *Image-Edit*
┃ ⎔ shit
┃ ⎔ wasted
┃ ⎔ wanted
┃ ⎔ trigger
┃ ⎔ trash
┃ ⎔ rip
┃ ⎔ sepia
┃ ⎔ rainbow
┃ ⎔ hitler
┃ ⎔ invert
┃ ⎔ jail
┃ ⎔ affect
┃ ⎔ beautiful
┃ ⎔ blur
┃ ⎔ circle
┃ ⎔ facepalm
┃ ⎔ greyscale
┃ ⎔ joke
┗❏
┏❏ *Conversion*
┃ ⎔ sticker
┃ ⎔ scrop
┃ ⎔ take
┃ ⎔ write
┃ ⎔ photo
┃ ⎔ trt
┃ ⎔ url
┗❏
┏❏ *Games*
┃ ⎔ riddle
┃ ⎔ rps
┃ ⎔ quizz
┗❏
┏❏ *Group*
┃ ⎔ welcome
┃ ⎔ goodbye
┃ ⎔ antipromote
┃ ⎔ antidemote
┃ ⎔ tagall
┃ ⎔ link
┃ ⎔ promote
┃ ⎔ demote
┃ ⎔ remove
┃ ⎔ del
┃ ⎔ ginfo
┃ ⎔ antilink
┃ ⎔ antibot
┃ ⎔ group
┃ ⎔ gname
┃ ⎔ gdesc
┃ ⎔ gpp
┃ ⎔ hidetag
┃ ⎔ automute
┃ ⎔ autounmute
┃ ⎔ fkick
┃ ⎔ nsfw
┃ ⎔ warn
┗❏
┏❏ *Fun*
┃ ⎔ fancy
┃ ⎔ profile
┃ ⎔ quote
┃ ⎔ rank
┃ ⎔ toprank
┗❏
┏❏ *Research*
┃ ⎔ apk
┗❏
┏❏ *Hentai*
┃ ⎔ hwaifu
┃ ⎔ trap
┃ ⎔ hneko
┃ ⎔ blowjob
┃ ⎔ hentaivid
┗❏
┏❏ *TKM-bot vars*
┃ ⎔ setvar
┃ ⎔ getallvar
┃ ⎔ getvar
┗❏
┏❏ *Download*
┃ ⎔ igdl
┃ ⎔ fbdl
┃ ⎔ tiktok
┃ ⎔ fbdl2
┃ ⎔ ytmp4
┃ ⎔ ytmp3
┗❏
┏❏ *Search*
┃ ⎔ img
┃ ⎔ lyrics
┃ ⎔ stickersearch
┃ ⎔ play
┃ ⎔ video
┃ ⎔ yts
┗❏
┏❏ *Logo*
┃ ⎔ hacker
┃ ⎔ dragonball
┃ ⎔ naruto
┃ ⎔ didong
┃ ⎔ wall
┃ ⎔ summer
┃ ⎔ neonlight
┃ ⎔ greenneon
┃ ⎔ glitch
┃ ⎔ devil
┃ ⎔ explode
┃ ⎔ water
┃ ⎔ snow
┃ ⎔ transformer
┃ ⎔ thunder
┃ ⎔ harrypotter
┃ ⎔ cat
┃ ⎔ whitegold
┃ ⎔ lightglow
┃ ⎔ thor
┃ ⎔ neon
┃ ⎔ purple
┃ ⎔ gold
┃ ⎔ arena
┃ ⎔ incandescent
┗❏
┏❏ *Menu*
┃ ⎔ menu
┃ ⎔ menu3
┗❏
┏❏ *other*
┃ ⎔ encode
┗❏
┏❏ *Reaction*
┃ ⎔ bully
┃ ⎔ cuddle
┃ ⎔ cry
┃ ⎔ hug
┃ ⎔ awoo
┃ ⎔ kiss
┃ ⎔ lick
┃ ⎔ pat
┃ ⎔ smug
┃ ⎔ bonk
┃ ⎔ yeet
┃ ⎔ blush
┃ ⎔ smile
┃ ⎔ wave
┃ ⎔ highfive
┃ ⎔ handhold
┃ ⎔ nom
┃ ⎔ bite
┃ ⎔ glomp
┃ ⎔ slap
┃ ⎔ kill
┃ ⎔ kick
┃ ⎔ happy
┃ ⎔ wink
┃ ⎔ poke
┃ ⎔ dance
┃ ⎔ cringe
┗❏
┏❏ *stickcmd*
┃ ⎔ setcmd
┃ ⎔ delcmd
┃ ⎔ allcmd
┗❏
┏❏ *tts*
┃ ⎔ dit
┃ ⎔ itta
┃ ⎔ say
┗❏
┏❏ *Weeb*
┃ ⎔ waifu
┃ ⎔ neko
┃ ⎔ shinobu
┃ ⎔ megumin
┃ ⎔ cosplay
┃ ⎔ couplepp
┗❏`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
