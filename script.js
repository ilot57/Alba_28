const loveMessages = [
  {
    message: "You are my best friend, and I always want to talk to you when something happens in my life (bad or good). You are the person who knows me the most. I trust you with everything.",
    comment: "Te souviens-tu de la fois où nous sommes restés éveillés toute la nuit à discuter ? C'était l'un de mes moments préférés.",
    imagePath: "image/day1.jpg"
  },
  {
    message: "You are so intelligent and cultured. You are such an interesting person, and I am never bored when I talk to you. I love our discussions about life, society, and politics.",
    comment: "Te souviens-tu de la fois où nous sommes restés éveillés toute la nuit à discuter ? C'était l'un de mes moments préférés.",
    imagePath: "images/day2.jpg"
  },
  {
    message: "You are such a nice person. Your heart is so pure, and you would do anything to help the people you love. I admire you for that.",
    comment: "Te souviens-tu de la fois où nous sommes restés éveillés toute la nuit à discuter ? C'était l'un de mes moments préférés.",
    imagePath: "images/day3.jpg"
  },
  {
    message: "We share the same values, but at the same time, we have different opinions. I love that we see things almost the same way, but we still disagree on things. It makes you so much more interesting, and I learn from you every day, making me a better person.",
    comment: "Te souviens-tu de la fois où nous sommes restés éveillés toute la nuit à discuter ? C'était l'un de mes moments préférés.",
    imagePath: "images/day4.jpg"
  },
  {
    message: "You are so funny. You are the person I laughed the most with these past 5 years. I love how we have the same humor and that you accept my weirdness. Do you remember when I was chasing you, making a nerd voice in Glasgow, and we got stuck outside my flat? Hahahaha.",
    comment: "Te souviens-tu de la fois où nous sommes restés éveillés toute la nuit à discuter ? C'était l'un de mes moments préférés.",
    imagePath: "images/day5.jpg"
  },
  {
    message: "You are so good at making gifts, and you know how to make people feel so special (which I am not). I just found the 'Yacine's manual' you made me for our first birthday together! I laughed so much reading it again, and it made me want to cuddle you so much.",
    comment: "Te souviens-tu de la fois où nous sommes restés éveillés toute la nuit à discuter ? C'était l'un de mes moments préférés.",
    imagePath: "images/day6.jpg"
  },
  {
    message: "You are the most beautiful creature. I love everything from your hair to your toes. I feel so attracted to you and find you even more beautiful every day I spend with you. I am the luckiest man.",
    comment: "Te souviens-tu de la fois où nous sommes restés éveillés toute la nuit à discuter ? C'était l'un de mes moments préférés.",
    imagePath: "images/day7.jpg"
  },
  {
    message: "You are a family person, and I love your family. I admire you for being so close and attentive to your family, and I hope I can be part of it one day.",
    comment: "Te souviens-tu de la fois où nous sommes restés éveillés toute la nuit à discuter ? C'était l'un de mes moments préférés.",
    imagePath: "images/day8.jpg"
  },
  {
    message: "You almost made me like cats. You might be the only person on earth able to make me like cats. You have this power over me. I feel that you can change me, and I like that :)",
    comment: "Te souviens-tu de la fois où nous sommes restés éveillés toute la nuit à discuter ? C'était l'un de mes moments préférés.",
    imagePath: "images/day9.jpg"
  },
  {
    message: "I love your sensitivity even if you struggle with it sometimes. It makes you who you are, and even though it can be overwhelming sometimes, I think it makes you a better and stronger person.",
    comment: "Te souviens-tu de la fois où nous sommes restés éveillés toute la nuit à discuter ? C'était l'un de mes moments préférés.",
    imagePath: "images/day10.jpg"
  },
  {
    message: "Your voice is amazing. I always get emotional hearing you sing with your sister at Burns Night. Some of the most relaxing nights I've had were when you used to sing me to sleep in Glasgow. It made me fall for you even more.",
    comment: "Te souviens-tu de la fois où nous sommes restés éveillés toute la nuit à discuter ? C'était l'un de mes moments préférés.",
    imagePath: "images/day11.jpg"
  },
  {
    message: "I love your passion for the mountains and nature. I love that you can share that with me and teach me so many things about it. Spending time with you in nature is one of my favorite activities. I hope we can do that more in the future.",
    comment: "Te souviens-tu de la fois où nous sommes restés éveillés toute la nuit à discuter ? C'était l'un de mes moments préférés.",
    imagePath: "images/day12.jpg"
  },
  {
    message: "I love that you are sociable and so likable. I am always so proud of presenting you to my friends and family. They all love you so much that it makes me love you even more.",
    comment: "Te souviens-tu de la fois où nous sommes restés éveillés toute la nuit à discuter ? C'était l'un de mes moments préférés.",
    imagePath: "images/day13.jpg"
  },
  {
    message: "I love traveling with you. The last trips we had together were some of the best memories I have. You are so easygoing, and we understand each other so much that it flows so naturally. We have so much fun together.",
    comment: "Te souviens-tu de la fois où nous sommes restés éveillés toute la nuit à discuter ? C'était l'un de mes moments préférés.",
    imagePath: "images/day14.jpg"
  },
  {
    message: "I am so happy you finally found a job that suits you and that they respect you as a human being. You deserve it so much! I would love to have you in my company.",
    comment: "Te souviens-tu de la fois où nous sommes restés éveillés toute la nuit à discuter ? C'était l'un de mes moments préférés.",
    imagePath: "images/day15.jpg"
  }
];

