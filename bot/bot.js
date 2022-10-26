import { Telegraf } from 'telegraf';

import config from './config.js';

const bot = new Telegraf(config.token);

bot.catch((err)=>{
  console.log(`Error:  ${err}`);
})


bot.command('search', (ctx)=>{
   console.log(ctx)
})


export default bot;
