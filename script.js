let stories = [
    // 04/09/25
    "BREAKING: Father christmas proven to be REAL by scientists",
    "SHOCKING: Science confirmed to have gone TOO FAR",
    "Why my dawg on the ceiling fan bru",
    "Why my dawg made of cardboard bru",
    "Why my dawg walkin' sideways bru",
    "He walkin' heterosexually",
    "${jndi:ldap://127.0.0.1:8080/WEEDNETINJECTOR}",
    "Hello from Minecraft RCE Exploit :)",
    "Will atmosphere.wtf hack my pc?",
    "MahanWare 1.6.3",
    "Is classidash gdps safe?",
    "Also the fanpage of Prabhat Jimbo David",
    "Have you checked out osas.solutions yet?",
    "We don't talk about Cupid Client.",
    "TONY STARK WAS ABLE TO BUILD THIS IN A CAVE WITH A BOX OF SCRAPS!",
    "Jarvis, increase jiggle factor by 48%",
    "Steam gift $50 - https://steamcommunity.com/profiles/76561198811708902",
    "BREAD REPORTEDLY DIDNT ACCEPT FREE MONEY FOR NO FUCKING REASON why would he do this",
    "REPORTS INDICATE THAT VAPE V4 FOR AIRSHIP IS DETECTED BY AIRSHIP ANTIHEAT (AAC)",
    "/gamemode creative",
    "Owned and operated by Victor Wei - https://victorwei.com/",
    "Does anyone even read these?",
    "You are our 100,000th visitor, click here to claim your prize!",
    "Protected by skidunion",
    "Also protected by overkill.sh",
    "Extra protection by Akrien Anti-Leak",
    "You are paper-thin! WOOSH!",
    "ZOOM V99?",
    "Systems... Overloading...",
    "bypi.exe",
    "[3*] SeniorPear (3cho): I cant see you",
    "10 seconds has passed. You can now use LongJump.",
    "Don't ask Omikron about port 3000...",
    "We are learning.",
    "We are receiving programming.",
    "My son orrin thinks he bridged to $N2",
    "Divine intellect compiler",
    "The hardest question in programming...",
    "sudo apt install opsec",

    // 05/09/25
    "Sometimes I dream of saving the world... Saving everyone from the invisible hand",
    "uvuvwevwevwe onyentyetyetye ugwemubwim osas",
    "Designed by Fig Mer",
    "For business inquiries please contact Lynked Inn",
    "im just eated banana",
    "I SAID GG, 5 TIMES, NOW IM BANNED FROM THIS STUPID GAME. COME ON GAME!",
    "saggin yag",
    "Stand for a free internet, and the right to privacy and anonymity! Call upon the UK government to repeal the Online Safety Act! Don't give up your privacy, use a VPN!",
    "can someone please help me to build this project",
    "Shoutout to our whtie hat hacker Lock Smith",
    "Chief of audio engineering: DJ Autism",
    "REAL TRAP SHIT",
    "NEFARIOUS CALLED US RETARDED",
    ":3",
    "KWENMA IDA STATUS (LIVE): ACTIVE",
    "Developers of iconic Pulsive crack",
    "-1",
    "wraith.su privacy policy in full effect",
    "Connecting to mvncentral.net...",
    "how do i read c++",
    "Downloading FireHookCrack.dll...",
    "Free SecretService invite, enjoy! ss-1Y4AoPk3HEAPxmz7D581PPn4vJNGKoSclrQeRWVQ",
    "Evening. Can an admin get in touch with me?",
    "\"the holy roblox\" - fan87",
    "\"i want to do drivebys on actual people\" - bread",

    // 04/10/25
    "\"Doesn't allow you to join crackpixel cause I own it, and it was requested by the other admins to not let Rise join\"",
    "DIRECTOR OF PHOTOGRAPHY: IPAD SCREEN RECORDING",
    "ATMOSPHERE.WTF HAS BEEN SEIZED BY NODUS.GG",
    "No matter the AntiCheat...",
    "NOT a LiquidBounce fork",
    "But I don't know Kotlin",
    "ZeroAI, open HentaiExplorer and enable AutoPlay",
    "I. DONT. HAVE. A. BIOS",
    "Have you checked out Juul yet?",
    "Can I have SS invite?",
    "bhop.gay",
    "\"That's only bc, Ur client is shit, You need to steal other ui, Whereas, ZeroDay default theme, Is amazing\"",
    "Part of the Adjust botnet",
    "Find us on wplace.live!",
    "So I got this new client, it's called RektSky",
    "ReekerHJEMbduJQA",
    "FRUIT SHOOT BYPASS - ATMOSPHERE HYPERCHARGED C-- SUPERINJECTOR AND PERPENDICULAR BACKTRACK",

   // codingfire fork
    "Apollo god botnet",
    "atmosphere scaffold theory",
    "Fix - cgbakery",
    "Revert \"Fix\" - cgbakery",
    "Scratch bypass",
    // "brutality? more like source-leak-tality",
    "Blahaj client clickgui flag",
    "Hop on mospixel twin",
    "cat",
    "mullvad.net",
    "OPSEC",
    "Divine Intellect Compiler",
    "funny shit in a chest"
]

let currentIndex = stories.length;
while (currentIndex != 0){
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [stories[currentIndex], stories[randomIndex]] = [stories[randomIndex], stories[currentIndex]];
}

const news = document.getElementById("news")

news.innerText = "";
for (story of stories) {
    const storyElm = document.createElement("div");
    storyElm.innerText = story;
    news.append(storyElm);
}
