const loveMessages = [
  {
  message: "You are my best friend, and I always want to talk to you when something happens in my life (bad or good). You are the person who knows me the most. I trust you with everything.",
  comment: "24/04/2018 - A Thistle's Story: This is the first photo I have from you on my phone. Don't ask me why, I might have lost some. I think this is when I was on a trip to London with Minh, and we used to call each other every night. We didn't know at the time that we would have many more calls in the next 5 years. PS: You look so cute in that photo.",
  imagePath: "images/day1.png"
  },
  {
  message: "You are so intelligent and cultured. You are such an interesting person, and I am never bored when I talk to you. I love our discussions about life, society, and politics.",
  comment: "17/06/2018 - Meeting Your Best Friend: Almost everyone had already left Glasgow, but I stayed and had the chance to meet your best friend. I was so happy to meet her and get to know you a bit better. You can tell a lot from people's friends, and it just confirmed what I already knew at that time – that you are an amazing and kind person.",
  imagePath: "images/day2.jpg"
  },
  {
  message: "You are such a nice person. Your heart is so pure, and you would do anything to help the people you love. I admire you for that.",
  comment: "29/07/2018 - En Aragón Dinantes Estioron Leis, Que Reis: Going there for the first time, and we already had flight issues as my flight was delayed by 4 hours. But despite that, I was so happy (and a bit stressed, I'm not gonna lie) to meet your family and see where you grew up. It was also the first time we were away for so long, and I had missed you so much. We had a wonderful week, like always when I go there, and I loved your family from the beginning.",
  imagePath: "images/day3.jpg"
  },
  {
  message: "We share the same values, but at the same time, we have different opinions. I love that we see things almost the same way, but we still disagree on things. It makes you so much more interesting, and I learn from you every day, making me a better person.",
  comment: "01/09/2018 - From Zgz to Stras: You visited my region for the first time. We went to Strasbourg and had a lovely romantic week there. It's crazy to think that 5 years later, I would still be deeply in love with you and so happy.",
  imagePath: "images/day4.jpg"
  },
  {
  message: "You are so funny. You are the person I laughed the most with these past 5 years. I love how we have the same humor and that you accept my weirdness. Do you remember when I was chasing you, making a nerd voice in Glasgow, and we got stuck outside my flat? Hahahaha.",
  comment: "23/03/2019 - A Step Closer: Unfortunately, I couldn't find an internship in Spain and had to go to Toulouse as a backup plan to get closer to you (lol, if only I knew it was the worst city when it comes to public transportation). I still have good memories of that period, mostly because even though we were still far away from each other, we were able to see each other more often and without planning it 3 months in advance. Also, I had the coolest flat I have ever lived in.",
  imagePath: "images/day5.jpg"
  },
  {
  message: "You are so good at making gifts, and you know how to make people feel so special (which I am not). I just found the 'Yacine's manual' you made me for our first birthday together! I laughed so much reading it again, and it made me want to cuddle you so much.",
  comment: "17/08/2019 - Ich bin ein Berliner: Our first trip together in Berlin for your 24th birthday. As you remember, it didn't start as planned because you missed one flight and got overbooked on another... So you had to spend the night alone in an airport hotel for your birthday... But once you got there, we had such a wonderful weekend in the frenetic Berlin. I had booked a 5-star hostel thanks to Airbus' CE, and that was pretty cool, haha.",
  imagePath: "images/day6.jpg"
  },
  {
  message: "You are the most beautiful creature. I love everything from your hair to your toes. I feel so attracted to you and find you even more beautiful every day I spend with you. I am the luckiest man.",
  comment: "27/06/2020 - Barna aka Barça: The beginning of a long love story with my second lover... the beautiful city of Barcelona. This photo is from when you visited me for the first time after COVID, and we had to fake some documentation to say you were living with me. Me moving to this city is a big milestone in our relationship. After 2 years of being together, we were finally able to see each other often. I remember feeling so happy to be able to take the AVE and be in Zaragoza in 1h23... Now that I was living in Spain, I had so many things to discover with you about your culture, the language, the nature, etc. Remember, at that time, I didn't speak a word of Spanish and still had doubts about the fact that there were cold places in Spain. You helped me and taught me so many things without judging my ignorance, and I thank you and your family for that. Living here made me realize how much I love Spain and its culture, and I hope one day we can go back to live there together.",
  imagePath: "images/day7.jpg"
  },
  {
  message: "You are a family person, and I love your family. I admire you for being so close and attentive to your family, and I hope I can be part of it one day.",
  comment: "21/08/2020 - Is It a Bear?: I have such good memories of that unconventional trip. You know I love Eastern Europe, and I was happy to go to Romania with you. From the beautiful Transylvania and the Dracula stories to the Soviet city of Bucharest, we had fun all the way through. But please, when dogs attack you, don't walk away like it's normal.",
  imagePath: "images/day8.jpg"
  },
  {
  message: "You almost made me like cats. You might be the only person on earth able to make me like cats. You have this power over me. I feel that you can change me, and I like that :)",
  comment: "07/03/2021 - Day Trip in Aragon: Just one of the many trips we had in Aragon. I don't think you realize how much I love those. From AlbaracAIN to Alquezar and the Aurin, your region is beautiful and full of diversity. I am so grateful that you and your family take the time to show me around and share your knowledge. You've passed your love of Aragon on to me.",
  imagePath: "images/day9.jpg"
  },
  {
  message: "I love your sensitivity even if you struggle with it sometimes. It makes you who you are, and even though it can be overwhelming sometimes, I think it makes you a better and stronger person.",
  comment: "16/07/2021 - Hiii Haaa! Yo Soy Mexicano!: Coming out of the pandemic, I had to convince you to go to Mexico that summer, and I don't regret it at all. This is our first 'big' trip together outside of Europe, and my head is still filled with wonderful images from this part of the world. I loved everything: the food, the culture, the landscapes, the cenotes, the history, and the Maya temples. But I think what made this even more special was sharing the experience with you. We had so much fun fooling around in our tiny car, driving on the dangerous roads of Yucatan (be careful of the bumps!!!!), having endless conversations, and basically creating wonderful memories together.",
  imagePath: "images/day10.jpeg"
  },
  {
  message: "Your voice is amazing. I always get emotional hearing you sing with your sister at Burns Night. Some of the most relaxing nights I've had were when you used to sing me to sleep in Glasgow. It made me fall for you even more.",
  comment: "31/10/2021 - The Arab and the Witch: You're not kidding when it comes to costumes. This is one of the many nights out we've had together. I love going out with you and friends because it just feels so natural, and I always have a good time. PS: Omg, you look like a goddess in that costume!",
  imagePath: "images/day11.jpg"
  },
  {
  message: "I love your passion for the mountains and nature. I love that you can share that with me and teach me so many things about it. Spending time with you in nature is one of my favorite activities. I hope we can do that more in the future.",
  comment: "07/04/2022 - Carla Is the Real Witch: You're not only loved by all my friends, but also my family. Seeing these photos of the two most important people in my life makes me realize how lucky I am. During that trip to Lanzarote, you also had the chance to get to know my friends from Uni better. And let's be honest, Carla is a b****, and everyone knows that.",
  imagePath: "images/day12.jpg"
  },
  {
  message: "I love that you are sociable and so likable. I am always so proud of presenting you to my friends and family. They all love you so much that it makes me love you even more.",
  comment: "10/08/2022 - Bun Bo Huè: One of my best memories. This trip was just perfect, and I feel like Sarah and Minh are so compatible with us as a couple. From the weirdest hotel lost in the middle of the Vietnamese countryside (and your terrible night, hahahaha) to the 5-star hotel on a private island, and finally to Minh's amazing, kind, and generous family, this trip will always have a special place in my heart.",
  imagePath: "images/day13.jpeg"
  },
  {
  message: "I love traveling with you. The last trips we had together were some of the best memories I have. You are so easygoing, and we understand each other so much that it flows so naturally. We have so much fun together.",
  comment: "09/04/2023 - Our Friends: A rare photo of all our friends from Barcelona. They all love you so much, and they're so happy for us. I'll miss them, and I'm sure you will too, but we'll find a way to see them from time to time.",
  imagePath: "images/day14.jpeg"
  },
  {
  message: "I am so happy you finally found a job that suits you and that they respect you as a human being. You deserve it so much! I would love to have you in my company.",
  comment: "2024? - To the Next Destination: I didn't find a photo of us in Lyon, but I like this one. Just to say, I think we are ready to take our relationship to the next level. After all the memories we have together living apart from each other, I want to create new ones living by your side. I cannot wait to start our new life together in Lyon. I love you. PS: Check the website tomorrow, you never know ;)",
  imagePath: "images/day15.jpg"
  }
  ];

