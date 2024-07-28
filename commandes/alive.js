const {zokou} = require("../framework/zokou");
const {getMessagesAndXPByJID,getBottom10Users} = require("../bdd/level");


function get_level_exp(xp) {
    const levelThresholds = [
        { level: 1, xpThreshold: 500 },
        { level: 2, xpThreshold: 1000 },
        { level: 3, xpThreshold: 2000 },
        { level: 4, xpThreshold: 4000 },
        { level: 5, xpThreshold: 7000 },
        { level: 6, xpThreshold: 10000 },
        { level: 7, xpThreshold: 15000 },
        { level: 8, xpThreshold: 20000},
        { level: 9, xpThreshold: 25000},
        { level: 10, xpThreshold: 30000},
        { level: 11, xpThreshold: 35000},
        { level: 12, xpThreshold: 45000},
        { level: 13, xpThreshold: 55000},
        { level: 14, xpThreshold: 65000},
        { level: 15, xpThreshold: 75000},
        { level: 16, xpThreshold: 90000},
        { level: 17, xpThreshold: 105000},
        { level: 18, xpThreshold: 120000},
        { level: 19, xpThreshold: 135000},
        { level: 20, xpThreshold: 150000},
        { level: 21, xpThreshold: 170000},
        { level: 22, xpThreshold: 190000},
        { level: 23, xpThreshold: 210000},
        { level: 24, xpThreshold: 230000},
        { level: 25, xpThreshold: 255000},
        { level: 26, xpThreshold: 270000},
        { level: 27, xpThreshold: 295000},
        { level: 28, xpThreshold: 320000},
        { level: 29, xpThreshold: 345000},
        { level: 30, xpThreshold: 385000},
        { level: 31, xpThreshold: 425000},
        { level: 32, xpThreshold: 465000},
        { level: 33, xpThreshold: 505000},
        { level: 34, xpThreshold: 545000},
        { level: 35, xpThreshold: 590000},
        { level: 36, xpThreshold: 635000},
        { level: 37, xpThreshold: 680000},
        { level: 38, xpThreshold: 725000},
        { level: 39, xpThreshold: 770000},
        { level: 40, xpThreshold: 820000},
        { level: 41, xpThreshold: 870000},
        { level: 42, xpThreshold: 920000},
        { level: 43, xpThreshold: 970000},
        { level: 44, xpThreshold: 1020000},
        { level: 45, xpThreshold: 1075000},
        { level: 46, xpThreshold: 1130000},
        { level: 47, xpThreshold: 1185000},
        { level: 48, xpThreshold: 1240000},
        { level: 49, xpThreshold: 1295000},
        { level: 'Zk-GOD', xpThreshold: 2000000}
    ];

    let level = 0;
    let exp = xp;
    let xplimit = levelThresholds[level].xpThreshold;

    for (let i = 0; i < levelThresholds.length; i++) {
        if (xp >= levelThresholds[i].xpThreshold) {
            level = levelThresholds[i].level;
            xplimit = levelThresholds[i + 1]?.xpThreshold || 'No-limit';
            exp = xp - levelThresholds[i].xpThreshold;
        } else {
            break;
        }
    }

    return {
        level: level,
        xplimit: xplimit,
        exp: exp
    };
}

module.exports = {
   get_level_exp,
} ;

