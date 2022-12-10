import CurrencyRate from '../models/CurrencyRates.model'
import axios from 'axios';
import sequelize from '../database/config'
const CronJob = require('cron').CronJob;

var job = new CronJob(
  '0 0 7 * * *',
  async function() {
    const transaction = await sequelize.transaction();
    try {
      const {data} = await axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json');
      const usdRate = data['usd'] || {}
      const keys = Object.keys(usdRate);
      await Promise.all(keys.map(async key =>{
          await CurrencyRate.upsert({
            location: key,
            rate: usdRate[key].toString(),
          },{transaction, fields: ['rate']})
      }))
      await transaction.commit()
    }catch (e){
      await transaction.rollback()
    }
  },
  null,
  true,
  'Asia/Saigon'
);

export default function currencyJob(){
  job.start();
}