const daysInLove = 16;
const loveMessageElement = document.getElementById("loveMessage");
const daysLeftElement = document.getElementById("daysLeft");
const loveLetterElement = document.getElementById("loveLetter");
const currentDate = new Date();
const targetDate = new Date(currentDate.getFullYear(), 7, 12); // 7 représente le mois d'août (0-indexed)
const timeDiff = targetDate.getTime() - currentDate.getTime();
const daysUntilAugust15 = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

const firstDayButton = document.getElementById("firstDayBtn");
const BackToLoveLetter = document.getElementById("LoveLetterButton");

firstDayButton.addEventListener("click", () => {
  currentDay = 1;
  displayLoveMessage(currentDay)
  BackToLoveLetter.style.display = "inline-block";
  const loveMessageTitle = document.querySelector(".message h2");
  const memoryTitle = document.querySelector("#imageContainer h2");
  loveMessageTitle.style.display = "block";
  memoryTitle.style.display = "block";
});

BackToLoveLetter.addEventListener("click", () => {
  currentDay = daysInLove;
  const existingImage1 = document.querySelector(".loveImage");
  const existingComment1 = document.querySelector(".imageComment");
  if (existingImage1) {
    existingImage1.remove();
  }
  if (existingComment1) {
    existingComment1.remove();
  }
  showLoveMessage();
  BackToLoveLetter.style.display = "none";
});

