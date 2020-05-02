//import * as d3 from 'd3'
import bb from 'billboard.js'
import {
  matchPerMonth,
  appOpensPerMonth,
  passesPerMonth,
  likesPerMonth,
  profilesViewedPerMonth,
  messagesSentPerMonth,
  messagesReceivedPerMonth,
  dayActivPerMonth,
} from '/scriptes/script.js'

var mois = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4];
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////Statistiques gloabales sur une année/////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Swipes droite/gauche////////////////////////////
var pieChart_swipes = bb.generate({
  data: {
    columns: [
      //["Swipes à gauche", passesPerMonth(1)],
      ["Swipes à gauche", mois.map(passesPerMonth).reduce((resTemp, nouveauNombre) => resTemp + nouveauNombre, 0)],
    ],
    type: "pie",
    colors: {
      "Swipes à gauche": "#ff8d42",
    },
    onover: function (d, i) {
      console.log("onover", d, i);
    },
  },
  bindto: "#pieChartSwipes"
});

setTimeout(function () {
  pieChart_swipes.load({
    columns: [
      ["Swipes à droite",mois.map(likesPerMonth).reduce((resTemp, nouveauNombre) => resTemp + nouveauNombre, 0)]
    ],
    colors: {
      "Swipes à droite": "#ff3266",

    },
  });
}, 1500);
////////////////////////////chiffres////////////////////////////
var duree = 1; // Durée en seconde du compteur
//App open
var cptAppOpen = 3000; // Initialisation du compteur
var appOpensTotal= mois.map(appOpensPerMonth).reduce((resTemp, nouveauNombre) => resTemp + nouveauNombre, 0); // Nombre final app opens
var deltaAppOpen = Math.ceil( duree * 1000 / appOpensTotal); // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)
var nodeAppOpen =  document.getElementById("compteurAppOpen"); // On récupère notre noeud où sera rafraîchi la valeur du compteur
function countAppOpens() {
  nodeAppOpen.innerHTML = ++cptAppOpen;
  if( cptAppOpen < appOpensTotal ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
     setTimeout(countAppOpens, deltaAppOpen);
  }
}
setTimeout(countAppOpens, deltaAppOpen);
//Matches
var cptMatches = 1000; // Initialisation du compteur
var matchesTotal= mois.map(matchPerMonth).reduce((resTemp, nouveauNombre) => resTemp + nouveauNombre, 0); 
var deltaMatches = Math.ceil( duree * 1000 / matchesTotal); 
var nodeMatches =  document.getElementById("compteurMatches"); 
function countMatches() {
  nodeMatches.innerHTML = ++cptMatches;
  if( cptMatches < matchesTotal ) { 
     setTimeout(countMatches, deltaMatches);
  }
}
setTimeout(countMatches, deltaMatches);
//Messages sent
var cptMessageSent = 3500; // Initialisation du compteur
var messageSentTotal= mois.map(messagesSentPerMonth).reduce((resTemp, nouveauNombre) => resTemp + nouveauNombre, 0); 
var deltaMessageSent = Math.ceil( duree * 1000 / messageSentTotal); 
var nodeMessageSent =  document.getElementById("compteurMessagesSent");
function countMessageSent() {
  nodeMessageSent.innerHTML = ++cptMessageSent;
  if( cptMessageSent < messageSentTotal) { 
     setTimeout(countMessageSent, deltaMessageSent);
  }
}
setTimeout(countMessageSent, deltaMessageSent);
//Messages received
var cptMessageReceived = 4500; // Initialisation du compteur
var messageReceivedTotal= mois.map(messagesReceivedPerMonth).reduce((resTemp, nouveauNombre) => resTemp + nouveauNombre, 0); 
var deltaMessageReceived = Math.ceil( duree * 1000 / messageReceivedTotal); 
var nodeMessageReceived =  document.getElementById("compteurMessagesReceived"); 
function countMessageReceived() {
  nodeMessageReceived.innerHTML = ++cptMessageReceived;
  if( cptMessageReceived < messageReceivedTotal) { 
     setTimeout(countMessageReceived, deltaMessageReceived);
  }
}
setTimeout(countMessageReceived, deltaMessageReceived);

//////////////////////////////Matchs par swipes droites////////////////////////////
var pieChart_matches = bb.generate({
  data: {
    columns: [
      ["Swipes à droite", mois.map(likesPerMonth).reduce((resTemp, nouveauNombre) => resTemp + nouveauNombre, 0)],
    ],
    type: "pie",
    colors: {
      "Swipes à droite": "#ff8d42",
    },
    onover: function (d, i) {
      console.log("onover", d, i);
    },
  },
  bindto: "#pieChartMatches"
});

setTimeout(function () {
  pieChart_matches.load({
    columns: [
      ["Matches", mois.map(matchPerMonth).reduce((resTemp, nouveauNombre) => resTemp + nouveauNombre, 0)]
    ],
    colors: {
      "Matches": "#ff3266",
    },
  });
}, 1500);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////Statistiques D’UTILISATION GLOBALE PAR MOIS/////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BAR CHART – data générales sur une année



// var cumulData = []
// var i;
// for (i = 1; i <= 12; i++) {
//   cumulData.push(appOpensPerMonth(i) + profilesViewedPerMonth(i) + messagesSentPerMonth(i));
// }
// columns: [
//   ["UtilisationGlobale", cumulData[5], cumulData[6], cumulData[7], cumulData[8], cumulData[9], cumulData[10], cumulData[11], cumulData[0], cumulData[1], cumulData[2], cumulData[3], cumulData[4]]
// ],




var yearChart = bb.generate({
  data: {
    columns: [
      ["Ouverture de l'app", ...mois.map(appOpensPerMonth)],
      ["Profiles vus", ...mois.map(profilesViewedPerMonth)],
      ["Messages envoyés", ...mois.map(messagesSentPerMonth)],
    ],
    groups: [
      [
        "Ouverture de l'app",
        "Profiles vus",
        "Messages envoyés"
      ]
    ],
    type: "bar",
    colors: {
      "Ouverture de l'app": "#ffba42",
      "Profiles vus": "ff8d42",
      "Messages envoyés": "#ff5842"
    }
  },
  bar: {
    padding: 0,
    width: {
      ratio: 0.5,
      max: 30
    },
  },
  color: {
    onover: function (d) {
      return ["#ff3266"];
    }
  },
  axis: {
    x: {
      type: "category",
      categories: [
        "Mai 2018",
        "Juin 2018",
        "Juil. 2018",
        "Août 2018",
        "Sept. 2018",
        "Oct. 2018",
        "Nov. 2018",
        "Déc. 2018",
        "Jan. 2019",
        "Fév. 2019",
        "Mars 2019",
        "Avril 2019"
      ]
    }
  },
  bindto: "#yearChart"
});

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////Detail d'un mois ////////////////////////////
////////////////////////////////////////////////////////////////////////////////////