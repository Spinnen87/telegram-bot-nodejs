const TelegramBot = require('node-telegram-bot-api');
const { TOKEN } = require('./config');
const utils = require('./utils');
const bot = new TelegramBot(TOKEN, {polling: true});

console.log('Bot has been started ... ');


bot.onText(/\/start/, msg => {
    const text = `Здравствуйте, ${msg.from.first_name}!`;
    bot.sendMessage(utils.getChatId(msg), text);
  });

bot.on('message', (msg, match) => {
    console.log(msg);
    console.log('match', match);
  
    bot.sendMessage(utils.getChatId(msg), 'on message event');
  });