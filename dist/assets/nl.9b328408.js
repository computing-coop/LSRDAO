const tagline = "Een netwerk zonder winstoogmerk van burgers die gratis hun tuin openstellen voor trage reizigers die een kampeerplek zoeken.";
const generics = {
  password: "Wachtwoord",
  email: "E-mail",
  "cookie-policy": "Cookiebeleid",
  "privacy-policy": "Privacybeleid",
  "terms-of-use": "Gebruiksvoorwaarden",
  home: "Startpagina",
  map: "Kaart",
  rules: "Regels",
  faq: {
    acronym: "FAQ",
    explicit: "Veelgestelde vragen"
  },
  chat: "Chat",
  account: "Account",
  "sign-out": "Uitloggen",
  "sign-in": "Inloggen",
  garden: "Tuin",
  shop: "Shop",
  slowby: "Secret Trips"
};
const ui = {
  card: {
    "register-here": "Registreer hier"
  }
};
const index = {
  "banner-stmf": {
    copy: "Wil je je trage reis voorbereiden met de community en tegelijk Welcome To My Garden ondersteunen? Bekijk ons {stmfLink} (van 3 tot 29 juni)!",
    link: "Slow Travel Mini Festival"
  },
  shop: {
    banner: {
      copy: "Welcome To My Garden heeft nu een {title} met houten WTMG-bordjes en postkaartjes om hosts te bedanken. Neem zeker een kijkje op {link}!",
      title: "online shop"
    }
  },
  slowby: {
    banner: {
      copy: "Wil je starten met slow travel? Goed nieuws! Met secret slow travel trips kan je nu de verborgen hoekjes van Belgi\xEB ontdekken. We hebben net {title} gelanceerd - neem een kijkje op {link}.",
      title: "Slowby",
      url: "https://slowby.travel/nl/start"
    }
  },
  intro: {
    copy: "Een netwerk zonder winstoogmerk van burgers die hun tuin gratis beschikbaar stellen voor trage reizigers",
    "add-garden": "Voeg jouw tuin toe",
    "explore-map": "Verken de kaart",
    "learn-more": "Ontdek meer"
  },
  steps: {
    "0": {
      title: "Stap 1: Meld je aan om een host te worden of te vinden",
      copy: "Wil je jouw tuin openstellen? {addGardenLink}. Op zoek naar een kampeerplek? Kies je favoriete tuin en contacteer je host! Spreek een datum en tijdstip af voor jouw verblijf en je bent vertrokken! ",
      "add-garden-link-text": "Voeg deze toe aan de kaart"
    },
    "1": {
      title: "Stap 2: Plan je reis",
      copy: "Nadat je afspraken gemaakt hebt met jouw host, stippel je de route uit naar je kampeerplek. Stel jezelf voor en zet je tent op voor de nacht."
    },
    "2": {
      title: "Stap 3: Geniet van de overnachting",
      copy: "Geniet van jouw verblijf. Of dat nu op je eentje is, samen met vrienden of familie, en of je nog even gezellig wil chillen met de host - het is maar wat beide partijen verkiezen. Neem hartelijk afscheid en zet je fiets- of wandeltocht verder de volgende dag!"
    }
  },
  faq: {
    title: "Alles wat je moet weten",
    copy: "Dit zijn de belangrijkste dingen die je moet weten over je volgende avontuur. Lees deze FAQ sectie met veelgestelde vragen aandachtig, zodat je weet waar je aan begint. Meer vragen? {faqLink}",
    "faq-link-text": "Lees meer in onze FAQ",
    questions: {
      "0": {
        title: "Voor wie is Welcome To My Garden?",
        copy: "Welcome To My Garden is bedoeld voor wandelaars en fietsers die aan het eind van de dag een kampeerplek op hun pad nodig hebben. Dit is geen vervanger van een volwaardige camping; gewoon een veilige plek voor de nacht! Beschouw het als een aanvulling op het Belgische netwerk van bivakzones. Welcome To My Garden is niet-commercieel: er mag geen geld worden uitgewisseld. Dit betekent dat je als host jouw gasten niet kunt vragen om hun verblijf te betalen."
      },
      "1": {
        title: "Hoe kan ik mijn kampeerplek bereiken?",
        copy: "Welcome To My Garden is enkel voor de trage reiziger. Dit betekent dat je je kampeerplek enkel te voet of per fiets kan bereiken. Uiteraard mag je wel het openbaar vervoer of je auto gebruiken om naar de start van je route te gaan - zolang je maar niet met de auto toekomt bij de tuin van je host!"
      },
      "2": {
        title: "Hoe vraag ik een verblijf aan?",
        copy: "Je contacteert de host altijd op voorhand, tenzij het uitdrukkelijk anders vermeld staat op het profiel van de host. Wanneer je een verblijf aanvraagt, geef dan ook wat informatie over jezelf, jouw aankomstdatum en -tijdstip."
      },
      "3": {
        title: "Welke faciliteiten kan ik verwachten?",
        copy: "Hosts bieden in principe gewoon een hoekje in hun tuin aan waar jij je tent mag opzetten. Aanvullend kunnen ze je ook eventueel toegang bieden tot een toilet, elektriciteit en drinkwater. Maar, ze zijn hier niet toe verplicht; deze opties zijn een extraatje. Beschouw een tuin als een bivakplaats, niet als een volwaardige camping."
      },
      "4": {
        title: "Moet ik bij Welcome To My Garden iets betalen?",
        copy: "Het gebruik van Welcome To My Garden is volledig gratis! Met het platform zelf maken we wel kosten. Het zou dus zeker een glimlach op ons gezicht toveren mocht je een donatie doen! Dit is een initiatief zonder winstoogmerk. Wij verdienen hier niks aan."
      }
    }
  },
  partners: {
    title: "Onze partners"
  },
  support: {
    title: "Steun ons",
    copy: "Welcome To My Garden is gratis te gebruiken maar we hebben wel enkele rekeningen te betalen.  {donationLink} om ons project te steunen.",
    "donation-link-text": "Doe een donatie"
  },
  "holiday-donations": {
    title: "Iedereen verdient vakantie",
    copy: "Wist je dat 22% van de kinderen in Vlaanderen niet op vakantie kunnen? Zeker na de lockdown hebben ze meer dan ooit nood aan wat ademruimte. Dankzij jouw bijdrage kunnen de meest kwetsbare doelgroepen er ook even tussenuit.",
    "link-text": "Doneer nu"
  }
};
const garden = {
  facilities: {
    labels: {
      water: "Water",
      "drinkable-water": "Drinkbaar water",
      toilet: "Toilet",
      bonfire: "Kampvuur",
      electricity: "Elektriciteit",
      shower: "Douche",
      tent: "Tent"
    }
  },
  filter: {
    title: "Filter",
    "garden-facilities": "Tuinfaciliteiten",
    "garden-capacity": "Tuincapaciteit",
    "spots-available": "Tentplaatsen beschikbaar",
    min: "Minimum",
    "no-places": "Geen plaatsen gevonden",
    "search-city": "Zoek een stad",
    "all-filters": "Alle filters",
    "apply-filter": "Filteren",
    available: "{styledAmount} {amount, plural, one {tuin} other {tuinen}} beschikbaar met de actieve filters.",
    "min-capacity": "Min. {capacity} {capacity, plural, one {tent} other {tenten}}"
  },
  drawer: {
    facilities: {
      capacity: "Ruimte voor {styleCapacity} {capacity, plural, one {tent} other {tenten}}"
    },
    owner: {
      "your-garden": "jouw tuin",
      button: "Tuin beheren"
    },
    guest: {
      button: "Contact host",
      login: "Je moet {signInLink} om contact op te kunnen nemen met de gastheren",
      "sign-link-text": "inloggen"
    },
    unclaimed: "Je kunt contact opnemen met deze host zodra zijn account is geverifieerd."
  },
  add: {
    title: "Voeg jouw tuin toe"
  },
  manage: {
    title: "Beheer jouw tuin"
  },
  form: {
    title: "Voeg jouw tuin toe aan de kaart",
    "auth-notice": "Je moet ingelogd zijn om jouw tuin aan de kaart toe te voegen. Ofwel {signInLink} of {registerLink}",
    "sign-in-link-text": "Log in",
    "register-link-text": "een account aanmaken",
    "email-confirm-notice": "Je moet jouw e-mail controleren voordat je jouw tuin aan de kaart toevoegt. We hebben je een e-mail gestuurd toen je jouw account aanmaakte. Je kunt een verificatielink opnieuw versturen vanuit {accountLink}.",
    "normal-notice": "Door het indienen van dit formulier wordt jouw tuin aan de kaart toegevoegd. Je kunt het te allen tijde beheren of verwijderen van {accountLink}.",
    "account-link-text": "jouw account",
    location: {
      title: "Locatie (verplicht)",
      notice: "Verplaats de marker om de locatie van jouw tuin in te stellen. Je kunt de adresvelden invullen om de marker dichterbij te verplaatsen. <br /> Wij slaan jouw adresgegevens niet op.",
      "coordinate-hint": 'Zorg ervoor dat je de kaartmarkering naar de exacte locatie van jouw tuin hebt gesleept en op "Bevestig pinlocatie" hebt geklikt.',
      "confirm-button": "Bevestig pinlocatie",
      "adjust-button": "Aanpassen pinlocatie",
      street: "Straat",
      "house-number": "Huisnummer",
      region: "Provincie of Staat",
      "postal-code": "Postcode",
      city: "Stad",
      country: "Land"
    },
    description: {
      title: "Beschrijf jouw kampeerplaats (verplicht)",
      notice: "Een korte beschrijving van jouw tuin en de kampeerplek die je kunt aanbieden. Deze informatie wordt in het openbaar weergegeven, dus vermeld hier geen persoonlijke gegevens. <br />jouw beschrijving moet tussen 20 en 300 karakters zijn.",
      hints: {
        "too-short": "{remaining} nog {remaining, plural, one {karakter} other {karakters}}  nodig...",
        "too-long": "{surplus} {surplus, plural, one {karakter} other {karakters}} te lang..."
      },
      placeholder: "Voer de beschrijving in...",
      label: "Beschrijving"
    },
    facilities: {
      title: "Voorzieningen",
      notice: "Tot welke voorzieningen hebben reizigers toegang?",
      capacity: {
        label: "Capaciteit (vereist)",
        help: "Hoeveel tenten heb je ruimte voor (schatting)"
      }
    },
    photo: {
      title: "Foto",
      notice: "Laat de mensen zien hoe jouw tuin eruit ziet.<br />Zorg ervoor dat de foto alleen de kampeerplek laat zien en niet het huis van jouw buur.",
      "img-alt": "jouw tuin",
      hints: {
        "wrong-format": "Jouw foto moet een JPEG-, PNG- of TIFF-bestand zijn.",
        "too-large": "Je foto is te groot. De bestandsgrootte van een foto moet 5MB of kleiner zijn."
      }
    },
    "add-button": "Voeg jouw tuin toe",
    "update-button": "Actualiseer jouw tuin",
    invalid: "Sommige informatie was niet geldig. Controleer de door je verstrekte informatie op fouten."
  },
  notify: {
    success: "Jouw tuin is succesvol toegevoegd!",
    update: "Jouw tuin werd met succes ge\xFCpdatet!",
    photo: "Het kan een minuut duren voordat de foto verschijnt."
  }
};
const account = {
  title: "Account",
  verify: {
    title: "Bevestig jouw e-mail",
    text: "Je moet jouw e-mailadres controleren als je wilt chatten of een tuin wilt toevoegen.",
    button: "E-mail opnieuw versturen",
    sent: "E-mail verzonden!"
  },
  preferences: {
    title: "E-mail voorkeuren",
    text: "Stuur me een e-mail wanneer:",
    chat: "Ik een nieuw chatbericht ontvang",
    news: "Welcome To My Garden nieuws wil delen"
  },
  garden: {
    title: "Jouw tuin",
    unlisted: {
      text: "Je hebt jouw tuin nog niet op de kaart gezet. Wanneer je jouw tuin toevoegt, kunnen andere gebruikers contact met jou opnemen om een bezoek aan te vragen. Je kunt jouw tuin op elk moment uitschrijven!",
      button: "Voeg jouw tuin toe"
    },
    listed: {
      text: "Je kunt jouw tuin op elk gewenst moment uit de lijst halen. Dit betekent dat het voor later bewaard blijft - maar pas op de kaart wordt getoond als je het weer laat zien.",
      button: "Beheer jouw tuin"
    },
    unverified: {
      text: "Controleer jouw e-mail om jouw tuin te beheren."
    }
  },
  notify: {
    "resend-error": "We konden geen accountverificatie e-mail sturen. Neem contact op met {support}",
    "garden-show": "Jouw tuin komt weer op de kaart te staan",
    "garden-no-show": "Jouw tuin komt niet op de kaart te staan.",
    "preferences-update": "Jouw e-mailvoorkeuren zijn bijgewerkt!"
  }
};
const auth = {
  "invalid-code": "Deze pagina is niet toegankelijk zonder een geldige actiecode",
  password: {
    expired: "De link om jouw wachtwoord te herstellen is verlopen, probeer nog eens."
  },
  verification: {
    succes: "Jouw e-mailadres is met succes geverifieerd!",
    refresh: "Jouw e-mail is al geverifieerd. Vernieuw de pagina.",
    expired: "Deze verificatielink is vervallen. Vraag een nieuwe aan.",
    unsigned: "Gelieve eerst in te loggen"
  }
};
const register = {
  title: "Registreren",
  button: "Registreren",
  "first-name": "Voornaam",
  "last-name": "Achternaam",
  country: "Land",
  policies: "Ik ga akkoord met de {cookiePolicy}, {privacyPolicy} en {termsOfUse}",
  registering: "Bezig met registratie...",
  registred: "Heb je al een account? {signIn}",
  validate: {
    email: "Voeg een e-mail adres toe, dit is waarmee je inlogt.",
    password: {
      set: "Je moet een wachtwoord instellen zodat je later kunt inloggen.",
      min: "Jouw wachtwoord moet minimaal 8 karakters bevatten",
      max: "Zorg ervoor dat jouw wachtwoord maximaal 100 karakters lang is."
    },
    "first-name": {
      set: "Voer een voornaam in. Zo word je aan andere gebruikers getoond.",
      max: "Je voornaam kan maar 25 karakters lang zijn, zodat we hem goed kunnen weergeven. Voel je vrij om deze te verkorten of kies een bijnaam"
    },
    "last-name": "Voer jouw achternaam in. Dit zal niet worden gedeeld met andere gebruikers.",
    country: {
      set: "Geef alstublieft jouw land in. Dit helpt ons om de kaart te focussen op waar je vandaan komt.",
      "from-list": "Kies een land uit de lijst. Dit helpt ons om de kaart te focussen op waar je vandaan komt."
    },
    consent: "Je moet akkoord gaan met de voorwaarden van Welcome To My Garden als je gebruik wilt maken van het platform."
  },
  notify: {
    successful: "Jouw account is met succes aangemaakt! Controleer jouw e-mail om jouw account te verifi\xEBren.",
    "in-use": "Dit e-mailadres is al in gebruik.",
    unexpected: "Er is een onverwachte fout opgetreden. Als het probleem aanhoudt, neem dan contact op met {support}"
  }
};
const chat = {
  title: "Chat",
  "title-conversation": "Chat met {partnerName}",
  "all-conversations": "Alle gesprekken",
  "no-messages": {
    text: "Je hebt nog geen berichten. Selecteer een host {link} om contact met ze op te nemen.",
    link: "op de kaart"
  },
  "type-message": "Typ jouw bericht...",
  "new": "nieuw",
  notify: {
    unverified: "Verifieer jouw e-mail voordat je begint te chatten",
    "empty-message": "Jouw bericht kan niet leeg zijn",
    "too-long": "Jouw bericht is {surplus} {surplus, plural, one {karakter} other {karakters} te lang..."
  },
  "go-to-garden": "Ga naar de tuin"
};
const map = {
  "vehicle-notice": {
    title: "Welcome To My Garden is alleen voor langzame reizigers.",
    text: "Als je van plan bent om met een gemotoriseerd voertuig te reizen, neem dan geen contact op met de host via dit platform. Bedankt voor jouw begrip!"
  },
  trails: {
    hiking: "Wandelroutes tonen",
    cycling: "Fietsroutes tonen",
    attribution: "Trajecten met dank aan {link}"
  }
};
const rules = {
  title: "Regels",
  description: "Hier vind je hoe Welcome to My Garden werkt.  Lees eerst aandachtig de regels voordat je aan je avontuur begint! Dit platform werkt immers alleen als we allemaal volgens de regels spelen.",
  rules: {
    "0": {
      title: "Covid-19 waarschuwing",
      copy: "Houd je ten allen tijde aan de maatregelen van de regering om de verspreiding van Covid-19 te stoppen. De laatste informatie voor Belgi\xEB vind je op info-coronavirus.be."
    },
    "1": {
      title: "Netwerk van burgers",
      copy: "Welcome to My Garden is een netwerk van burgers die gratis kampeerplekken in hun tuinen aanbieden aan trage reizigers. Het is een initiatief zonder winstoogmerk en er mag geen inkomen uit worden gehaald. Welcome To My Garden is niet verantwoordelijk voor verlies, schade of letsels opgelopen tijdens een verblijf."
    },
    "2": {
      title: "Stuur vooraf een verzoek naar de tuineigenaar",
      copy: "De tuineigenaars zijn mogelijk niet thuis om jou te verwelkomen. We vragen gebruikers om vooraf contact op te nemen met de tuineigenaar om meteen de beschikbaarheid te controleren. Dit doe je door een verzoek te sturen naar het profiel van de tuineigenaar. Nadat je de eerste verbinding tot stand hebt gebracht, kan je contactgegevens uitwisselen. Zo kan je contact houden en je host informeren over je aankomsttijd via e-mail of telefoon, afhankelijk van je hosts voorkeur. Geef bij het indienen van een verzoek wat informatie over jezelf en je verwachte aankomsttijd."
    },
    "3": {
      title: "Geen auto",
      copy: "Welcome To My Garden respecteert het milieu en is alleen bedoeld voor trage reizigers. Hierdoor kun je de kampeerplekken enkel te voet, met de fiets of met het openbaar vervoer bereiken.Het is verboden om er te komen met een auto. Je mag naar het begin van je wandel- of fietspad rijden - zolang je maar niet met de auto naar de kampeerplekken komt."
    },
    "4": {
      title: "Maximale verblijfsduur",
      copy: "You can stay at a camp spot for a maximum of 48 hours. Always check with the garden owner."
    },
    "5": {
      title: "Maximaal aantal tenten",
      copy: "Tuineigenaars bepalen hoeveel tenten ze elke nacht kunnen herbergen (dit is geen Dour-festival). Respecteer alsjeblieft hun keuze."
    },
    "6": {
      title: "Voorzieningen",
      copy: "Voorzieningen kunnen per tuin verschillen. Sommige hosts bieden misschien toegang tot hun badkamers; anderen doen dat liever niet. Respecteer steeds hun keuzes."
    },
    "7": {
      title: "Respect voor de natuur",
      copy: "Laat geen afval achter.  Dit geldt ook voor je toiletbezoek: zoek een struik of boom buiten de tuin om te plassen; grotere boodschappen pak je mee en gooi je in een vuilnisbak. Respecteer de natuur en de hosts: pas het Leave No Trace-principe toe zoals bij bivakkeren in het wild."
    },
    "8": {
      title: "Beperk je geluid",
      copy: "Respecteer de privacy van de eigenaar van de kampeerplek. Zing dus niet luidkeels mee met Celine Dion en zorg niet voor geluidsoverlast. Zeker niet na 22.00 uur!"
    },
    "9": {
      title: "Veel plezier!",
      copy: "Dit is een geweldige kans om andere mensen te ontmoeten en plezier te hebben! Leer een woordje Frans, Nederlands of Duits als je in een andere regio reist dan de jouwe. Wees nieuwsgierig, deel verhalen en bouw nieuwe vriendschappen op!"
    },
    "10": {
      title: "Vertel het verder",
      copy: "Wil jij ook jouw tuin openen of ken je iemand die dat graag zou doen? Vertel over Welcome to My Garden! Je kan ook mensen uitnodigen om onze Facebookpagina leuk te vinden."
    }
  },
  message: "Veel kampeerplezier!"
};
const recommendations = {
  title: "Inspiratie voor de trage reiziger",
  description: "Plannen om Belgi\xEB te voet of per fiets te ontdekken? Hieronder vind je enkele links en tools die wij warm aanbevelen.",
  "recommendations-groups": {
    "0": {
      title: "Tools, apps & maps",
      recommendations: {
        "0": "Routeplanner voor fietsers en hikers: BRoute, Komoot , OutdoorActive",
        "1": "Navigatie app voor hikers en fietsers: OSMAnd",
        "2": "Overzicht van het volledig fietsnetwerk: OpenStreetMap",
        "3": "Geweldige navigatie app voor fietsen en wandelen: OSMAnd",
        "4": "Nog een geweldige navigatie app: ViewRanger",
        "5": "Overzicht van het hele fietsnetwerk zichtbaar op OpenStreetMap"
      }
    },
    "1": {
      title: "Wandelpaden info",
      recommendations: {
        "0": "Verzameling van hiking trails: RouteYou",
        "1": "Knooppunten network planner: Wandelknooppunt",
        "2": "Langeafstandspaden in Walloni\xEB: le RAVeL",
        "3": "Langeafstandspaden in Vlaanderen: LF network Flanders",
        "4": "Langeafstands hiking trails in Vlaanderen en Walloni\xEB: Grote Routepaden"
      }
    },
    "2": {
      title: "Aanraders accommodatie",
      recommendations: {
        "0": "Hospitality netwerk voor fietsers: WarmShowers",
        "1": "Meer gedetailleerde informatie over alle bivakplaatsen: Bivakzone.be"
      }
    }
  },
  message: "Geniet!",
  contact: "Zouden we nog andere zaken moeten toevoegen aan deze lijst? Laat het ons gerust weten via {support}"
};
const faq = {
  title: "FAQ",
  description: "Veelgestelde vragen",
  clusters: {
    general: {
      title: "Algemeen",
      questions: {
        what: {
          title: "Wat is Welcome To My Garden?",
          copy: "Welcome To My Garden is een netwerk van burgers die hun tuinen openen om de trage reiziger een kampeerplek aan te bieden. Het is een initiatief zonder winstoogmerk dat is opgezet door een groep burgers. Het idee ontstond tijdens de 2020 coronalockdown in Belgi\xEB."
        },
        who: {
          title: "Voor wie is Welcome to My Garden?",
          copy: "Welcome To My Garden is gemaakt voor wandelaars en fietsers die aan het eind van de dag een kampeerplek nodig hebben. Het is niet bedoeld om volwaardige campings te vervangen; het gaat gewoon om een veilige plek voor de nacht! Beschouw het als een aanvulling op het Belgische netwerk van bivak sites."
        },
        how: {
          title: "Hoe werkt Welcome to My Garden?",
          copy: "Mensen die hun tuin voor trage reizigers willen openen, kunnen deze toevoegen door het formulier op de website in te vullen (klik op de knop \u2018Tuin toevoegen\u2019). Kampeerders  kunnen vervolgens contact opnemen met de tuineigenaars om hun verblijf te regelen."
        }
      }
    },
    "slow-travellers": {
      title: "Trage reizigers",
      questions: {
        "how-camping": {
          title: "Hoe kom ik bij mijn kampeerplek?",
          copy: "Welcome To My Garden is opgezet om te voldoen aan de behoeften van trage reizigers: wandelaars en fietsers die aan het eind van de dag een kampeerplek nodig hebben. Het is daarom de bedoeling dat je te voet, met de fiets of met het openbaar vervoer op de kampeerplek aankomt - zeker niet met de auto. Natuurlijk kun je wel naar het begin van je route rijden - zolang je maar niet bij je host komt opdagen in je auto!"
        },
        "what-facilities": {
          title: "Welke voorzieningen vind je in de tuin?",
          copy: "Eigenlijk bieden hosts gewoon een hoek in hun tuin aan waar je je tent kunt opzetten. Daarnaast bieden ze mogelijk toegang tot drinkwater, een toilet en elektriciteit. Maar, ze zijn hier niet toe verplicht: dit zijn allemaal extraatjes. Beschouw een tuin als een bivakplek; niet als een volwaardige camping."
        },
        cost: {
          title: "Is Welcome To My Garden gratis?",
          copy: "Welcome to My Garden gebruiken is helemaal gratis. Als platform maken we wel kosten. Als je {donationLink} wilt doen, zal dat een grote glimlach op ons gezicht toveren! We zijn een initiatief zonder winstoogmerk, dus we verdienen hier geen geld aan. Dit betekent dat al het geld dat je doneert, rechtstreeks naar de kosten van het project gaat. Je kan ook onze uitgaven bekijken op de donatiepagina."
        },
        "no-garden": {
          title: "Ik heb geen tuin. Kan ik nog steeds naar de tuinen van anderen reizen?",
          copy: "Ja! Je hoeft zelf geen tuin aan te bieden om er een te gebruiken. Het platform staat open voor alle trage reizigers!"
        },
        "how-long": {
          title: "Hoe lang kan ik in een tuin verblijven?",
          copy: "Omdat deze kampeerplekken alleen voorzien in de behoeften van trage reizigers die een meerdaagse trektocht of fietstocht maken, kun je maximaal 48 uur (twee nachten) op een kampeerplek verblijven. Natuurlijk kun je daarna verder reizen naar de volgende kampeerplek! En de volgende. En de volgende\u2026 Controleer altijd bij de host hoe lang je kan blijven. Sommige hosts geven er de voorkeur aan dat je maar \xE9\xE9n nacht blijft."
        },
        animals: {
          title: "Mag ik mijn gezin meenemen? Mijn kinderen? Mijn hond?",
          copy: "Je kunt het beste aan je host vragen of ze openstaan \u200B\u200Bvoor kinderen en/of honden. Heel wat hosts hebben al op hun profiel aangegeven dat ze openstaan \u200B\u200Bvoor gezinnen, maar zelfs als dat niet het geval is, kan je het altijd vragen!"
        },
        "no-toilet": {
          title: "Wat als er geen toilet is?",
          copy: "Mogelijk biedt niet elke host toegang tot een toilet. Zoek in dit geval een plek buiten de tuin die aan je wensen voldoet. Plas achter een boom en raap je grotere boodschap op, zodat je die de volgende dag kan weggooien. Pas het Leave No Trace-principe toe zoals je  zou doen bij kamperen in het wild."
        },
        "covid-safe": {
          title: "En als er een toilet is, hoe garanderen we dan dat Covid-19 niet wordt overgedragen?",
          copy: "Breng handdesinfectiemiddel en vochtige doekjes mee, zodat je je handen en alle oppervlakken die je hebt aangeraakt (zoals de toiletbril, de spoelknop, de kraan en de deurgreep) kan reinigen. Je kan ook een mondmasker dragen als je het huis van je host moet betreden voor faciliteiten. Op deze manier help je ervoor te zorgen dat Covid-19 niet wordt overgedragen, voor het geval jij of een van de andere gebruikers van de badkamer het draagt. En als je weet dat je misschien ziek bent, vertrek dan niet op reis!"
        },
        "tent-type": {
          title: "Welk type tent kan ik meenemen?",
          copy: "Omdat Welcome To My Garden alleen geschikt is voor wandelaars en fietsers, verwachten we dat je niets groters meeneemt dan een trekkerstent. Dit betekent dat je tent gemakkelijk in je rugzak moet passen. Als je niet zeker weet of je tent in de tuin van de host past, contacteer hen dan voordat je vertrekt."
        }
      }
    },
    hosts: {
      title: "Hosts",
      questions: {
        privacy: {
          title: "Hoe garandeert Welcome To My Garden mijn privacy als host?",
          copy: "Al jouw persoonlijke gegevens worden beschermd door het inlogsysteem. Als je een host bent, zullen we jouw huisnummer of exacte locatie niet op de kaart weergeven. Je kan dit aan jouw gasten geven zodra je contact met hen opneemt. Je bepaalt zelf hoe je wilt dat ze contact met je opnemen: per e-mail, telefoon of allebei."
        },
        messaging: {
          title: "Ik heb een bericht ontvangen van een trage reiziger. Waar kan ik het beantwoorden?",
          copy: "De conversaties tussen hosts en reizigers vinden plaats via de chat op het platform. Als je een notificatiemail ontvangt dat je een bericht hebt ontvangen, ga dan naar {chatLink} om te antwoorden."
        },
        suspend: {
          title: "Ik wil mijn tuin een tijdje offline halen, maar binnenkort ben ik terug! Hoe doe ik dat?",
          copy: 'Ga naar {accountLink}. In de sectie "Beheer jouw tuin", verwijder je het vinkje bij "Weergeven op de kaart". De tuin wordt nog steeds opgeslagen op het platform, maar verschijnt niet meer op de kaart. Van zodra je terug bent, klik je het vakje weer aan en kun je weer beginnen met het verwelkomen van trage reizigers!'
        },
        issue: {
          title: "Ik heb een probleem gehad met een gast of een host. Hoe meld ik dit?",
          copy: "Elk probleem of wangedrag moet per e-mail worden gemeld aan Welcome To My Garden {support}. In geval van wangedrag behouden we het recht om eenzijdig het account van deze persoon te verwijderen (zie Gebruiksvoorwaarden)."
        }
      }
    },
    "technical-support": {
      title: "Technische ondersteuning",
      questions: {
        privacy: {
          title: "Ik heb me net ingeschreven, maar ik heb nog geen bevestigingsmail ontvangen.",
          copy: "Neem contact op met het vrijwilligersteam {support} en zij zullen je helpen jouw e-mail te verifi\xEBren!"
        },
        messages: {
          title: "Ik heb problemen met het lezen van berichten.",
          copy: "Probeer eerst in te loggen met een andere browser, zoals Firefox of Google Chrome. Als het niet werkt, neem dan contact op met de support {support}. Er is altijd een oplossing voor alles, we zullen het samen vinden!"
        },
        "update-email": {
          title: "Ik wil mijn e-mailadres bijwerken of mijn account verwijderen. Hoe kan ik dit doen?",
          copy: "Wij nemen jouw gegevens zeer serieus. Als je jouw e-mailadres wilt bijwerken of jouw account volledig van het platform wilt verwijderen, neem dan contact op met onze support (support-at-welcometomygarden.org). Vergeet niet jouw e-mailadres te vermelden dat je wilt wijzigen of verwijderen."
        },
        newsletter: {
          title: "Ik zou graag jouw volgende nieuwsbrief ontvangen! Wat moet ik doen?",
          copy: 'Om onze volgende nieuwsbrief te ontvangen, ga naar {accountLink} en vink het vakje "Welcome To My Garden heeft nieuws te delen" aan. Als je geen nieuws meer wilt ontvangen, verwijder je eenvoudigweg het vinkje in hetzelfde vakje.'
        },
        "text-in-english": {
          title: "Er staat tekst in het Engels, terwijl dat niet mijn voorkeurstaal is. Hoe kan ik dit veranderen?",
          copy: "Indien bepaalde tekst nog niet vertaald is naar uw voorkeurstaal, dan zal het in het Engels verschijnen. Je kan ons helpen Welcome To My Garden te vertalen naar jouw voorkeurstaal. Ga naar {communityTranslationsLink} om van start te gaan."
        }
      }
    },
    other: {
      title: "Andere",
      questions: {
        "become-volunteer": {
          title: "Kan ik vrijwilliger worden?",
          copy: "We zijn momenteel op zoek naar vrijwilligers om Welcome To My Garden in andere talen te vertalen! Hoe meer tenten we op de kaart hebben, hoe meer traag reizen het nieuwe normaal wordt. Als je deel wilt uitmaken van het avontuur, stuur ons dan een e-mail naar {support} of word lid van onze slack (link onderaan)."
        },
        "fb-page": {
          title: "Waarom is de Facebookpagina alleen in het Engels?",
          copy: "Allereerst is er een heel praktische reden: Engels is de enige taal waarin het hele team vloeiend genoeg kan communiceren! We willen ook dat Welcome To My Garden voor iedereen openstaat, zodat mensen in andere landen het initiatief ook bij hen kunnen realiseren. Op de Facebookpagina houden we het bij Engels. Contacteer je ons liever in het Nederlands of Frans? Dat kan gerust!"
        },
        warmshowers: {
          title: "Hoe verschilt Welcome To My Garden van andere platforms zoals Warmshowers?",
          copy: "Er zijn heel wat platforms die voorzien in de behoeften van (trage) reizigers. Warmshowers is bijvoorbeeld  alleen voor fietsers, terwijl Welcome To My Garden  voor zowel wandelaars als fietsers is. Bij Welcome To My Garden  draait het ook allemaal om tenten, niet om bedden. Je zou het kunnen beschouwen als de buitenversie van Couchsurfing. Er is een commercieel initiatief genaamd Campspace in Nederland dat min of meer hetzelfde doet als Welcome To My Garden, maar je moet wel je kampeerplek betalen. Welcome To My Garden is een gratis initiatief en je hoeft jouw host niet te betalen voor je verblijf."
        }
      }
    }
  },
  donation: "een donatie",
  "instruction-page": "deze instructiepagina"
};
const cookies = {
  title: "Cookiebeleid",
  articles: {
    "0": {
      title: "Wat zijn cookies",
      copy: {
        "0": `Zoals bij bijna alle professionele websites gebruikelijk is, maakt deze site gebruik van cookies. Cookies zijn kleine bestanden die naar je computer worden gedownload om je ervaring te verbeteren. Deze pagina beschrijft welke informatie ze verzamelen, hoe we deze gebruiken en waarom we deze cookies soms moeten opslaan. We zullen ook delen hoe je kunt voorkomen dat deze cookies worden opgeslagen. Dit kan echter bepaalde elementen van de site functionaliteit verminderen of 'breken'.  <a href="https://en.wikipedia.org/wiki/HTTP_cookie"> Zie dit Wikipedia-artikel over HTTP-cookies voor meer algemene informatie over cookies.</a>`
      }
    },
    "1": {
      title: "\u200DHoe gebruiken we cookies",
      copy: {
        "0": "We gebruiken cookies om verschillende redenen die hieronder worden beschreven. Helaas zijn er in de meeste gevallen geen standaard opties om cookies uit te schakelen zonder de functionaliteiten en opties die ze aan deze site toevoegen volledig uit te schakelen. Het wordt aanbevolen om alle cookies te laten staan \u200B\u200Bals je niet zeker weet of je ze nodig heeft, voor het geval ze worden gebruikt om een \u200B\u200Bdienst te verlenen die je gebruikt. \u200D"
      }
    },
    "2": {
      title: "Cookies uitschakelen ",
      copy: {
        "0": "Je kunt voorkomen dat cookies worden gedownload door je browserinstellingen aan te passen (zie het Help-menu van je browser om te zien hoe je dit moet doen). Houd er rekening mee dat het uitschakelen van cookies de functionaliteit van deze en vele andere websites die je bezoekt, kan be\xEFnvloeden. Als je cookies wil uitschakelen, raden we aan Privacy Badger in Firefox te gebruiken."
      }
    },
    "3": {
      title: "\u200DDe cookies die we instellen",
      copy: {
        "0": "Als je een account bij ons aanmaakt, zullen we cookies gebruiken voor het beheer van het aanmeldingsproces en de algemene administratie. Deze cookies worden meestal verwijderd wanneer je uitlogt. In sommige gevallen kunnen ze echter achterblijven om je site voorkeuren te onthouden wanneer je bent uitgelogd.",
        "1": "We gebruiken cookies wanneer je bent ingelogd, zodat we dit kunnen onthouden. Dit voorkomt dat je elke keer dat je een nieuwe pagina bezoekt, moet inloggen. Deze cookies worden meestal verwijderd of gewist wanneer je uitlogt om ervoor te zorgen dat je alleen toegang hebt tot beperkte functies en gebieden wanneer je bent ingelogd.",
        "2": "Deze site kan in de toekomst nieuwsbrief- of e-mail abonnementsservices aanbieden en cookies kunnen worden gebruikt om te onthouden of je al bent geregistreerd en of bepaalde meldingen moeten worden weergegeven die mogelijk alleen geldig zijn voor geabonneerde/niet-geabonneerde gebruikers.",
        "3": "Wanneer je gegevens indient via een formulier zoals die op contactpagina's of commentaar formulieren, kunnen cookies worden ingesteld om je gebruikersgegevens te onthouden voor toekomstige correspondentie.",
        "4": "Om je een geweldige ervaring op deze site te bieden, bieden we de functionaliteit om je voorkeuren in te stellen voor hoe deze site werkt wanneer je deze gebruikt. Om je voorkeuren te onthouden, moeten we cookies instellen, zodat deze informatie kan worden teruggehaald wanneer je interactie hebt met een pagina die wordt be\xEFnvloed door je voorkeuren."
      }
    },
    "4": {
      title: "\u200DCookies van derden ",
      copy: {
        "0": "In sommige speciale gevallen gebruiken we ook cookies van vertrouwde derde partijen. In de volgende sectie wordt beschreven welke cookies van derden je via deze site kunt tegenkomen.",
        "1": "Deze site maakt gebruik van Google Analytics, een van de meest wijdverspreide en vertrouwde analyse tools op het net. We gebruiken het om ons te helpen begrijpen hoe jij deze site gebruikt en om te ontdekken hoe we jouw ervaring kunnen verbeteren. Deze cookies kunnen bijvoorbeeld bijhouden hoeveel tijd je op de site doorbrengt en welke pagina's je bezoekt, zodat we boeiende inhoud kunnen blijven produceren.",
        "2": "Zie de offici\xEBle Google Analytics-pagina voor meer informatie over Google Analytics-cookies.",
        "3": "Analyse van derden wordt gebruikt om het gebruik van deze site te volgen en te meten, zodat we boeiende inhoud kunnen blijven produceren. Deze cookies kunnen dingen bijhouden, zoals hoeveel tijd je op deze site doorbrengt of welke pagina's je bezoekt, om ons te helpen begrijpen hoe we de site voor jou kunnen verbeteren. Van tijd tot tijd testen we nieuwe functies en brengen we subtiele wijzigingen aan in de manier waarop de site wordt afgeleverd. Wanneer we nieuwe functies testen, kunnen deze cookies worden gebruikt om ervoor te zorgen dat je tijdens je bezoek een consistente ervaring krijgt, terwijl we ervoor zorgen dat we begrijpen welke optimalisaties onze gebruikers het meest waarderen."
      }
    },
    "5": {
      title: "Meer informatie",
      copy: {
        "0": "Hopelijk heeft deze pagina dingen voor je verduidelijkt. Zoals eerder vermeld: het is, als er iets is waarvan je niet zeker weet of je het al dan niet nodig hebt, meestal veiliger om cookies ingeschakeld te laten. Dit voor het geval het interactie heeft met een van de functies die je op onze site gebruikt. Als je nog steeds op zoek bent naar meer informatie, kan je contact met ons opnemen via een van onze aangegeven contactmethoden."
      }
    }
  }
};
const stmf = {
  title: "Slow Travel Mini Festival",
  description: "Bereid uw langzame reizen voor met de gemeenschap",
  sections: {
    "get-inspired": "Word ge\xEFnspireerd",
    plan: "Plan",
    contribute: "Draag bij",
    rethink: "Herdenk"
  }
};
const fallback = {
  "404": "404 - pagina niet gevonden",
  redirect: "terug naar de startpagina"
};
var nl = {
  tagline,
  generics,
  ui,
  index,
  garden,
  "sign-in": {
    title: "Inloggen",
    button: "Inloggen",
    reset: {
      text: "Wachtwoord vergeten? {link}",
      link: "Stel het opnieuw in"
    },
    register: {
      text: "Nog geen account? {link}",
      link: "Registreer"
    },
    notify: {
      welcome: "Welkom terug, {user}!",
      incorrect: "Het opgegeven e-mailadres of wachtwoord is onjuist.",
      "login-issue": "We konden je niet inloggen. Als het probleem aanhoudt, neem dan contact op met {support}"
    }
  },
  "request-password-reset": {
    title: "Stel een nieuw wachtwoord in",
    description: "Als je het onderstaande formulier indient, kunnen wij je een unieke link sturen waarmee je jouw wachtwoord kunt resetten.",
    button: "Instructies voor het herstellen van jouw e-mail",
    set: "Als er een account bestaat met de e-mail {email}, wordt er nu een e-mail gestuurd met instructies voor het herstellen van het wachtwoord.",
    trouble: "Heb je moeite met inloggen? contacteer ons via {support} en we helpen je verder!"
  },
  "reset-password": {
    title: "Stel een nieuw wachtwoord in",
    update: "Wachtwoord wijzigen",
    succes: "Jouw wachtwoord is succesvol gereset"
  },
  account,
  auth,
  register,
  chat,
  map,
  rules,
  recommendations,
  faq,
  cookies,
  "privacy-policy": {
    title: "Privacybeleid",
    "last-updated": "Laatst bijgewerkt: 16 augustus 2021",
    subtitle: "Verantwoordelijke voor de verwerking van de gegevens en de eigenaar",
    intro: "Welcome To My Garden met Open Collective Brussels als rechtsentiteit, een vzw, opgericht en bestaand naar Belgisch recht, met maatschappelijke zetel te Cantersteen 12, 1000 Brussel Belgi\xEB, met ondernemingsnummer BE 0664.932.030.",
    email: "Contact: {support}",
    scope: {
      title: "Privacybeleid",
      copy: "Dit \u2018Privacybeleid\u2019 is van toepassing op de \u2018Persoonsgegevens\u2019 die door Welcome to My Garden via deze website worden verzameld."
    },
    "personal-data": {
      meaning: {
        title: "Wat valt er onder persoonsgegevens?",
        copy: "In dit privacybeleid verwijzen persoonlijke gegevens naar informatie die het mogelijk maken jou te identificeren. Een identificeerbare persoon is iemand die direct of indirect kan worden ge\xEFdentificeerd, met name door te verwijzen naar een identificatienummer of naar een of meer factoren die verband houden met de fysieke, fysiologische, mentale, economische, culturele of sociale identiteit. Een typisch voorbeeld van persoonlijke informatie is je naam en e-mailadres."
      },
      collection: {
        title: "Welke persoonsgegevens verzamelen we?",
        copy: "We kunnen jouw persoonlijke gegevens verzamelen uit de volgende bronnen: ",
        sources: {
          "0": {
            title: "Persoonsgegevens die je verstrekt tijdens het registratieproces op het platform.",
            list: {
              "0": "E-mailadres (verplicht)",
              "1": "Jouw voornaam en familienaam (verplicht)",
              "2": "Jouw land (verplicht)",
              "3": "Jouw toestemming voor de voorwaarden"
            }
          },
          "1": {
            title: "Persoonlijke gegevens die we verzamelen wanneer je onze website bezoekt: ",
            list: {
              "0": "We gebruiken cookies om automatisch gegevens over jou te verzamelen wanneer je deze website gebruikt. Raadpleeg ons Cookiebeleid voor meer informatie.  \u200D"
            }
          },
          "2": {
            title: "Persoonsgegevens die je verstrekt bij het toevoegen van jouw tuin aan jouw account.",
            list: {
              "0": "De locatie van jouw tuin (co\xF6rdinaten: de lengte- en breedtegraad) (verplicht)",
              "1": "Informatie over jouw tuin (beschrijving, faciliteiten, aantal tenten die opgezet kunnen worden) (verplicht)",
              "2": "Een foto van jouw tuin (optioneel)"
            }
          },
          "3": {
            title: "Gebruikerslocatie",
            list: {
              "0": "Indien je akkoord gaat met het delen van jouw locatie met Welcome To My Garden, zal de kaart van Welcome To My Garden gecentreerd worden op de locatie die door jouw browser wordt opgegeven. Welcome To My Garden slaat jouw locatie op geen enkele manier op, niet in een cookie noch in lokale opslag. De gebruikerslocatie dient uitsluitend om jouw gebruikerservaring te verbeteren door de kaart te centreren."
            }
          }
        }
      },
      usage: {
        title: "Hoe gebruiken we persoonsgegevens?",
        subtitle: "We kunnen jouw persoonlijke gegevens gebruiken voor onderstaande doeleinden:",
        purposes: {
          "0": "Om jouw gebruikersprofiel op deze website aan te maken en te behouden;",
          "1": "Om de gebruikers te identificeren;",
          "2": "Om jouw gebruikersaccount te verifi\xEBren om zo de veiligheidsmaatregelen te garanderen;",
          "3": "Om het bezoekersnetwerk te voorzien van informatie over jouw tuin;",
          "4": "Om je te waarschuwen wanneer het platform ge\xFCpdatet wordt;",
          "5": "Om je te waarschuwen over activiteiten op het platform die je zouden kunnen interesseren."
        },
        copy: 'De persoonsgegevens worden alleen opgeslagen en verwerkt voor de periode die nodig is voor de verwerking. Daarna worden de gegevens verwijderd of geanonimiseerd. Welcome to My Garden vertrouwt op Firebase, dat gecertificeerd is volgens de belangrijkste privacy- en beveiligingsnormen. Firebase-services voldoen aan de AVG. Alle informatie met betrekking tot Firebase is hier te vinden: <a href="https://firebase.google.com/support/privacy">https://firebase.google.com/support/privacy</a>.'
      },
      backups: {
        title: "Back-ups",
        copy: "Welcome To My Garden maakt elke 6 uur een backup van alle gegevens en bewaart de gegevens gedurende 30 dagen. Indien je verzoekt om jouw account te verwijderen, zullen de gegevens voor deze duur in de backup worden bewaard. Niets van deze data zal ooit worden gebruikt tenzij er zich een probleem aandient met de productiedata."
      },
      extra: {
        "0": {
          title: "Met wie delen we jouw persoonsgegevens?",
          copy: "Je persoonlijke gegevens worden niet gedeeld met derden. We zullen je persoonlijke gegevens nooit verkopen of verhuren aan andere serviceproviders, noch zullen we jouw persoonlijke gegevens delen met serviceproviders die niet voldoen aan de AVG."
        },
        "1": {
          title: "Waarnaar dragen we jouw persoonsgegevens over?",
          copy: "We dragen jouw persoonsgegevens alleen over aan serviceproviders die buiten de Europese Economische Ruimte zijn gevestigd als ze voldoen aan art 44 GDPR (AVG). Alle in de VS gevestigde serviceproviders voldoen aan het Privacy Shield."
        },
        "2": {
          title: "Geautomatiseerde besluitvorming en profilering",
          copy: "De verwerking van jouw persoonlijke gegevens omvat geen profilering en zal niet worden onderworpen aan geautomatiseerde besluitvorming door Welcome To My Garden."
        }
      }
    },
    rights: {
      title: "Welke rechten heb je?",
      copy: "Je hebt ten allen tijde het recht om jouw persoonsgegevens in te zien, evenals het recht om ge\xEFnformeerd te worden over het gebruik dat Welcome to My Garden van jouw persoonsgegevens maakt.",
      list: {
        "0": {
          title: "Recht op rectificatie, verwijdering en beperking van verwerking",
          copy: "Je bent vrij om te beslissen of je jouw persoonsgegevens al dan niet aan Welcome to My Garden verstrekt. Daarnaast heb je altijd het recht om jouw persoonsgegevens bij Welcome to My Garden te wijzigen, aan te vullen of te verwijderen. Je erkent dat een weigering om te verstrekken of een verzoek om verwijdering van persoonsgegevens betekent dat bepaalde diensten niet langer kunnen worden geleverd. Je kunt ook verzoeken om de verwerking van je persoonsgegevens te beperken."
        },
        "1": {
          title: "Recht op bezwaar",
          copy: "Je hebt het recht om bezwaar te maken tegen de verwerking van jouw persoonsgegevens, zolang dit om ernstige en legitieme redenen is."
        },
        "2": {
          title: "Recht op overdraagbaarheid van gegevens",
          copy: "Je hebt het recht om de persoonsgegevens die je aan Welcome to My Garden hebt verstrekt in een gestructureerde, typische en machineleesbare vorm te verkrijgen en/of over te dragen aan verschillende controleurs."
        },
        "3": {
          title: "Recht om toestemming in te trekken",
          copy: "Voor zover de verwerking is gebaseerd op voorafgaande toestemming, heb je het recht om deze goedkeuring in te trekken."
        },
        "4": {
          title: "Recht om een klacht in te dienen",
          copy: "Je hebt het recht om een \u200B\u200Bklacht in te dienen bij de Belgische Privacycommissie: Commissie voor de bescherming van de persoonlijke levenssfeer, Drukpersstraat 35, 1000 Brussel, Belgi\xEB, Tel +32 (0) 2274 48 00, Fax +32 (0) 2274 48 35, e-mail : commission@privacycommission.be.Dit heeft geen invloed op de voorziening voor een burgerlijke rechtbank."
        }
      },
      "exercise-rights": {
        title: "Uitoefening van jouw rechten",
        copy: "Je kunt jouw rechten uitoefenen door hiervoor contact op te nemen met Welcome to My Garden door een e-mail te sturen naar {support}, op voorwaarde dat het e-mailadres dat voor het verzoek is gebruikt identiek is aan het adres dat is gebruikt om zich op het platform te registreren."
      }
    },
    "additional-info": {
      title: "Bijkomende informatie over het verzamelen en beheren van data ",
      infos: {
        "0": {
          title: "Legale procedures",
          copy: {
            "0": "De verwerker en de verantwoordelijke voor de verwerking van de gegevens kunnen de persoonsgegevens van de gebruiker gebruiken voor juridische doeleinden, voor de rechtbank of gerechtelijke procedures in geval van onrechtmatig gebruik van deze applicatie of de hieraan gerelateerde diensten.",
            "1": "De gebruiker is zich ervan bewust dat de verwerker en de verwerking verantwoordelijke mogelijk verplicht zijn om de persoonsgegevens openbaar te maken op verzoek van bevoegde overheidsinstellingen voor de verwerking van de gegevens."
          }
        },
        "1": {
          title: "Veiligheidsmaatregelen",
          copy: {
            "0": "Welcome to My Garden heeft beveiligingsmaatregelen ontwikkeld die op technologisch en organisatorisch niveau zijn aangepast om vernietiging, verlies, vervalsing, wijziging, verboden toegang of de foutieve openbaarmaking van persoonsgegevens aan derden te voorkomen, evenals elke andere verboden verwerking van deze gegevens.",
            "1": "Welcome to My Garden kan in geen geval aansprakelijk worden gesteld voor enige directe of indirecte schade die voortvloeit uit het onjuist of onrechtmatig gebruik van jouw persoonsgegevens door een derde partij.",
            "2": "Je moet ten allen tijde de beveiligingsinstructies naleven, waaronder het voorkomen van alle verboden toegang tot jouw inlog gegevens, inclusief je wachtwoord. Je bent zelf verantwoordelijk voor het gebruik van de website op jouw computer, vanaf je IP-adres en met jouw identificatiegegevens. \u200D"
          }
        }
      }
    },
    definitions: {
      title: "DEFINITIES EN JURIDISCH KADER",
      articles: {
        "0": {
          title: "Persoonsgegevens of gegevens",
          copy: "Alle informatie over een natuurlijke persoon, een rechtspersoon, een instelling of een vereniging die direct of indirect is of zou kunnen worden ge\xEFdentificeerd door verwijzing naar andere informatie."
        },
        "1": {
          title: "Gebruiksgegevens",
          copy: "Informatie die automatisch wordt verzameld uit deze applicatie (of externe services die in deze applicatie worden gebruikt), waaronder: de IP-adressen of domeinnamen van de computers die door de gebruikers van deze applicatie worden gebruikt, de URI-adressen (Uniform Resource Identifier), de tijd van het verzoek, de methode die is gebruikt om het verzoek bij de server in te dienen, de grootte van het bestand dat daarop is ontvangen, de numerieke code die de status van het serverantwoord aangeeft (geslaagd, fout, enz.), de functies van de browser en het besturingssysteem van de gebruiker, de verschillende tijdgegevens per bezoek (zoals de tijd doorgebracht op elke pagina van de applicatie) en de gegevens die zijn verzameld tijdens het gebruik van de applicatie (bijvoorbeeld: de volgorde van bezochte pagina's of andere parameters over het besturingssysteem van het apparaat)."
        },
        "2": {
          title: "Gebruiker",
          copy: "De persoon die deze applicatie gebruikt en die moet instemmen met of gemachtigd is door de betrokkene naar wie de persoonsgegevens verwijzen."
        },
        "3": {
          title: "De betrokken persoon",
          copy: "De persoon naar wie de peroonsgegevens verwijzen."
        },
        "4": {
          title: "Data processor ",
          copy: "De natuurlijke persoon, rechtspersoon, overheidsadministratie of elke andere instelling, vereniging of organisatie die door de gegevensbeheerder is gemachtigd om de persoonsgegevens te verwerken in overeenstemming met dit privacybeleid."
        },
        "5": {
          title: "Verantwoordelijke voor de verwerking van de gegevens",
          copy: "De natuurlijke persoon, rechtspersoon, overheidsadministratie of enige andere instelling, vereniging of organisatie met het recht, ook samen met de verantwoordelijke voor de verwerking van de gegevens om beslissingen te nemen met betrekking tot de doeleinden en methoden voor de verwerking van persoonsgegevens en de gebruikte middelen, waaronder veiligheidsmaatregelen met betrekking tot de exploitatie en het gebruik van deze applicatie. De verantwoordelijke voor de verwerking van de gegevens is de eigenaar van deze applicatie, tenzij anders aangegeven."
        },
        "6": {
          title: "Deze applicatie",
          copy: "De hardware of software tools waarmee persoonsgegevens verzameld worden "
        },
        "7": {
          title: "Cookie",
          copy: "Klein stukje gegevens opgeslagen op het apparaat van de gebruiker. Zie ons Cookiebeleid."
        }
      },
      "legal-info": {
        title: "LEGALE INFORMATIE",
        copy: "Kennisgeving aan Europese gebruikers: deze privacyverklaring is opgesteld met inachtneming van de verplichtingen uit art. 10 van de Europese richtlijn 95/46 / EG en de bepalingen van de Europese richtlijn 2002/58 / EG, evenals de herziening in richtlijn 2009/136 / EG betreffende cookies."
      }
    },
    "change-warning": {
      title: "Aanpassingen in dit privacybeleid",
      copy: "De controleur voor de verwerking van de gegevens heeft het recht om dit privacybeleid op elk moment te wijzigen door gebruikers op deze pagina op de hoogte te stellen. We raden aan deze pagina te controleren op mogelijke wijzigingen. De datum van de laatste wijziging wordt onderaan de pagina aangegeven. Als een gebruiker bezwaar maakt tegen een wijziging in het beleid, mag de gebruiker deze applicatie niet blijven gebruiken. Men zou de verwerkingsverantwoordelijke kunnen verzoeken om de persoonsgegevens te verwijderen. Tenzij anders aangegeven, is het op dat moment geldige privacybeleid van applicatie op alle persoonsgegevens die de verwerkingsverantwoordelijke heeft opgeslagen voor de verwerking van de gegevens over gebruikers."
    }
  },
  "terms-of-use": {
    title: "Gebruiksvoorwaarden",
    "last-updated": "Laatst bijgewerkt: 30 Mei 2020",
    intro: {
      "0": {
        copy: 'Welcome to My Garden is een netwerk zonder winstoogmerk van burgers die gratis kampeerplekken aanbieden aan trage reizigers. Deze Servicevoorwaarden (<span class="bold">"Voorwaarden"</span>) zijn van toepassing op jouw toegang tot en gebruik van de website en het gebruik van het netwerk (gezamenlijk ons \u200B\u200B<span class="bold">"Platform"</span>) dat wordt aangeboden door Welcome to My Garden.'
      },
      "1": {
        copy: "Het gebruik van dit platform is onderhevig aan een aantal regels. Hieronder vind je de algemene voorwaarden van ons platform, omdat we ervan overtuigd zijn dat duidelijke regels de beste garantie bieden voor een respectvolle gemeenschap. Door een account aan te maken of op een andere manier het platform te betreden, ga je akkoord met deze Voorwaarden."
      },
      "2": {
        copy: "Omdat Welcome to My Garden de feedback van de gebruikers van hun platform op prijs stelt, verwelkomen we alle idee\xEBn om het platform verder te verbeteren. Je kunt jouw suggesties e-mailen naar {support}."
      }
    },
    articles: {
      "0": {
        title: "\u200DWie kan registreren op het platform?",
        descriptions: {
          "0": {
            copy: "Elke burger die een gratis kampeerplek in zijn tuin wil aanbieden aan trage reizigers en elke trage reiziger (fietsers en wandelaars) die gebruik wil maken van het netwerk. Als je jouw tuin wil toevoegen of contact wilt opnemen met een host, moet je een account aanmaken. Alleen geregistreerde deelnemers kunnen actieve gebruikers zijn. Je kan registreren met je e-mailadres."
          },
          "1": {
            copy: "Het aanmaken van een account door een gebruiker geeft deze gebruiker geen eigendom over het account. Welcome to My Garden heeft het recht om accounts te weigeren, op te schorten of te verwijderen, bijvoorbeeld als de gebruiker zich niet aan de volgende regels houdt of als er melding zou zijn van ongepast gedrag door een host of gast."
          }
        },
        info: {
          "0": {
            title: "Elk account moet voldoen aan de volgende regels: \u200D",
            sections: {
              "0": {
                title: "Elk account is strikt persoonlijk",
                copy: "Elk account moet uniek zijn en gekoppeld aan een echt persoon. Als je je registreert voor een account, moet je nauwkeurige account informatie verstrekken en deze informatie onmiddellijk bijwerken als deze verandert. Elke gebruiker heeft het recht om \xE9\xE9n account aan te maken. Als wordt vastgesteld dat \xE9\xE9n persoon meerdere accounts heeft, behoudt Welcome to My Garden het recht om al deze accounts te verwijderen. Elke gebruiker moet ouder zijn dan 18 jaar."
              },
              "1": {
                title: "Een account mag niet overgenomen worden door een andere persoon",
                copy: "Aangezien elk account strikt gekoppeld is aan een specifieke persoon, kan dit account niet worden overgedragen aan een andere persoon zonder toestemming van Welcome to My Garden. Dit transferverbod moet in de ruimste zin beschouwd worden. Welcome to My Garden heeft het recht om dit account te weigeren of te verwijderen in geval van inbreuken."
              },
              "2": {
                title: "Een account mag niet gebruikt worden voor commerci\xEBle doeleinden",
                copy: "Het Welcome to My Garden-platform is bedoeld om burgers in staat te stellen hun tuinen aan te bieden als gratis kampeerplekken en om het mogelijk te maken voor trage reizigers dit netwerk te gebruiken. Een account kan daarom alleen voor deze doeleinden worden gebruikt. Elk gebruik van het account met als enig doel het genieten van een commercieel voordeel is ten strengste verboden."
              },
              "3": {
                title: "De accountgegevens moeten altijd vertrouwelijk blijven",
                copy: "Het is niet toegestaan \u200B\u200Bdat een andere persoon dan de daadwerkelijke persoon die het account heeft aangemaakt, dit account gebruikt. De persoon die het account heeft aangemaakt, moet ervoor zorgen dat hij/zij het wachtwoord en de inloggegevens veilig bewaart. We raden ten zeerste aan om een \u200B\u200Bsterk wachtwoord te gebruiken (een wachtwoord met een combinatie van kleine letters, hoofdletters en cijfers). We raden je aan een wachtwoordbeheerder te gebruiken. Welcome to My Garden kan in geen geval aansprakelijk worden gesteld voor verlies of schade aan het account als de gebruiker niet aan bovenstaande voorwaarden voldoet. Welcome to My Garden kan niet verantwoordelijk worden gehouden voor diefstal van een account, bijvoorbeeld door 'phishing'. Welcome to My Garden zal haar gebruikers nooit om persoonlijke gegevens zoals een login of wachtwoord vragen via e-mail. Als er om persoonlijke gegevens wordt gevraagd, wordt de gebruiker altijd doorgestuurd naar het platform van Welcome to My Garden. Je bent verantwoordelijk voor alle activiteiten die doorgaan met jouw account en accepteert alle risico's van ongeoorloofde toegang."
              }
            }
          }
        }
      },
      "1": {
        title: "Gebruiksvoorwaarden voor de host",
        info: {
          "0": {
            title: "Door jouw tuin aan het platform toe te voegen, erken je de algemene regels van het platform die hieronder opgesomd zijn: ",
            sections: {
              "0": {
                title: "Geen inkomen",
                copy: "Welcome to My Garden is een netwerk zonder winstoogmerk van burgers die gratis kampeerplekken in hun tuinen aanbieden aan trage reizigers. Daarom mag er geen inkomen uit worden verdiend. Het aanbieden van een tuin tegen betaling is ten strengste verboden en het platform heeft het recht om het account van een host permanent te verwijderen als dit gebeurt."
              },
              "1": {
                title: "Disclaimer",
                copy: "Het Welcome to My Garden-platform is een burgerinitiatief. De vrijwilligers achter Welcome to My Garden zijn niet verantwoordelijk voor verlies, schade of letsel als gevolg van het gebruik van de website en/of tijdens een verblijf in de tuin van een andere burger."
              },
              "2": {
                title: "Geen discriminatie",
                copy: "Welcome to My Garden tolereert geen enkele vorm van discriminatie. Hosts mogen niet discrimineren op basis van ras, etnische achtergrond, nationaliteit, seksuele geaardheid, geslacht, genderidentiteit, sociaaleconomische status, bekwaamheid, filosofische overtuiging, religie, leeftijd, handicap of ziekte."
              }
            }
          }
        }
      },
      "2": {
        title: "Gebruiksvoorwaarden voor de reiziger",
        descriptions: {
          "0": {
            copy: "Gebruikers moeten minstens 18 jaar zijn om het platform te mogen gebruiken. Door een account aan te maken, gaan gebruikers akkoord met de Gebruikersvoorwaarden van Welcome To my Garden. "
          }
        },
        paragraphs: {
          "0": {
            title: "De hosts contacteren",
            copy: {
              "0": "Hosts contacteer je enkel om een verblijf in hun tuin aan te vragen. Eender welke vorm van misbruik van het platform resulteert in opschorting of verwijdering van het gebruikersaccount."
            }
          },
          "1": {
            title: "Verplichting om de hosts op voorhand te contacteren om een verblijf aan te vragen",
            copy: {
              "0": "Gebruikers zijn verplicht om vooraf contact op te nemen met de host om een \u200B\u200Bverblijf aan te vragen, tenzij de host op hun profiel duidelijk heeft aangegeven dat dit niet nodig is. Gebruikers moeten altijd nauwkeurige informatie over zichzelf doorgeven."
            }
          },
          "2": {
            title: "Faciliteiten aangeboden door de host",
            copy: {
              "0": "De host is de enige verantwoordelijke voor de faciliteiten die hij/zij wel of niet ter beschikking stelt van de gebruiker. Door dit platform te gebruiken, erkent en accepteert de gebruiker de voorwaarden van zijn/haar verblijf - al dan niet inclusief toegang tot sanitaire voorzieningen."
            }
          },
          "3": {
            title: "Respect voor de natuur",
            copy: {
              "0": "Reizigers nemen al hun afval mee bij het vertrek. Ze moeten hierbij altijd de natuur, de tuin van de host en hun omgeving respecteren en rekening houden met het Leave No Trace-principe."
            }
          },
          "4": {
            title: "Respect voor de host en de buren",
            copy: {
              "0": "Reizigers moeten altijd respectvol zijn naar de tuin eigenaar toe en lawaai tot een minimum beperken. Ze houden zich ook aan de gemaakte afspraken met de host."
            }
          },
          "5": {
            title: "Geen auto",
            copy: {
              "0": "Het Welcome to My Garden-platform respecteert het milieu en komt alleen tegemoet aan de behoeften van trage reizigers. Dit betekent dat gebruikers alleen te voet, met de fiets of met het openbaar vervoer naar tuinen kunnen reizen. Het gebruik van gemotoriseerde voertuigen is verboden, behalve voor gebruikers met beperkte mobiliteit. Het is wel toegestaan \u200B\u200Bom met een gemotoriseerd voertuig naar de start van een pad te reizen."
            }
          },
          "6": {
            title: "Disclaimer",
            copy: {
              "0": "Het Welcome to My Garden-platform is een burgerinitiatief. De vrijwilligers achter Welcome to My Garden zijn niet verantwoordelijk voor verlies, schade of letsel als gevolg van het gebruik van de website en/of tijdens een verblijf in de tuin van een andere burger."
            }
          }
        }
      },
      "3": {
        title: "Interacties met andere gebruikers",
        paragraphs: {
          "0": {
            title: "Je bent volledig verantwoordelijk voor je interacties met andere gebruikers.",
            copy: {
              "0": "Welcome To My Garden is een platform waarop gebruikers hun tuin vrij ter beschikking kunnen stellen, een tuinverblijf kunnen aanvragen en met elkaar kunnen communiceren om dit doel te bereiken. Gebruikers zijn zelf verantwoordelijk voor alle interacties met andere gebruikers van het platform. Welcome To My Garden heeft geen betrokkenheid en geen verantwoordelijkheden of aansprakelijkheden met betrekking tot communicatie of geschillen tussen twee gebruikers. Voor alle duidelijkheid: Welcome To My Garden is een platform waarmee hosts hun tuin vrij ter beschikking kunnen stellen, zodat gebruikers iemands tuin kunnen gebruiken om te kamperen; en een plek om te communiceren tussen gebruikers. Welcome to My Garden kan niet verantwoordelijk worden gehouden voor de interacties tussen gebruikers of diens gevolgen. Gebruikers stellen Welcome To My Garden (en haar vrijwilligers) vrij van claims, eisen en schade (feitelijk en dientengevolge) van elke soort en aard, bekend en onbekend, vermoed en onvermoed, openbaar gemaakt en niet openbaar gemaakt, voortvloeiend uit of op enigerlei wijze verband houdend met dergelijke geschillen. Houd bij het gebruik van het platform altijd rekening met veiligheid en gezond verstand."
            }
          },
          "1": {
            title: "Identiteitsverificatie",
            copy: {
              "0": "Gebruikers zijn zelf verantwoordelijk voor het bepalen van de identiteit en geschiktheid van andere gebruikers. Als host kun je altijd gebruikers weigeren. Als reiziger kan je zelf bepalen waar je wil verblijven. Welcome To My Garden kan en zal niet de identiteit van elke gebruiker bevestigen. Het platform heeft geen informatie over de criminele achtergrond of moraliteit van de gebruiker. Houd bij het gebruik van het platform altijd rekening met veiligheid en gezond verstand."
            }
          }
        }
      },
      "4": {
        title: "Beperkingen van inhoud en gebruik van het platform",
        descriptions: {
          "0": {
            copy: "Om ervoor te zorgen dat het Welcome to My Garden-platform naar behoren werkt en dat je kan communiceren en verbinding maken met anderen, gelden er enkele beperkingen voor het type inhoud dat via het platform kan worden gepubliceerd. Dit zijn de volgende:"
          }
        },
        paragraphs: {
          "0": {
            title: "Offensief gedrag",
            copy: {
              "0": "Wij geloven sterk in de vrijheid van meningsuiting. Maar, om ervoor te zorgen dat het platform op een constructieve manier door alle gebruikers kan worden gebruikt, staan \u200B\u200Bwe geen aanstootgevend gedrag toe dat intimidatie of bangmakerij inhoudt.",
              "1": "Accounts en gerelateerde accounts die worden gebruikt om de onderstaande acties uit te voeren, kunnen tijdelijk worden geblokkeerd en/of permanent worden verwijderd.",
              "2": "Gewelddadige bedreigingen (direct of indirect): je mag niet dreigen of geweld promoten. Dit omvat ook de bevordering van terrorisme. Intimidatie: je mag niet aanzetten tot of betrokken zijn bij het opzettelijk beledigen of lastigvallen van anderen. Hier zijn enkele factoren waarmee we rekening kunnen houden bij het beoordelen van misbruik: of het belangrijkste doel van het gerapporteerde account intimidatie is of beledigende berichten naar anderen worden gestuurd; of het gerapporteerde gedrag unidirectioneel is of bedreigingen bevat; of het gerapporteerde account anderen aanmoedigt om een \u200B\u200Bander account te intimideren; en of het gerapporteerde account intimiderende berichten verzendt naar een account vanaf meerdere accounts. Haat: je mag geen geweld tegen andere mensen promoten of hen rechtstreeks aanvallen of bedreigen op basis van ras, etnische achtergrond, nationaliteit, seksuele geaardheid, geslacht, genderidentiteit, filosofische overtuiging, religie, leeftijd, handicap of ziekte. We staan \u200B\u200Book geen accounts toe waarvan het hoofddoel is om anderen aan te zetten schade te berokkenen op basis van deze categorie\xEBn. Misbruik van meerdere accounts: het maken van meerdere accounts voor overlappend gebruik om tijdelijke of permanente opschorting van een individueel account te voorkomen, is niet toegestaan. Priv\xE9gegevens: je mag geen vertrouwelijke gegevens en priv\xE9gegevens van anderen publiceren of posten zonder hun uitdrukkelijke toestemming. Deze gegevens omvatten (maar zijn niet beperkt tot): creditcardnummers, adresgegevens, telefoonnummers of gegevens die onder de persoonlijke levenssfeer van een persoon vallen. Nabootsing van identiteit: je mag geen toegang nemen tot het platform als iemand die zich voordoet als iemand anders en je mag op deze manier andere gebruikers niet misleiden, verwarren of bedreigen. Het is mogelijk dat je geen toegang krijgt tot het platform als je iemand anders bedriegt, verwart of bedreigt."
            }
          },
          "1": {
            title: "Vrijwaring",
            copy: {
              "0": "Je zal WelcomeToMyGarden.org (en elk van haar financiers en/of vrijwilligers) verdedigen, vrijwaren en schadeloos stellen van elke claim, eis, actie, schade, verlies, kosten of uitgaven, inclusief maar niet beperkt tot redelijke advocatenkosten, die voortvloeien uit of verband houden met o.m. (a) jouw gebruik van onze diensten; (b) alle inhoud of inzendingen van leden die je verstrekt; (c) schending van deze voorwaarden door jou; (d) schending van rechten van een ander door jou; of (e) je gedrag in verband met de diensten. Verder, als je de diensten namens een entiteit gebruikt, verklaar en garandeer je dat een dergelijke entiteit ermee instemt jou en WelcomeToMyGarden.org te vrijwaren voor schendingen van deze voorwaarden in overeenstemming met deze sectie. Als je verplicht bent om ons te vrijwaren, hebben we het recht, naar eigen goeddunken en zonder enige belemmering, om eender welke \u200B\u200Bactie of procedure te controleren en te bepalen of we deze willen afwikkelen, en zo ja, onder welke voorwaarden."
            }
          }
        }
      },
      "5": {
        title: "Beperking van aansprakelijkheid",
        descriptions: {
          "0": {
            copy: "Welcome to My Garden is niet aansprakelijk jegens gebruikers en/of hosts onder enige aansprakelijkheidstheorie - of deze nu is gebaseerd op contract, onrechtmatige daad, nalatigheid, strikte aansprakelijkheid, garantie of anderszins - voor enige indirecte, daaruit volgende, voorbeeldige, incidentele, bestraffende of speciale schade."
          },
          "1": {
            copy: "IN GEEN GEVAL ZAL WELCOMETOMYGARDEN.ORG, EEN BELGISCHE VERENIGING ZONDER WINSTOOGMERK, HAAR STICHTERS OF VRIJWILLIGERS, AANSPRAKELIJK WORDEN GESTELD VOOR INDIRECTE OF GEVOLGSCHADE, OF ENIGE ANDERE SCHADE VAN ELKE SOORT, INCLUSIEF MAAR NIET BEPERKT TOT VERLIES VAN GEBRUIK, WINST OF GEGEVENS, OF HET NU IN EEN ACTIE BINNEN HET CONTRACT, EEN ONRECHTMATIGE DAAD (INCLUSIEF MAAR NIET BEPERKT TOT NALATIGHEID) OF ANDERSZINS IS, ZELFS ALS WE OP DE HOOGTE WERDEN GESTELD VAN DERGELIJKE SCHADE, VOORTVLOEIEND UIT OF IN VERBAND MET: (A) HET GEBRUIK OF DE ONMOGELIJKHEID OM ONZE DIENSTEN TE GEBRUIKEN; (B) DE KOSTEN VOOR DE VERVANGING VAN GOEDEREN, DIENSTEN OF INFORMATIE DIE IS GEKOCHT OF VERKREGEN TEN GEVOLGE VAN INFORMATIE DIE IS VERKREGEN UIT, OF TRANSACTIES DIE ZIJN UITGEVOERD DOOR DEZE DIENSTEN; (C) BEKENDMAKING VAN,ONGEAUTORISEERDE TOEGANG TOT OF WIJZIGING VAN JOUW INHOUD; (D) SCHADE VOOR VERLIES OF VERBETERING VAN GEGEVENS OF PROGRAMMA\u2019S, ONDERBREKING VAN DE DIENST OF AANKOOP VAN VERVANGENDE DIENSTEN; (E) VERKLARINGEN, GEDRAG OF NALATIGHEID VAN ENIGE DIENSTVERLENERS OF ANDERE DERDEN OP ONZE DIENSTEN; (F) JOUW OF IEDER ANDERS GEDRAG OF HANDELINGEN IN VERBAND MET HET GEBRUIK VAN DE DIENSTEN, MET INBEGRIP VAN MAAR NIET BEPERKT TOT LICHAMELIJKE LETSELS, EMOTIONELE PIJN, OVERLIJDEN OF ENIGE ANDERE SCHADE ALS GEVOLG VAN COMMUNICATIE OF SAMENKOMSTEN MET ANDERE GEREGISTREERDE GEBRUIKERS VAN ONZE DIENSTEN OF PERSONEN AAN JOU VOORGESTELD DOOR ONZE DIENSTEN, ZOWEL ONLINE ALS OFFLINE; OF (G) ENIGE ANDERE ZAAK DIE VOORTVLOEIT UIT, VERBAND HOUDT MET OF VERBONDEN IS MET ONZE DIENSTEN OF DEZE VOORWAARDEN."
          }
        }
      },
      "6": {
        title: "Spam",
        descriptions: {
          "0": {
            copy: "We streven er ten allen tijde naar om de Welcome to My Garden-platform gebruiker te beschermen tegen technisch misbruik en spam. Accounts die worden gebruikt om de onderstaande acties uit te voeren, kunnen tijdelijk worden geblokkeerd of permanent worden verwijderd."
          },
          "1": {
            copy: "Malware / phishing / virussen / wormen / Trojans: je mag geen schadelijke inhoud of links naar dergelijke inhoud plaatsen om de browsers of computers van iemand anders te beschadigen of te verstoren, of om iemands privacy te schenden. Spam: je mag het Welcome to My Garden-platform niet gebruiken om mensen te spammen."
          }
        }
      },
      "7": {
        title: "Schending van toepasselijke wetten",
        descriptions: {
          "0": {
            copy: "Het gebruik van het account mag op geen enkele manier inbreuk plegen op de toepasselijke wetgeving. Dit omvat inbreuken op de privacywetgeving, intellectuele eigendomsrechten, het strafwetboek, enz."
          },
          "1": {
            copy: "Het account mag op geen enkele manier worden gebruikt om illegale activiteiten te promoten."
          }
        }
      },
      "8": {
        title: "Bij overtreding van bovengenoemde redenen",
        descriptions: {
          "0": {
            copy: "Welcome to My Garden heeft het recht om de relevante berichten te verwijderen als het inbreuken op de bovengenoemde regels detecteert, en kan zelfs gebruikersaccounts opschorten of permanent verwijderen."
          },
          "1": {
            copy: "Welcome to My Garden kan op geen enkele manier aansprakelijk worden gesteld voor berichten geplaatst door gebruikers of derden, die in strijd zijn met de hierboven gespecificeerde regels. Als je als gebruiker een inbreuk ontdekt, meld dit dan aan het volgende e-mailadres: {support}"
          },
          "2": {
            copy: "Het kan gebeuren dat via het platform schadelijke bestanden worden gedownload, al dan niet vanwege een gebruiker; of dat gebruikers schadelijke hyperlinks plaatsen. Elke download door een gebruiker of klik op een hyperlink, geplaatst door een gebruiker, gebeurt op eigen risico van de gebruiker. Eventuele schade is volledig en uitsluitend de verantwoordelijkheid van deze gebruiker."
          }
        }
      },
      "9": {
        title: "Intellectuele eigendomsrechten",
        descriptions: {
          "0": {
            copy: "Welcome to My Garden respecteert de intellectuele eigendomsrechten van anderen en verwacht dat gebruikers van dit platform ook deze voorgenoemde rechten respecteren. Welcome to My Garden behoudt zich het recht voor om inhoud te verwijderen die inbreuk pleegt op de intellectuele eigendomsrechten. Herhaalde inbreuken op welke intellectuele eigendomsrechten dan ook door een gebruiker zullen leiden tot de opschorting of verwijdering van het account door Welcome To my Garden."
          },
          "1": {
            copy: "Inbreuken op intellectuele eigendomsrechten kunnen worden gemeld via het volgende email adres: {support}."
          }
        }
      },
      "10": {
        title: "Eigendomsrechten Welcome to My Garden",
        descriptions: {
          "0": {
            copy: "De broncode van Welcome to My Garden is open source. Je stemt ermee in gebonden te zijn aan en te voldoen aan elke licentieovereenkomst die van toepassing is op deze open source-software."
          }
        }
      },
      "11": {
        title: "Wijzigingen in deze voorwaarden",
        descriptions: {
          "0": {
            copy: "We kunnen regelmatig wijzigingen aanbrengen in deze voorwaarden. Als we wijzigingen aanbrengen, zullen we de gewijzigde voorwaarden op ons platform plaatsen en de datum Laatst bijgewerkt hierboven aanpassen. We zullen ook trachten je hiervan op de hoogte te stellen door een e-mailmelding te sturen naar het adres dat aan jouw account is gekoppeld of door een melding via ons platform. Tenzij anders vermeld in onze kennisgeving, zijn de gewijzigde Voorwaarden onmiddellijk van kracht. Jouw voortdurende toegang tot en het gebruik van ons platform - nadat we je van de gewijzigde Voorwaarden op de hoogte hebben gesteld, bevestigt dat je de wijzigingen accepteert. Wijzigingen in deze Voorwaarden hebben in geen geval een terugwerkende kracht. Als je niet akkoord gaat met de gewijzigde voorwaarden, moet je de toegang tot en het gebruik van ons platform stopzetten."
          }
        }
      }
    }
  },
  stmf,
  fallback
};
export { account, auth, chat, cookies, nl as default, fallback, faq, garden, generics, index, map, recommendations, register, rules, stmf, tagline, ui };
