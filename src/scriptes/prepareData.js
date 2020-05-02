const data = require('../data/usage1.json')


//tri des infos pertinentes
const infos_pertinentes = data.map(d => ({ year: separationDateYear(d), month: separationDateMonth(d), day: separationDateDay(d), app_opens: d.app_opens, 
  swipes_likes: d.swipes_likes, swipes_passes: d.swipes_passes,
  matches: d.matches, messages_sent: d.messages_sent, messages_received: d.messages_received}));

/*const separationDate = infos.map(d => d.date.split('-'))
.map(data => ({
  year: data[0],
  month: data[1],
  day: data[2],
}));
*/

// séparer la date en 3 variables json différentes et en les transformant en int
function separationDateYear(data) {
  date= data.date.split('-');
  year= date[0];
  return parseInt(year);
}

function separationDateMonth(data) {
  date= data.date.split('-');
  month= date[1];
  return parseInt(month);
}

function separationDateDay(data) {
  date= data.date.split('-');
  day= date[2];
  return parseInt(day);
}

// on trie maintenant les données qu'on va exploiter: on exclue toutes les data datant de 2020
const infos_2018_2019 = infos_pertinentes.filter(i => i.year < 2020)

// On isole toutes les infos de 2018
const infos_2018 = infos_2018_2019.filter(i => i.year == 2018)

// On ne garde que les infos du 01.01.2019 au 31.05.2019
const infos_2019 = infos_2018_2019.filter(i => (i.year == 2019 && i.month <= 05))

// Finalement on fusionne les deux tableaux infos3 et infos2019
Array.prototype.push.apply(infos_2018, infos_2019);


console.log(
    JSON.stringify(infos_2018, null, 2)
  )
