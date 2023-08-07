const loveMessages = [
  "Tu as un sourire magnifique.",
  "Ton rire est contagieux.",
  "Ta gentillesse me touche profondément.",
  "Je suis chanceux(se) de t'avoir dans ma vie.",
  // Ajoutez ici d'autres messages pour les autres jours
];

let daysLeft = 15;
const loveMessageElement = document.getElementById("loveMessage");
const daysLeftElement = document.getElementById("daysLeft");

function showLoveMessage() {
  const randomIndex = Math.floor(Math.random() * loveMessages.length);
  const message = loveMessages[randomIndex];
  loveMessageElement.textContent = message;
  daysLeftElement.textContent = `Jours restants: ${daysLeft}`;
  daysLeft--;

  if (daysLeft === 0) {
    loveMessageElement.textContent = "C'est fini ! J'espère que tu as aimé les messages !";
  }
}

showLoveMessage();