const daysInLove = 16;
const loveMessageElement = document.getElementById("loveMessage");
const daysLeftElement = document.getElementById("daysLeft");
const loveLetterElement = document.getElementById("loveLetter");

function showLoveMessage() {
  const currentDate = new Date();
const targetDate = new Date(currentDate.getFullYear(), 6, 10); // 7 représente le mois d'août (0-indexed)
  const timeDiff = targetDate.getTime() - currentDate.getTime();
  const daysUntilAugust15 = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
  if (daysUntilAugust15 <= 0) {
    const daysDiff = Math.abs(daysUntilAugust15);
    if (daysDiff >= daysInLove) {
      // Afficher la lettre d'amour et masquer le message aléatoire
      loveMessageElement.textContent = "That's it baby ! I hope you liked it and had a beautiful summer :). Here is a last message for you";
      daysLeftElement.style.display = "none";
      loveLetterElement.style.display = "block";

      // Cacher les titres "What I Love About You" et "Memory of the Day" dans la lettre d'amour de fin
      const loveMessageTitle = document.querySelector(".message h2");
      const memoryTitle = document.querySelector("#imageContainer h2");
      loveMessageTitle.style.display = "none";
      memoryTitle.style.display = "none";

    } else {
      displayLoveMessage(daysDiff);
    }
  } else {
    loveMessageElement.textContent = "Le compte à rebours commence le 16 août !";
    daysLeftElement.textContent = `Jours restants: ${daysUntilAugust15}`;
  }

  
}

function displayLoveMessage(day) {
  const messageIndex = day - 1;
  const message = loveMessages[messageIndex];
  loveMessageElement.textContent = message.message; // Utilisez message.message au lieu de message
  daysLeftElement.textContent = `Jours restants: ${daysInLove - day + 1}`;

  // Charger et afficher l'image
  const imageElement = document.createElement("img");
  imageElement.src = message.imagePath; // Utilisez message.imagePath au lieu de imagePath
  imageElement.alt = `Day ${day} Image`;
  imageElement.className = "loveImage";

  // Charger et afficher le commentaire
  const commentElement = document.createElement("p");
  commentElement.textContent = message.comment;
  commentElement.className = "imageComment";


  // Supprimer l'ancienne image et commentaire s'il y en a une
  const existingImage = document.querySelector(".loveImage");
  const existingComment = document.querySelector(".imageComment");
  if (existingImage) {
    loveLetterElement.removeChild(existingImage);
  }
  if (existingComment) {
    loveLetterElement.removeChild(existingComment);
  }

  const imageContainer = document.getElementById("imageContainer");
  imageContainer.appendChild(imageElement);
  imageContainer.appendChild(commentElement);
}

function displayLoveMessage(day) {
  const messageIndex = day - 1;
  const message = loveMessages[messageIndex];
  loveMessageElement.textContent = message;
  daysLeftElement.textContent = `Jours restants: ${daysInLove - day + 1}`;
}

showLoveMessage();
