import data from '../data/data.json'

// fichier de script utile pour le programme tinder


//permet de rassembler tous les match par mois
export const matchPerMonth = number => //number est le mois en chiffre (janvier = 1)
  data
    .filter(d => (d.month == number))
    .map(d => d.matches)
    .reduce((a, b) => a + b, 0)


//permet de rassembler toutes les ouvertures de l'app par mois
export const appOpensPerMonth = number => //number est le mois en chiffre (janvier = 1)
  data
    .filter(d => (d.month == number))
    .map(d => d.app_opens)
    .reduce((a, b) => a + b, 0)


//permet de rassembler tous les profils passés par mois
export const passesPerMonth = number =>  //number est le mois en chiffre (janvier = 1)
  data
    .filter(d => (d.month == number))
    .map(d => d.swipes_passes)
    .reduce((a, b) => a + b, 0)

//permet de rassembler tous les profils likés par mois
export const likesPerMonth = number => //number est le mois en chiffre (janvier = 1)
  data
    .filter(d => (d.month == number))
    .map(d => d.swipes_likes)
    .reduce((a, b) => a + b, 0)

//permet de rassembler tous les profils vus par mois
export const profilesViewedPerMonth = number => 
  data
    .filter(d => (d.month == number))
    .map(d => (d.swipes_likes+ d.swipes_passes))
    .reduce((a, b) => a + b, 0)


//permet de rassembler tous les messages envoyés par mois
export const messagesSentPerMonth = number => //number est le mois en chiffre (janvier = 1)
  data
    .filter(d => (d.month == number))
    .map(d => d.messages_sent)
    .reduce((a, b) => a + b, 0)


//permet de rassembler toutes les messages reçus par mois
export const messagesReceivedPerMonth = number => //number est le mois en chiffre (janvier = 1)
  data
    .filter(d => (d.month == number))
    .map(d => d.messages_received)
    .reduce((a, b) => a + b, 0)


//permet de rassembler le nombre de jours actifs par mois
export const dayActivPerMonth = number => //number est le mois en chiffre (janvier = 1)
  data
    .filter(d => (d.month == number))
    .length