zokou( {
  nomCom : "alive ",
 categorie : "Fun",
   }, 
   async(dest,zk, commandeOptions)=> {
  
    const {ms , repondre,auteurMessage,nomAuteurMessage, msgRepondu , auteurMsgRepondu , mybotpic} = commandeOptions ;

  if (msgRepondu) {
      
       try {
          
        let alive  = await getMessagesAndXPByJID(auteurMsgRepondu) ;

        const data = await get_level_exp(alive .xp)
         let ppuser ;
    
         
         try {
              ppuser = await zk.profilePictureUrl(auteurMsgRepondu , 'image') ;
         } catch {
            ppuser = mybotpic()
         } ;
    
    
         let role ;
    
         if (data.level < 5) {
            role = 'baby'
         } else if (data.level >= 5 && data.level < 10) {
            role = 'kid-Ninja'
         } else if ( data.level >= 10 && data.level < 15 ) {
            role = 'Ninja-genin'
         } else if ( data.level >= 15 && data.level < 20 ) {
            role = 'Ninja-chunin'
         } else if ( data.level >= 20 && data.level < 25 ) {
            role = 'Ninja-jonin'
         } else if ( data.level >= 25 && data.level < 30 ) {
            role = 'ANBU'
         } else if ( data.level >= 30 && data.level < 35 ) {
            role = 'strong ninja'
         } else if ( data.level >= 35 && data.level < 40 ) {
            role = 'kage'
         } else if ( data.level >= 40 && data.level < 45 ) {
            role = 'Hermit seinin'
         } else if ( data.level >= 45 && data.level < 50 ) {
            role = 'Otsusuki'
         } else {
            role = 'GOD'
         }
    
    
         let msg = `
┏━━⬡┃RUSH┃⬡alive ⬡━━┓
   *RUSH MD*

┏❏ *Ai*
┃ ⎔ dalle
┃ ⎔ gpt
┃ ⎔ gpt4
┃ ⎔ text2prompt
┗❏
┏❏ *General*
┃ ⎔ mods
┃ ⎔ dev
┃ ⎔ support
┃ ⎔ awake
┃ ⎔ menu2
┃ ⎔ ping
┃ ⎔ info
┃ ⎔ runtime
┃ ⎔ repo
┃ ⎔ test
┃ ⎔ testb
┃ ⎔ RUSHinc
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
┏❏ *RUSH-bot vars*
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
┗❏



︎
    
   ┕━━⬡⬡ ⬡⬡━━┙`
    
     zk.sendMessage( 
        dest,
        {
            image : {url : ppuser},
            caption : msg,
            mentions : [auteurMsgRepondu]
        },
        {quoted : ms}
      )


       } catch (error) {
         repondre(error)
       }
  }   else {


      try {
        
        let jid = auteurMessage ;
          
        let rang = await getMessagesAndXPByJID(jid) ;

        const data =  get_level_exp(rang.xp)
         let ppuser ;
    
         
         try {
              ppuser = await zk.profilePictureUrl(jid, 'image') ;
         } catch {
            ppuser = mybotpic()
         } ;
    
    
         let role ;
    
         if (data.level < 5) {
            role = 'Nouveau né(e)'
         } else if (data.level >= 5 && data.level < 10) {
            role = 'kid-Ninja'
         } else if ( data.level >= 10 && data.level < 15 ) {
            role = 'Ninja-genin'
         } else if ( data.level >= 15 && data.level < 20 ) {
            role = 'Ninja-chunin'
         } else if ( data.level >= 20 && data.level < 25 ) {
            role = 'Ninja-jonin'
         } else if ( data.level >= 25 && data.level < 30 ) {
            role = 'ANBU'
         } else if ( data.level >= 30 && data.level < 35 ) {
            role = 'strong ninja'
         } else if ( data.level >= 35 && data.level < 40 ) {
            role = 'kage'
         } else if ( data.level >= 40 && data.level < 45 ) {
            role = 'Hermit seinin'
         } else if ( data.level >= 45 && data.level < 50 ) {
            role = 'Otsusuki'
         } else {
            role = 'level-GOD'
         }
    
    
         let msg = `
┏━━⬡┃RUSH bot┃⬡alive ⬡━━┓
     
  *RUSH MD*

┏❏ *Ai*
┃ ⎔ dalle
┃ ⎔ gpt
┃ ⎔ gpt4
┃ ⎔ text2prompt
┗❏
┏❏ *General*
┃ ⎔ mods
┃ ⎔ dev
┃ ⎔ support
┃ ⎔ awake
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
┗❏



︎

   ┕━━⬡⬡ ⬡⬡━━┙`
    
     zk.sendMessage( 
        dest,
        {
            image : {url : ppuser},
            caption : msg
        },
        {quoted : ms}
      )

      } catch (error) {
         repondre(error)
      }

    } 


}) ;

zokou( {
  nomCom : "topalive ",
 categorie : "Fun",
   }, 
   async(dest,zk, commandeOptions)=> {
  
    const {ms , mybotpic} = commandeOptions ;


       let msg = `┏━⬡┃RUSH bot┃⬡Top-alive ━┓\n\n`
       
      let topalive s = await getBottom10Users() ;
        let mention = [] ;
        for (const alive  of topalive s ) {

             const data = await get_level_exp(alive .xp) ;

             let role ;
    
         if (data.level < 5) {
            role = 'Nouveau né(e)'
         } else if (data.level >= 5 && data.level < 10) {
            role = 'kid ninja'
         } else if ( data.level >= 10 && data.level < 15 ) {
            role = 'Ninja-genin'
         } else if ( data.level >= 15 && data.level < 20 ) {
            role = 'Ninja-chunin'
         } else if ( data.level >= 20 && data.level < 25 ) {
            role = 'Ninja-jonin'
         } else if ( data.level >= 25 && data.level < 30 ) {
            role = 'ANBU'
         } else if ( data.level >= 30 && data.level < 35 ) {
            role = 'strong ninja'
         } else if ( data.level >= 35 && data.level < 40 ) {
            role = 'kage'
         } else if ( data.level >= 40 && data.level < 45 ) {
            role = 'Hermit seinin'
         } else if ( data.level >= 45 && data.level < 50 ) {
            role = 'Otsusuki'
         } else {
            role = 'level-GOD'
         }
            msg += `-----------------------
            
 *Name :* @${alive .jid.split("@")[0]}
*Level :* ${data.level}
*Role :* ${role}\n` ;

        mention.push(alive .jid) ;
        }

       zk.sendMessage(dest,
                      {
                        image : { url : mybotpic() },
                        caption : msg,
                        mentions : mention
                      },
                      {quoted : ms})
       

   })


   
    
