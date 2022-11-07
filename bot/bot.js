import { Telegraf , Input} from 'telegraf';
import AxiosJson from './lib/Axios.js';
//import config from '../config.js';
//import { fromURL } from 'telegraf/typings/input.js';

const bot = new Telegraf('5738049174:AAECRX8-_qdd91o-yicukVpQV-LLCmO_uMg');

bot.catch((err)=>{
  console.log(`Error:  ${err}`);
})


bot.command('search', async (ctx)=>{
  let str = ctx.message.text.slice('7');

  try {
    const res = await AxiosJson(`https://apis-geek.vercel.app/ytsearch?q=${str}`);
    await ctx.reply('⌛ Searching your music ...')
    let message = ` 🎶 title : ${res.data.result[0].title} \n👤 Author : ${res.data.result[0].author.name} \n🔗 url : ${res.data.result[0].url}`
     await ctx.reply( message )

  } catch (error) {
    console.log(error)
  }
})

bot.command('mp3', async (ctx)=>{
  let str = ctx.message.text.slice('7');
  try {
    const res = await AxiosJson(`https://apis-geek.vercel.app/downmp3?q=${str}`)
    await ctx.reply('⌛ Searching your music ...')
    let message = `found music 
    🎶 title : ${res.data.title}`
    await ctx.reply( message )

    await ctx.reply('Sending your audio...')

    console.log(res.data.result)
   await ctx.sendAudio(Input.fromURL(res.data.result));

  } catch (error) {
    console.log(error)
  }
})


export default bot;
