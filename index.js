const Discord = require('discord.js');
const bot = new Discord.Client();

const token = "NjU4ODUxMzI0MzYzODAwNjI2.Xg4doQ.rNyivYUl0k7GbZSJ-hHMPvMWwOw";

bot.on('ready' , () =>{
    console.log('This bot is online!');
})

bot.on("message" , msg=>{
    if(msg.content === "+help"){
        msg.reply('We are currently working on this bot')
    }
})

bot.login(token);