function showLoveMessage() {
  const loveTitle = document.getElementById("loveTitle");
  const memoryTitle = document.getElementById("memoryTitle");

  
  if (daysUntilAugust15 < 0) {
    const daysDiff = Math.abs(daysUntilAugust15);
    if (currentDay >= daysInLove) {
      // Afficher la lettre d'amour et masquer le message aléatoire
      loveMessageElement.textContent = "That's it baby ! I hope you liked it and had a beautiful summer :). Here is a last message for you";
      daysLeftElement.style.display = "none";
      loveLetterElement.style.display = "block";
      // Afficher le bouton "First Day" lorsque la love letter est affichée
      firstDayButton.style.display = "inline-block";
      BackToLoveLetter.style.display = "non";

      // Cacher les titres "What I Love About You" et "Memory of the Day" dans la lettre d'amour de fin
      const loveMessageTitle = document.querySelector(".message h2");
      const memoryTitle = document.querySelector("#imageContainer h2");
      loveMessageTitle.style.display = "none";
      memoryTitle.style.display = "none";
      prevDayButton.style.display = "none";
      nextDayButton.style.display = "none";
     
    } else {
      nextDayButton.style.display = "none";
      firstDayButton.style.display = "none";
      displayLoveMessage(daysDiff);
    }
  } else {
    loveMessageElement.textContent = `Hello Alba - To celebrate your birthday, I've put together something special – a temporary website just for you. Starting from August 28th, each day you'll receive a new reason why I love you, along with a cherished memory we've shared. The catch is, you'll need to visit the website every day to unveil the latest message. It's a daily dose of love and a way to relive our moments together and discover why i love you.

    I hope this gift brings a smile to your face and adds a touch of excitement to your days. 
    
    Wishing you a fantastic 28th birthday my love. `;
    daysLeftElement.textContent = `Jours restants: ${daysUntilAugust15 + 1}`;
    // Cacher les titres "What I Love About You" et "Memory of the Day" dans la lettre d'amour de fin
    const loveMessageTitle = document.querySelector(".message h2");
    const memoryTitle = document.querySelector("#imageContainer h2");
    loveMessageTitle.style.display = "none";
    memoryTitle.style.display = "none";
    prevDayButton.style.display = "none";
    nextDayButton.style.display = "none";
    // Masquer le bouton "First Day" lorsqu'un message aléatoire est affiché
    firstDayButton.style.display = "none";
  }
 
}

