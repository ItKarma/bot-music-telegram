import { Telegraf } from 'telegraf';
import AxiosJson from './lib/Axios.js';
import config from '../config.js';

const bot = new Telegraf(config.token);

bot.catch((err)=>{
  console.log(`Error:  ${err}`);
})


bot.command('search', async (ctx)=>{
  let str = ctx.message.text.slice('7');

  try {
    const res = await AxiosJson(`https://apis-geek.vercel.app/ytsearch?q=${str}`);
    ctx.reply('⌛ Searching...')
    console.log(ctx)
    let message = ` 🎶 title : ${res.data.result[0].title} \n👤 Author : ${res.data.result[0].author.name} \n🔗 url : ${res.data.result[0].url}`
     ctx.reply( message )

  } catch (error) {
    console.log(error)
  }
})


export default bot;
