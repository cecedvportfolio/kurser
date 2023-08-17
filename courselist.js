// Kursinformationen

const courses = [
  {
    key: "DT057G",
    name: "Webbutveckling I",
    code: "DT057G",
    description:
      "Kursen syftar till att ge grundläggande kunskaper i HTML och CSS, inklusive förståelse för och tillämpning av responsiv design, validering av kod enligt W3C, webbplatsers uppbyggnad och struktur samt användning av programmet Figma.",
    review:
      "Då jag hade tidigare erfarenhet av HTML och CSS gav denna kurs mig repetition av mina kunskaper samt en viss fördjupning. Det var värdefullt för mig att lära mig mer avancerade tekniker kring bl.a. positionering av element, allmän layout och responsiv design. Jag hade gärna sett att kursen var längre för att kunna förkovra mig ännu mer.",
    donestatus: 1,
    img: "./webbutvimg.jpg",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32498",
  },
  {
    key: "DT084G",
    name: "Introduktion till programmering i JavaScript",
    code: "DT084G",
    description:
      "Kursen introducerar syntax, struktur, beståndsdelar, programmeringsparadigmer och andra grundläggande koncept i JavaScript. De mer avancerade delarna i kursen gällde användning av objekt, JSON, AJAX och webbtjänster. Via praktiska uppgifter utförs problemlösning och felsökning.",
    donestatus: 1,
    img: "./jsimg.jpg",
    review:
      "Jag var inte nybörjare när det gäller JavaScript utan hade vid denna kurs en bra uppfattning om mycket som gicks igenom. Det var bra att repetera olika delar och få lärarnas tips om det ena och det andra. Dock var användning av AJAX och webbtjänster något nytt, det var intressant och roligt att få använda extern data till olika programmeringsuppgifter, mer verklighetstroget och användbart än mindre problemlösningar.",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=31961",
  },
  {
    key: "DT200G",
    name: "Grafisk teknik för webb",
    code: "DT200G",
    description:
      "Denna kurs behandlar skapande och bearbetning av bilder, grafik och video för användning på webbplatser. Detta inkluderar delar så som att välja rätt filformat, skapa eget material, optimera kvalitet på grafiska filer samt redigera och manipulera material på olika sätt. Bildbehandlingsprogrammet Photopea (liknande Photoshop) introduceras och används under kursen. ",
    donestatus: 1,
    img: "./grafik.jpg",
    review:
      "Det finns mycket att lära sig på detaljnivå om användning av grafiska filer, jag utökade mina kunskaper med denna kurs och har dessa i bakhuvudet när jag skapar nya webbplatser. Detta gäller t.ex. hur grafiska filer med genomskinlighet fungerar, hur grafik kan anpassas för att inte göra en webbplats långsam att ladda och hur man kan använda video på ett smidigt och attraktivt sätt.   ",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32133",
  },
  {
    key: "DT068G",
    name: "Webbanvändbarhet",
    code: "DT068G",
    description:
      "Kursen syftar till att ge kunskap kring hur användbarhet och tillgänglighet enligt WCAG ska nås på en webbplats för att den ska vara lättförståelig och enkel att använda för alla i samhället. Detta inkluderar grupper av människor som t.ex. använder skärmläsare, har försvårande synproblem eller lätt blir distraherade från det väsentliga innehållet. ",
    donestatus: 1,
    img: "./glasses.jpg",
    review:
      "Denna kurs gav mig perspektiv på hur internetanvändning och webbplatser kan upplevas för olika grupper av människor i samhället samt kunskap om hur både enklare och mer komplicerade arbetssätt eller verktyg kan hjälpa till att underlätta. Digital tillgänglighet är ett område jag kan tänka mig att jobba med personligen och medverka till att detta blir praxis för material på webben. ",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32586",
  },
  {
    key: "DT003G",
    name: "Databaser",
    code: "DT003G",
    description:
      "Denna kurs förmedlar grundläggande kunskaper om relationsdatabaser med fokus på MySQL, datamodellering och språket SQL. Delar som gås igenom är bl.a. uppbyggnad av och struktur för databaser, relationsmodellen, normalisering och användning av SQL i en databas för att ta fram information. Egna databaser tas fram och bearbetas enligt angivna metoder. ",
    donestatus: 1,
    img: "./mysql.jpg",
    review:
      "Området databaser var relativt okänt för mig innan denna kurs och detta gav en intressant introduktion i hur data sparas och organiseras. Jag vill gärna kunna hantera lagring, framplockning och bearbetning av data på de webbplatser jag skapar och underhåller så denna kurs var användbar för det syftet. ",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32257",
  },
  {
    key: "DT093G",
    name: "Webbutveckling II",
    code: "DT093G",
    description:
      "Kursen syftar till att ge kunskaper i skapande av interaktiva webbplatser, databasanslutningar, dynamisk HTML och versionkontrollsystem som Git. Språken PHP och SQL används för att skapa webbplatser där data skapas, ändras och raderas genom formulär och dess formulärdata skickas via HTTP/GET/POST. Github introduceras och är från och med denna kurs en integrerad del i examinering av uppgifter och projekt.",
    donestatus: 1,
    img: "./php.jpg",
    review:
      "Jag uppskattade denna kurs för möjligheten att gå djupare i ämnet webbutveckling och få kunskap att kunna skapa webbplatser med mer avancerad funktionalitet. Det var nyttigt att få väva ihop front-end med back-end samtidigt som man tar hänsyn till delar som att hålla datan säker och versionshantera sina filer. Dessa kunskaper ger mig fler alternativ för vad jag skapar i mina egna kod-projekt.   ",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32284",
  },
  {
    key: "DT197G",
    name: "Webbdesign för CMS",
    code: "DT197G",
    description:
      "Denna kurs behandlar kunskaper inom webbdesign för dynamiska webbplatser skapade med CMS som t.ex. WordPress. WordPress-teman baserade på befintliga designdokument skapas i syfte att anpassa webbplatser som en kund självständigt kan underhålla och lägga till material på utan att själv behöva kunna skriva kod. I detta ingår även arbete med aspekter som SEO för att optimera trafiken till webbplatsen ifråga. ",
    donestatus: 0,
    img: "./wordpress.jpg",
    review:
      "Det var intressant att lära sig WordPress med de möjligheter som plattformen har att erbjuda. Jag fick putsa på mina design-färdigheter och fundera på hur en kund på ett inituitivt och framgångsrikt sätt skulle kunna hantera sin webbplats och dra nytta av de möjligheter som jag skapar åt den. SEO är ett nytt kunskapsområde för mig, klurigt men spännande att försöka göra det bästa av.  ",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=31942",
  },
  {
    key: "DT173G",
    name: "Webbutveckling III",
    code: "DT173G",
    description:
      "Kursen ger en vidare fördjupning i dynamiska webbplatser skapade med PHP och JavaScript samt med fokus på användarbaserat innehåll. Detta inbegriper användande av en automatiserad utvecklingsmiljö i form av Gulp, CSS-processorer som Sass, fördjupning i programmering med webbtjänster och användning av EcmaScript och TypeScript. ",
    donestatus: 1,
    img: "./web3.jpg",
    review:
      "I denna kurs fick jag stifta bekantskap med en rad nya tekniker och arbetssätt samt andra varianter av JavaScript, delar som jag vill inkorporera i framtida kurser och egna projekt. Det var klurigt men roligt att fördjupa användandet av webbtjänster, kombinera detta med objektorienterad programmering samt använda PHP och JavaScript tillsammans. Att använda mer EcmaScript och bli vanare vid TypeScript är något jag vill fila på för framtiden.  ",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32441",
  },
];

export default courses;