const prevDayButton = document.getElementById("prevDayBtn");
const nextDayButton = document.getElementById("nextDayBtn");

let currentDay = Math.abs(daysUntilAugust15); // Initial day
const maxDay = Math.abs(daysUntilAugust15)-1; // Maximum number of days

prevDayButton.addEventListener("click", () => {
  if (currentDay > 0) {
    currentDay--;
    displayLoveMessage(currentDay);
  }
});

nextDayButton.addEventListener("click", () => {
  if (currentDay <= maxDay) {
    currentDay++;
    displayLoveMessage(currentDay);
  }

});


function displayLoveMessage(day) {
  console.log("Displaying day:", day); // Check the day value
  const messageIndex = day - 1;
  const message = loveMessages[messageIndex];
  loveMessageElement.textContent = message.message; // Utilisez message.message au lieu de message
  daysLeftElement.textContent = `Days left: ${daysInLove - day}`;

  // Charger et afficher l'image
  const imageElement = document.createElement("img");
  imageElement.src = message.imagePath; // Utilisez message.imagePath au lieu de imagePath
  imageElement.alt = `Day ${day} Image`;
  imageElement.className = "loveImage";

  // Charger et afficher le commentaire
  const commentElement = document.createElement("p");
  commentElement.textContent = message.comment;
  commentElement.className = "imageComment";

  // Masquer la love letter lorsque vous affichez un message aléatoire
  loveLetterElement.style.display = "none";

  //gestion affichage boutons next et previous

  if (currentDay <= 1 ) {
    prevDayButton.style.display = "none"; // Masquer le bouton "Previous"
  } else {
    prevDayButton.style.display = "inline-block"; // Afficher le bouton "Previous" sinon
  }

  if (currentDay >= 15 || currentDay > maxDay) {
    nextDayButton.style.display = "none"; // Masquer le bouton "Next"
  } else {
    nextDayButton.style.display = "inline-block"; // Afficher le bouton "Next" sinon
  }
  

  

  
  // Masquer le bouton "First Day" lorsqu'un message aléatoire est affiché
  firstDayButton.style.display = "none";


  // Supprimer l'ancienne image et commentaire s'il y en a une
  const existingImage = document.querySelector(".loveImage");
  const existingComment = document.querySelector(".imageComment");
  console.log("Existing image:", existingImage); // Check if it's found
  console.log("Existing comment:", existingComment); // Check if it's found
  console.log("Current day:", currentDay); // Check the day value
  console.log("MaxDay:", maxDay); // Check the day value
  console.log("DaysuntilAugust:", daysUntilAugust15)
  if (existingImage) {
    existingImage.remove();
  }
  if (existingComment) {
    existingComment.remove();
  }

  const imageContainer = document.getElementById("imageContainer");
  imageContainer.appendChild(imageElement);
  imageContainer.appendChild(commentElement);
}

// Afficher le message pour le jour actuel au chargement initial
showLoveMessage();