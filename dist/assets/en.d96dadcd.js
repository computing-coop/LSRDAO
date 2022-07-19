const tagline = "Leisure Cooperative is a marketplace for sharing leisure resources and knowledge.";
const generics = {
  password: "Password",
  email: "Email",
  "cookie-policy": "Cookie policy",
  "privacy-policy": "Privacy policy",
  "terms-of-use": "Terms of use",
  home: "Home",
  map: "Map",
  rules: "Rules",
  faq: {
    acronym: "FAQ",
    explicit: "Frequently asked questions"
  },
  chat: "Chat",
  account: "Account",
  "sign-out": "Sign out",
  "sign-in": "Sign in",
  garden: "Garden",
  shop: "Shop",
  slowby: "DAO"
};
const ui = {
  card: {
    "register-here": "Register here"
  }
};
const index = {
  "banner-stmf": {
    copy: "Want to prepare your slow travels with the community while supporting Welcome To My Garden? Check out our {stmfLink} (from 3 to 29 June)!",
    link: "Slow Travel Mini Festival"
  },
  shop: {
    banner: {
      copy: "Welcome To My Garden now has its {title} with wooden WTMG signs and thank you postcards for hosts. Go check it out at {link}!",
      title: "online shop"
    }
  },
  slowby: {
    banner: {
      copy: "Do you want to join the cooperative? You can learn more and apply here {title} - go check it out at {link}.",
      title: "LeisureDAO",
      url: "https://lsrdao.xyz"
    }
  },
  intro: {
    copy: "A marketplace for sharing leisure resources and knowledge in the experience economy.",
    "add-garden": "Add your listing",
    "explore-map": "Explore map",
    "learn-more": "Learn more"
  },
  steps: {
    "0": {
      title: "Step 1: Sign up to become or find a host",
      copy: "Do you want to open up your resource? {addGardenLink}. Are you looking for a somewhere to go? Find what you need and contact your host! Arrange a date and time to share and go!",
      "add-garden-link-text": "Add it to the map"
    },
    "1": {
      title: "Step 2: Plan your journey",
      copy: "After you\u2019ve made arrangements with your hosts, figure out your walking/biking route to your host\u2019s garden. Introduce yourself and pitch your tent for the night."
    },
    "2": {
      title: "Step 3: Pitch your tent and have fun!",
      copy: "Enjoy your stay, whether that means a quiet night all by yourself, having fun with your friends or family or hanging out with your hosts - whatever both parties prefer. Say fond farewells and continue on your hike or ride the next day!"
    }
  },
  faq: {
    title: "All you need to know",
    copy: "Here are the most important things you need to know about your next adventure. Please read this FAQ section thoroughly so that you know what you\u2019re getting yourself into. More questions? Read more in {faqLink}!",
    "faq-link-text": "our complete FAQ",
    questions: {
      "0": {
        title: "Who is Welcome To My Garden for?",
        copy: "Welcome To My Garden has been created for hikers and cyclists who need a camping spot on their trail at the end of the day. It isn\u2019t meant to replace fully-fledged campsites; just a safe spot for the night! Consider it an addition to Belgium\u2019s network of bivouacking sites. Welcome To My Garden is non-commercial: no money should exchange hands. This means that as a host, you cannot ask your guests to pay for their stay."
      },
      "1": {
        title: "How do I get to my camping spot?",
        copy: "Welcome To My Garden is for slow travellers only. Please walk or bike to your camping spot. Of course you can use public transport or your car to get to the start of your trail - as long as you don't turn up at your host's in your car!"
      },
      "2": {
        title: "How do I request a stay?",
        copy: "Except if clearly stated on the host\u2019s profile, you should always contact the host in advance. When you request a stay, please provide some information about yourself, your arrival date and time."
      },
      "3": {
        title: "What about facilities?",
        copy: "Basically hosts just offer a corner in their garden for you to pitch your tent on. In addition, they may offer access to drinking water, a toilet and electricity. They are not obliged to do so though: all of these are bonuses. Consider a garden as a bivouac spot; not a fully-fledged campsite."
      },
      "4": {
        title: "Does Welcome To My Garden cost anything?",
        copy: "Using Welcome To My Garden is completely free. However, as a platform we do incur costs. If you want to make a donation that will put a big smile on our faces! We are a not-for-profit initiative, so we\u2019re not making any money out of this."
      }
    }
  },
  partners: {
    title: "Our partners"
  },
  support: {
    title: "Support us",
    copy: "Leisure Cooperative is free while in development, but we still have to pay a couple of bills. {donationLink} to keep us going!",
    "donation-link-text": "Make a donation"
  },
  "holiday-donations": {
    title: "Everyone deserves leisure",
    copy: "Did you know that 22% of children can't go on a holiday? After the lockdown, they need some breathing room now more than ever. Thanks to your contribution, the most vulnerable groups can also experience a getaway.",
    "link-text": "Donate now"
  }
};
const rules = {
  title: "Rules",
  description: "Here\u2019s how Welcome To My Garden works. Make sure to read the rules before starting your adventure! After all, this platform will only work well if we all play by the rules.",
  rules: {
    "0": {
      title: "Covid-19 warning",
      copy: "At any time adhere to the government's measures to stop the spread of Covid-19."
    },
    "1": {
      title: "Network of citizens",
      copy: "Welcome To My Garden is a network of citizens offering free camping spots in their gardens to slow travellers. It is a not-for-profit initiative and no income should be made from it. Welcome To My Garden will not take any responsibility for any loss, damage or injury incurred during a stay."
    },
    "2": {
      title: "Send a request in advance to the garden owner",
      copy: "Garden owners might not be home and ready to welcome you at all times. We ask users to contact the garden owner in advance to check availability directly. This should be done by sending a request to the host through their profile. After establishing the initial connection you can exchange contact details, so that you can stay in touch and update your host about your arrival time by email or phone, depending on their preference. When you send a request, provide some information about yourself and about your expected arrival time."
    },
    "3": {
      title: "No car rule",
      copy: "Welcome To My Garden respects the environment and has been set up for slow travellers only. This means you can only reach the camping spots on foot, by bicycle or public transport. Getting there with your private car is forbidden. You are allowed to drive to the start of your hiking or biking trail \u2013 as long as you don\u2019t turn up at the camping spots in your car."
    },
    "4": {
      title: "Maximum duration of stay",
      copy: "You can stay at a camping spot for a maximum of 48 hours. Always check with the garden owner."
    },
    "5": {
      title: "Maximum amount of tents",
      copy: "Garden owners define how many tents they can accommodate each night (this is not Dour Festival). Please respect their choice."
    },
    "6": {
      title: "Facilities",
      copy: "Facilities may vary from one camping spot to another. Some garden owners might offer access to their bathrooms; others might prefer not to. Please respect their choices in these matters as well."
    },
    "7": {
      title: "Respect for nature",
      copy: "All your waste has to be taken away. This includes pee and poo if there\u2019s no toilet available: find a bush or tree outside the garden for Number One; bag your Number Two and throw it in a bin the next day. Respect nature and the garden owners: apply the Leave No Trace principle as you would if bivouacking out in the wild."
    },
    "8": {
      title: "No noise policy",
      copy: "Please respect the camping spot owners\u2019 privacy. So don\u2019t sing along with Celine Dion at the top of your voice or generate any other type of noise \u2013 definitely not after 10pm!"
    },
    "9": {
      title: "Have fun!",
      copy: "This is a great opportunity to meet other people and have fun! Learn a few words of French, Dutch or German if you\u2019re travelling in a different region than your own. Be curious, share stories and build new friendships!"
    },
    "10": {
      title: "Spread the word",
      copy: "Would you like to open up your garden or do you know someone who would be happy to? Spread the word about Welcome To My Garden! You can invite them to like our Facebook Page too."
    }
  },
  message: "Happy camping!"
};
const recommendations = {
  title: "Slow travel inspirations",
  description: "Planning to discover Belgium on foot or by bike? Here are some links and tools we can warmly recommend!",
  "recommendations-groups": {
    "0": {
      title: "Planning tools, apps & maps",
      recommendations: {
        "0": "Route planner for cycling and hiking: BRouter",
        "1": "Another great route planner: Komoot",
        "2": "Great route finder and planner: OutdoorActive",
        "3": "Great navigation app for cycling and hiking: OSMAnd",
        "4": "Another great navigation app: ViewRanger",
        "5": "Overview of the whole cycling network cycling layer of OpenStreetMap"
      }
    },
    "1": {
      title: "Trail info",
      recommendations: {
        "0": "Great collection of hiking trails: RouteYou",
        "1": "Knooppunten network planner: Wandelknooppunt",
        "2": "Long distance trails in Wallonia: le RAVeL",
        "3": "Long distance biking trails in Flanders: LF network Flanders",
        "4": "Long distance hiking trails in Flanders and Wallonia: Grote Routepaden"
      }
    },
    "2": {
      title: "Other accomodation services",
      recommendations: {
        "0": "Hospitality network for cyclists: WarmShowers",
        "1": "More detailed information about all bivouac places: Bivakzone.be"
      }
    }
  },
  message: "Enjoy!",
  contact: "Anything else we should add to this list? Drop us a line at {support} to let us know."
};
const faq = {
  title: "FAQ",
  description: "Frequently asked questions",
  clusters: {
    general: {
      title: "General",
      questions: {
        what: {
          title: "What is Welcome To My Garden?",
          copy: "Welcome To My Garden is a network of citizens opening up their gardens to slow travellers in need of a camping spot. It's a not-for-profit initiative set up by a group of citizens. The idea was born during the 2020 Covid-19 lockdown in Belgium."
        },
        who: {
          title: "Who is Welcome To My Garden for?",
          copy: "Welcome To My Garden has been created for hikers and cyclists who need a camping spot on their trail at the end of the day. It isn\u2019t meant to replace fully-fledged campsites; just a safe spot for the night! Consider it an addition to Belgium\u2019s network of bivouacking sites."
        },
        how: {
          title: "How does Welcome To My Garden work?",
          copy: 'People who want to open up their garden to travellers can add their garden by filling out the form on the website (click the "Add your garden" button). People who want to stay at one of the camping spots can then contact the garden owners to arrange their stay.'
        }
      }
    },
    "slow-travellers": {
      title: "Slow Travellers",
      questions: {
        "how-camping": {
          title: "How do I get to my camping spot?",
          copy: "Welcome To My Garden has been set up to meet the needs of slow travellers: hikers and cyclists who need a camping spot at the end of the day. For this reason you are supposed to arrive at your camping spot on foot or by bike, or by public transport \u2013 definitely not by car. Of course you can drive to the start of your trail \u2013 as long as you don\u2019t turn up at your host\u2019s in your car!"
        },
        "what-facilities": {
          title: "What facilities will you find in the garden?",
          copy: "Basically hosts just offer a corner in their garden for you to pitch your tent on. In addition, they may offer access to drinking water, a toilet and electricity. They are not obliged to do so though: all of these are bonuses. Consider a garden as a bivouac spot; not a fully-fledged campsite."
        },
        cost: {
          title: "Does Welcome To My Garden cost anything?",
          copy: "Using Welcome To My Garden is completely free. However, as a platform we do incur costs. If you want to make {donationLink} that will put a big smile on our faces! We are a not-for-profit initiative, so we\u2019re not making any money out of this. This means any money you donate will go directly towards covering the costs of the project. You can look into our expenses too on the donation page."
        },
        "no-garden": {
          title: "I don\u2019t have a garden. Can I still travel to other people\u2019s gardens?",
          copy: "Yes! You don\u2019t need to offer a garden to use one. The platform is open to all slow travellers!"
        },
        "how-long": {
          title: "How long can I stay there?",
          copy: "Since these camping spots only cater to the needs of slow travellers who are on a multi-stage trek or bike ride, you can stay at a camping spot for a maximum of 48 hours (two nights). Of course you can move on to the next camping spot after that! And the next. And the next\u2026Always check with the host how long you can stay, some hosts will prefer that you stay one night only."
        },
        animals: {
          title: "Can I bring my family? My children? My dog?",
          copy: "It\u2019s best to ask your host whether they are open to children and/or dogs. Quite a few hosts have already indicated on their profile that they are open to families, but even if they haven\u2019t, you can always ask!"
        },
        "no-toilet": {
          title: "So, what if there\u2019s no toilet?",
          copy: "Not every host may offer access to a toilet. In this case, please find a spot outside the garden that meets your needs. Pee behind a tree, and bag your Number Two so you can bin it the next day. Apply the Leave No Trace principle as you would when camping out in the wild."
        },
        "covid-safe": {
          title: "And if there is a toilet, how do we guarantee Covid-19 doesn\u2019t get transmitted?",
          copy: "Please bring hand sanitizer and wet wipes so you can clean your hands and any surfaces you\u2019ve touched, such as the toilet seat, flush button, tap and door handle. You can also wear a mask if you need to enter your host\u2019s house for facilities. This way you help guarantee that Covid-19 does not get transmitted, in case you or any of the other users of the bathroom happen to carry it. Of course, if you know you might be sick don\u2019t go in the first place!"
        },
        "tent-type": {
          title: "What type of tent can I bring?",
          copy: "Since WTMG is only catering to hikers and cyclists, we expect you to bring nothing bigger than a trekker\u2019s tent. That means it should easily fit in your pack. If you\u2019re not sure your tent will fit in your host\u2019s garden, please consult them before leaving."
        }
      }
    },
    hosts: {
      title: "Hosts",
      questions: {
        privacy: {
          title: "How does Welcome To My Garden guarantee my privacy as a host?",
          copy: "All your personal details are protected by the login system. If you are a host, we will not display your house number or exact location on the map. You can give this to your guests once you\u2019re in touch with them. You decide how you want them to contact you: by email, by phone, or both."
        },
        messaging: {
          title: "I\u2019ve received a message from a slow traveler, where should I answer it?",
          copy: "The conversation between hosts and travelers takes place via the chat on the platform. If you receive a notification email that you received a message, go to {chatLink} to answer."
        },
        suspend: {
          title: "I would like to suspend my garden for a while but I will be back soon! How do I do this?",
          copy: "Go to {accountLink}. In the category -Your garden-, unthick the box -Shown on the map-. The garden will still be saved in the platform but won\u2019t appear on the map. When you\u2019re back, just thick the box again and you can start welcoming slow travellers again!"
        },
        issue: {
          title: "I\u2019ve had an issue with a guest or a host. How do I report it?",
          copy: "Any issue or misconduct should be reported to Welcome To My Garden by email {support}. In case of misconduct we reserve the right to remove unilaterally this person\u2019s account (see Terms of Use)."
        }
      }
    },
    "technical-support": {
      title: "Technical support",
      questions: {
        privacy: {
          title: "I just signed up but I haven\u2019t received the confirmation email.",
          copy: "Contact the volunteer support team {support} and they will help you verify your email!"
        },
        messages: {
          title: "I have issues reading messages.",
          copy: "First, try to log in using a different browser such a Firefox or Google Chrome. If it doesn\u2019t work, contact the support. There\u2019s always a solution to everything, we\u2019ll find it together!"
        },
        "update-email": {
          title: "I would like to update my email address or delete my account. How do I do this?",
          copy: "We take your data very seriously. If you\u2019d like to update your email or fully delete your account from the platform, please contact our support {support}. Don\u2019t forget to confirm your email address you\u2019d like to amend or delete. "
        },
        newsletter: {
          title: "I would love to receive your next newsletter! What should I do?",
          copy: "To receive our next newsletter, go to {accountLink} and tick the box \u201CWelcome To My Garden has news to share\u201D. If you\u2019d like to stop receiving news, untick the same box."
        },
        "text-in-english": {
          title: "There\u2019s text in English, whereas it\u2019s not my preferred language. How can I change this?",
          copy: "If some text isn\u2019t translated to your preferred language yet, then it will appear in English. You can help us translate Welcome To My Garden to your preferred language. Go to {communityTranslationsLink} to get started."
        }
      }
    },
    other: {
      title: "Other",
      questions: {
        "become-volunteer": {
          title: "Can I become a volunteer?",
          copy: "We are currently looking for volunteers to translate Welcome To My Garden in other languages! The more tents we\u2019ll have on the map, the more slow travelling will become the new normal. If you want to be part of the adventure, send us an email to {support} or join our slack (link at the bottom)."
        },
        "fb-page": {
          title: "Why is the Facebook page only in English?",
          copy: "First of all, there is a very practical reason: English is the only language the entire team can communicate in fluently enough! We also want WTMG to be open to everyone, so that people in other countries can implement the initiative in their country too. On the Facebook page we will stick to English. If you feel more comfortable writing in Dutch or French please do!"
        },
        warmshowers: {
          title: "How does Welcome to My Garden differ from other platforms such as Warmshowers?",
          copy: "There are quite a few other platforms out there that cater to the needs of (slow) travellers. Whereas Warmshowers is for cyclists only, WTMG is for both hikers and cyclists. Also, WTMG is all about tents, not beds. You could consider it the outdoor version of Couchsurfing. There is a commercial initiative called Campspace in the Netherlands which does more or less the same thing as WTMG, but you have to pay for your camping spot. WTMG is a free initiative, and you don\u2019t need to pay your host for your stay."
        }
      }
    }
  },
  donation: "a donation",
  "instruction-page": "this instructions page"
};
const cookies = {
  title: "Cookie policy",
  articles: {
    "0": {
      title: "What Are Cookies",
      copy: {
        "0": `As is common practice with almost all professional websites, this site uses cookies. Cookies are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored. However, this may downgrade or 'break' certain elements of the site functionality. For more general information on cookies <a href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/HTTP_cookie&amp;sa=D&amp;ust=1592214262286000"> see this Wikipedia article on HTTP Cookies.</a>`
      }
    },
    "1": {
      title: "How We Use Cookies",
      copy: {
        "0": "We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use."
      }
    },
    "2": {
      title: "Disabling Cookies",
      copy: {
        "0": `You can prevent cookies being downloaded by adjusting your browser settings (see the Help menu of your browser to find out how to do this). Please be aware that disabling cookies might affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in disabling certain functionality and features of this site as well. If you'd like to disable cookies, we recommend using <a href="https://www.google.com/url?q=https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/&amp;sa=D&amp;ust=1592214262287000"> Privacy Badger</a> on Firefox.`
      }
    },
    "3": {
      title: "The Cookies We Set",
      copy: {
        "0": "If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out. However, in some cases they may remain afterwards to remember your site preferences when logged out.",
        "1": "We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.",
        "2": "This site might offer newsletter or email subscription services in the future and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.",
        "3": "When you submit data through a form such as those found on contact pages or comment forms, cookies may be set to remember your user details for future correspondence.",
        "4": "In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies, so that this information can be recalled whenever you interact with a page that is affected by your preferences."
      }
    },
    "4": {
      title: "Third Party Cookies",
      copy: {
        "0": "In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.",
        "1": "This site uses Google Analytics, which is one of the most widespread and trusted analytics solutions on the web. We use it to help us to understand how you use this site and to discover how we can improve your experience. These cookies may track things such as how much time you spend on the site and which pages you visit, so we can continue to produce engaging content.",
        "2": 'For more information on Google Analytics cookies, <a href="https://www.google.com/url?q=https://analytics.google.com/analytics/web/%23/&amp;sa=D&amp;ust=1592214262289000">see the official Google Analytics page.</a>',
        "3": "Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how much time you spend on this site or which pages you visit, to help us to understand how we can improve the site for you. From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features, these cookies may be used to ensure that you receive a consistent experience during your visit, whilst ensuring that we understand which optimisations our users appreciate the most."
      }
    },
    "5": {
      title: "More Information",
      copy: {
        "0": "Hopefully this page has clarified things for you. As previously mentioned, if there is anything that you aren&#39;t sure you need or not, it&#39;s usually safer to leave cookies enabled - just in case it does interact with one of the features you use on our site. If you are still looking for more information, you can contact us at {support}."
      }
    }
  }
};
const garden = {
  facilities: {
    labels: {
      water: "Water",
      "drinkable-water": "Drinkable water",
      toilet: "Toilet",
      bonfire: "Bonfire",
      electricity: "Electricity",
      shower: "Shower",
      tent: "Tent"
    }
  },
  filter: {
    title: "Filter",
    "garden-facilities": "Garden Facilities",
    "garden-capacity": "Garden Capacity",
    "spots-available": "Tent spots available",
    min: "Minimum",
    "no-places": "No places found",
    "search-city": "Search for a city",
    "all-filters": "All filters",
    "apply-filter": "Apply filter",
    available: "{styledAmount} {amount, plural, one {garden} other {gardens}} available with the active filters.",
    "min-capacity": "Min. {capacity} {capacity, plural, one {tent} other {tents}}"
  },
  drawer: {
    facilities: {
      capacity: "Space for {styleCapacity} {capacity, plural, one {tent} other {tents}}"
    },
    owner: {
      "your-garden": "Your Garden",
      button: "Manage garden"
    },
    guest: {
      button: "Contact host",
      login: "You must {signInLink} to contact hosts",
      "sign-link-text": "sign in"
    },
    unclaimed: "You can contact this host as soon as they have created their account."
  },
  add: {
    title: "Add your garden"
  },
  manage: {
    title: "Manage garden"
  },
  form: {
    title: "Add your garden to the map",
    "auth-notice": "You must be signed in to add your garden to the map. Either {signInLink} or {registerLink}.",
    "sign-in-link-text": "sign in",
    "register-link-text": "create an account",
    "email-confirm-notice": "You need to verify your email before you add your garden to the map. We sent you an email when you created your account. You can resend a verification link from {accountLink}.",
    "normal-notice": "By submitting this form, your garden will be added to the map. You can manage or remove it at any time from {accountLink}.",
    "account-link-text": "your profile",
    location: {
      title: "Location (required)",
      notice: "Move the marker to set the location of your garden. You can fill in the address fields to move the marker closer to you. <br /> We don't store your address information.",
      "coordinate-hint": 'Make sure you have dragged the map marker to the exact location of your garden, and have clicked "Confirm pin location"',
      "confirm-button": "Confirm pin location",
      "adjust-button": "Adjust pin location",
      street: "Street",
      "house-number": "House number",
      region: "Province or State",
      "postal-code": "Postal/ZIP Code",
      city: "City",
      country: "Country"
    },
    description: {
      title: "Describe your camping spot (required)",
      notice: "A short description of your garden and the camping spot you can offer. This information is displayed publicly, so don't include any personal details here. <br />Your description must be between 20 and 300 characters.",
      hints: {
        "too-short": "{remaining} more {remaining, plural, one {character} other {characters}} required...",
        "too-long": "{surplus} {surplus, plural, one {character} other {characters}} too long..."
      },
      placeholder: "Enter description...",
      label: "Description"
    },
    facilities: {
      title: "Facilities",
      notice: "What kind of facilities do travellers have access to?",
      capacity: {
        label: "Capacity (required)",
        help: "How many tents do you have space for (estimation)"
      }
    },
    photo: {
      title: "Photo",
      notice: "Show people what your garden looks like.<br />Make sure that the picture only shows the camping spot and doesn't include your neighbour's home.",
      "img-alt": "Your garden",
      hints: {
        "wrong-format": "Your photo must be a JPEG, PNG, or TIFF file.",
        "too-large": "Your image is too large. An image's file size should be 5MB or smaller."
      }
    },
    "add-button": "Add your garden",
    "update-button": "Update your garden",
    invalid: "Some information was not valid. Please check your submitted information for errors."
  },
  notify: {
    success: "Your garden was added successfully!",
    update: "Your garden was updated successfully!",
    photo: "It may take a minute for its photo to show up."
  }
};
const account = {
  title: "Account",
  verify: {
    title: "Verify your email",
    text: "You need to verify your email address if you want to chat or add a garden.",
    button: "Resend email",
    sent: "Email sent!"
  },
  preferences: {
    title: "Email preferences",
    text: "Send me emails when:",
    chat: "I receive a new chat message",
    news: "Welcome To My Garden has news to share"
  },
  garden: {
    title: "Your garden",
    unlisted: {
      text: "You haven't added your garden to the map yet. When you add your garden, other users will be able to contact you to request a stay. You can unlist your garden at any time!",
      button: "Add your garden"
    },
    listed: {
      text: "You can unlist your garden at any time. This means it will stay saved for later - but won't be shown on the map until you show it again.",
      button: "Manage garden"
    },
    unverified: {
      text: "Verify your email to manage your garden."
    }
  },
  notify: {
    "resend-error": "We couldn't resend an account verification email. Please contact {support}",
    "garden-show": "Your garden will show up on the map again",
    "garden-no-show": "Your garden won't show up on the map",
    "preferences-update": "Your email preferences have been updated!"
  }
};
const auth = {
  "invalid-code": "This page is not accessible without a valid action code",
  password: {
    expired: "This password reset link has expired. Please request a new one"
  },
  verification: {
    succes: "Your email address was verified successfully!",
    refresh: "Your email has already been verified. Please refresh the page.",
    expired: "This verification link has expired. Please request a new one.",
    unsigned: "Please sign in first"
  }
};
const register = {
  title: "Sign Up",
  button: "Sign up",
  "first-name": "First Name",
  "last-name": "Last name",
  country: "Country",
  policies: "I agree to the {cookiePolicy}, {privacyPolicy} and {termsOfUse}",
  registering: "Signing you up...",
  registred: "Already have an account? {signIn}",
  validate: {
    email: "Please add an email address, this is what you log in with",
    password: {
      set: "You need to set a password so you can log in later",
      min: "Your password must be at least 8 characters",
      max: "Please make sure your password is at most 100 characters long"
    },
    "first-name": {
      set: "Please enter a first name. This is how you're shown to other users",
      max: "Your first name can only be 25 characters long so we can display it properly. Feel free too abbreviate or choose a nickname"
    },
    "last-name": "Please enter your last name. This won't be shared with other users",
    country: {
      set: "Please enter your country. This helps us focus the map on where you're from",
      "from-list": "Please choose a country from the list. This helps us focus the map on where you're from"
    },
    consent: "You must consent to Welcome To My Garden's terms if you want to use the platform"
  },
  notify: {
    successful: "Your account was created successfully! Please check your email to verify your account.",
    "in-use": "This email address is already in use.",
    unexpected: "An unexpected error occurred. If the problem persists, please contact {support}"
  }
};
const chat = {
  title: "Chat",
  "title-conversation": "Chat with {partnerName}",
  "all-conversations": "All conversations",
  "no-messages": {
    text: "You don't have any messages yet. Select a host {link} to contact them.",
    link: "on the map"
  },
  "type-message": "Type your message...",
  "new": "new",
  notify: {
    unverified: "Please verify your email before you start chatting",
    "empty-message": "Your message cannot be empty",
    "too-long": "Your message is {surplus} {surplus, plural, one {character} other {characters}} too long..."
  },
  "go-to-garden": "Go to garden"
};
const map = {
  "vehicle-notice": {
    title: "Leisure Cooperative is a community.",
    text: "We don't discriminate, but we do have a very strict policy on using the platform, one strike against our rules and your access will be removed. This is one planet, therefore we are all in this together!"
  },
  trails: {
    hiking: "Show hiking routes",
    cycling: "Show cycling routes",
    attribution: "Trails courtesy of {link}"
  }
};
const stmf = {
  title: "Slow Travel Mini Festival",
  description: "Prepare your slow travels with the community",
  sections: {
    "get-inspired": "Get Inspired",
    plan: "Plan",
    contribute: "Contribute",
    rethink: "Rethink"
  }
};
const fallback = {
  "404": "404 - page not found",
  redirect: "back to home"
};
var en = {
  tagline,
  generics,
  ui,
  index,
  rules,
  recommendations,
  faq,
  cookies,
  "privacy-policy": {
    title: "Privacy policy",
    "last-updated": "Last updated: 16 August 2021",
    subtitle: "Responsible for the processing of the Data and Owner",
    intro: "Welcome To My Garden with Open Collective Brussels as legal entity, a not-for-profit organization, incorporated and existing under the laws of Belgium, with registered office at Cantersteen 12, 1000 Brussels, Belgium, with company number BE 0664.932.030.",
    email: "Email: {support}",
    scope: {
      title: "Privacy Policy",
      copy: "This \u2018Privacy Policy\u2019 applies to the \u2018Personal Data\u2019 collected by Welcome To My Garden through this website."
    },
    "personal-data": {
      meaning: {
        title: "What does personal data mean?",
        copy: "In this Privacy Policy, Personal Data refers to information that makes it possible to identify you. An identifiable person is someone who can be identified, either directly or indirectly, in particular by referring to an identification number or to one or more factors that are linked to physical, physiological, mental, economic, cultural or social identity. A typical example of personal information is your name and email address."
      },
      collection: {
        title: "What personal data do we collect?",
        copy: "We might collect your Personal Data from the following sources:",
        sources: {
          "0": {
            title: "Personal Data that you provide during the registration process on the platform.",
            list: {
              "0": "Email address (mandatory)",
              "1": "Your first and last name (mandatory)",
              "2": "Your country (mandatory)",
              "3": "Your consent to these terms"
            }
          },
          "1": {
            title: "Personal Data that we collect when you visit our website.",
            list: {
              "0": "We use cookies to automatically collect personal data about you when you use this website. For more information, please consult our Cookie Policy."
            }
          },
          "2": {
            title: "Personal Data that you provide when adding your garden to your account.",
            list: {
              "0": "Your garden's location (coordinates: the latitude and longitude) (mandatory)",
              "1": "Information about your garden (description, facilities, the amount of tents you can welcome) (mandatory)",
              "2": "A picture of your garden (optional)"
            }
          },
          "3": {
            title: "User location",
            list: {
              "0": "In case you agree to share your location with Welcome To My Garden, the Welcome To My Garden map will be centered on the location provided by your browser. Welcome To My Garden does not store your location of any kind, not in a cookie nor in local storage. The user location only serves to improve your user experience by centering the map."
            }
          }
        }
      },
      usage: {
        title: "How do we use personal data?",
        subtitle: "We might use your personal data for the following purposes",
        purposes: {
          "0": "To create and maintain your user profile on this website;",
          "1": "To manage the identification and authentication of users;",
          "2": "To verify your user account in order to guarantee the necessary security measures;",
          "3": "To provide information about your garden to the community of users;",
          "4": "To alert you when updates are taking place on the platform;",
          "5": "To alert you when activities on the platform may interest you."
        },
        copy: 'The personal data is only stored and processed for the period required for the purpose of the processing. After that, the data will be deleted or anonymized. Welcome To My Garden relies on Firebase which is certified under major privacy and security standards. Firebase services are GDPR compliant. All information related to Firebase can be found <a href="https://firebase.google.com/support/privacy">here</a>.'
      },
      backups: {
        title: "Back-ups",
        copy: "Welcome To My Garden makes a backup of all its data every 6 hours and stores the data for 30 days. If you request your account to be deleted, the data will be stored in backup for this duration. None of this data will ever be used unless there\u2019s corruption of production data."
      },
      extra: {
        "0": {
          title: "With whom do we share your personal data?",
          copy: "Your personal data will not be shared with any third party. We will never sell or rent your personal data to other service providers, nor will we share your Personal Data with any service providers who are not compliant with the GDPR."
        },
        "1": {
          title: "Where do we transfer your personal data to?",
          copy: "We only transfer your Personal Data to service providers established outside the European Economic Area if they comply to art 44 GDPR. All US-based service providers comply with Privacy Shield."
        },
        "2": {
          title: "Automated decision-making and profiling",
          copy: "The processing of your personal data does not include profiling and will not be subjected to automated decision-making by Welcome To My Garden."
        }
      }
    },
    rights: {
      title: "What rights do you have?",
      copy: "You have the right to view your personal data at any time, as well as the right to be informed of the use that Welcome To My Garden makes of your personal data.",
      list: {
        "0": {
          title: "Right to rectification, removal and restriction of processing",
          copy: "You are free to decide whether or not to provide your personal data to Welcome To My Garden. In addition, you always have the right to amend, supplement or remove your personal data at Welcome To My Garden. You acknowledge that a refusal to provide or a request for the removal of personal data means that certain services can no longer be delivered. You may also request the limitation of the processing of your personal data."
        },
        "1": {
          title: "Right to object",
          copy: "You have the right to object to the processing of your personal data, as long as this is for serious and legitimate reasons."
        },
        "2": {
          title: "Right to data portability",
          copy: "You have the right to obtain the personal data you have provided to Welcome To My Garden in a structured, typical and machine-readable form and/or transfer it to different controllers."
        },
        "3": {
          title: "Right to withdraw consent",
          copy: "Insofar as the processing is based on your prior consent, you have the right to withdraw this approval."
        },
        "4": {
          title: "Right to lodge a complaint",
          copy: "You have the right to lodge a complaint to the Belgian Privacy Commission: Personal Privacy Protection Commission, Drukpersstraat 35, 1000 Brussels, Belgium, Tel +32 (0)2 274 48 00, Fax +32 (0)2 274 48 35, email: commission@privacycommission.be. This does not affect relief before a civil court."
        }
      },
      "exercise-rights": {
        title: "Exercising your rights",
        copy: "You can exercise your rights by contacting Welcome To My Garden to this end by sending an email to {support}, provided you enclose a copy of your identity card"
      }
    },
    "additional-info": {
      title: "Additional information on data collection and processing",
      infos: {
        "0": {
          title: "Legal procedures",
          copy: {
            "0": "The Processor and the Controller for the processing of the Data might use the Personal Data of the User for legal purposes, for the court or legal proceedings in the event of unlawful use of this Application or the related services.",
            "1": "The User is aware that the Processor and the Data Controller might be obliged to disclose the personal data at the request of competent government institutions for the processing of the Data."
          }
        },
        "1": {
          title: "Security measures",
          copy: {
            "0": "Welcome To My Garden has developed security measures which have been adjusted at the technological and organisational level to prevent the destruction, loss, falsification, changing, prohibited access or the erroneous disclosure to third parties of personal data as well as any other prohibited processing of this data.",
            "1": "Under no circumstances can Welcome To My Garden be held liable for any direct or indirect loss resulting from the incorrect or unlawful use of your personal data by a third party.",
            "2": "You must at all times comply with the security instructions, which includes preventing all prohibited access to your login details including your password. You are solely responsible for the usage of the website on your computer, from your IP-address and with your identification details, as well as for keeping these confidential."
          }
        }
      }
    },
    definitions: {
      title: "Definitions and legal framework",
      articles: {
        "0": {
          title: "Personal data (or Data)",
          copy: "All information regarding a natural person, a legal person, an institution or an association that has been or might be identified directly or indirectly by reference to other information."
        },
        "1": {
          title: "Usage data",
          copy: "Information that is automatically collected from this Application (or external services used in this Application), including: the IP addresses or domain names of the computers used by the Users of this Application, the URI (Uniform Resource Identifier) \u200B\u200Baddresses, the time of the request, the method used to submit the request to the server, the size of the file received in response to it, the numerical code indicating the status of the server response (successful, error, etc.), the functions of the browser and the operating system of the User, the different time data per visit (such as the time spent on each page of the application) and the data collected while using the application (example : the order of pages visited or other parameters about the operating system of the device)."
        },
        "2": {
          title: "User",
          copy: "The person using this Application and who must agree with or be authorized by the Data Subject to whom the Personal Data refers."
        },
        "3": {
          title: "The person concerned",
          copy: "The legal person or natural person to whom the Personal Data relates."
        },
        "4": {
          title: "Data processor (or Data supervisor)",
          copy: "The natural person, legal entity, government administration or any other institution, association or organization that has been authorized by the Data Controller to process the Personal Data in accordance with this privacy policy."
        },
        "5": {
          title: "Responsible for the processing of the data (or Owner)",
          copy: "The natural person, legal person, government administration or any other institution, association or organization with the right, also jointly with the Controller for the processing of the Data to make decisions regarding the purposes and methods of processing Personal Data and the means used, including security measures regarding the exploitation and use of this Application. The Controller for the processing of the Data is the Owner of this Application, unless otherwise indicated."
        },
        "6": {
          title: "This Application",
          copy: "The hardware or software tools through which the Personal Data of the User are collected."
        },
        "7": {
          title: "Cookie",
          copy: "Small chunk of data stored on the User's device. See our Cookie policy."
        }
      },
      "legal-info": {
        title: "Legal information",
        copy: "Notice to European Users: this privacy statement has been drawn up with due observance of the obligations in art. 10 of the European Directive 95/46 / EC and the provisions of European Directive 2002/58 / EC, as well as the revision in Directive 2009/136 / EC regarding cookies."
      }
    },
    "change-warning": {
      title: "Changes to this privacy policy",
      copy: "The Controller for the processing of the Data reserves the right to change this privacy policy at any time by notifying Users on this page. We encourage you to check this page for possible changes. The date of the last change is indicated at the bottom of the page. If a User objects to any change in the policy, the User must not continue to use this Application. One might request the Controller for the processing of the Data to delete the Personal Data. Unless otherwise indicated, the valid Privacy Policy applicable at that time applies to all Personal Data that the Controller has stored for the processing of the Data about Users."
    }
  },
  garden,
  "sign-in": {
    title: "Sign in",
    button: "Sign in",
    reset: {
      text: "Forgot your password? {link}",
      link: "Reset it"
    },
    register: {
      text: "Don't have an account yet? {link}",
      link: "Register"
    },
    notify: {
      welcome: "Welcome back, {user}!",
      incorrect: "The provided email or password is incorrect.",
      "login-issue": "We couldn't log you in. If the problem persists, please contact {support}"
    }
  },
  "request-password-reset": {
    title: "Set a new password",
    description: "If you submit the form below, we can send you a unique link with which you can reset your password.",
    button: "Email reset instructions",
    set: "If an account with the email {email} exists, an email will now be sent with instructions on how to reset the password.",
    trouble: "Are you having trouble logging in? Contact {support} and we'll help you out!"
  },
  "reset-password": {
    title: "Set a new password",
    update: "Update password",
    succes: "Your password was reset succesfully"
  },
  account,
  auth,
  register,
  chat,
  map,
  "terms-of-use": {
    title: "Terms of use",
    "last-updated": "Last updated : 30 May 2020",
    intro: {
      "0": {
        copy: 'Welcome To My Garden is a not-for-profit network of citizens offering free camping spots in their gardens to slow travellers. These Terms of Service (<span class="bold">"Terms"</span>) apply to your access to and use of the website and the use of the network (collectively, our <span class="bold">"Platform"</span>) provided by Welcome To My Garden.'
      },
      "1": {
        copy: 'The use of this platform is <span class="bold">subject to a number of rules</span>. Below you can find the general conditions of our platform, as we are convinced that <span class="bold">clear rules</span> provide the best guarantee for a <span class="bold">respectful community</span>. <span class="bold">By creating an account or otherwise accessing the Platform, you agree to these Terms.</span>'
      },
      "2": {
        copy: "Because Welcome To My Garden appreciates the feedback of the users of their platform, we welcome any ideas to further improve the platform. You can email your suggestions to {support}."
      }
    },
    articles: {
      "0": {
        title: "Who can register on the platform?",
        descriptions: {
          "0": {
            copy: '<span class="bold"> Any citizen who wants to offer a free camping spot in their garden to slow travellers and any slow travellers (cyclists and hikers) who want to use the network. </span> If you want to add your garden or contact a host, you need to create an account. Only registered participants can be active users. You can register with your email address.'
          },
          "1": {
            copy: "The creation of an account by a user does not give this user ownership over the account. Welcome To My Garden reserves the right to refuse, suspend or delete accounts, for example if the user does not comply with the following rules or inappropriate behaviour has been reported by a host or guest."
          }
        },
        info: {
          "0": {
            title: "Each account must comply with the following rules\u200D",
            sections: {
              "0": {
                title: "Every account is strictly personal",
                copy: "Each account must be unique and linked to a natural person. If you register for an account, you must provide accurate account information and promptly update this information if it changes. Every user has the right to create one account. If it is determined that one person has multiple accounts, Welcome To My Garden reserves the right to delete all these accounts. Every user must be over 16 years old."
              },
              "1": {
                title: "An account cannot be transferred to another person",
                copy: "Since each account is strictly linked to one specific person, this account cannot be transferred to another person without the permission of Welcome To My Garden. This transfer ban must be considered in the broadest sense. Welcome To My Garden reserves the right to refuse or delete this account in case of infringements."
              },
              "2": {
                title: "An account cannot be used for commercial purposes",
                copy: "The Welcome To My Garden platform is intended to enable citizens to offer their gardens as free camping spots and to enable slow travellers to use the network while travelling. An account can therefore only be used for these purposes. Any use of the account for the sole purpose of enjoying a commercial advantage is strictly prohibited."
              },
              "3": {
                title: "The account information must always remain confidential",
                copy: "It is not allowed for any other person than the actual person who created the account, to use this account. The person who created the account must ensure that (s)he keeps the password and login details safe. We strongly advise you to use a 'strong' password (a password with a combination of lowercase, uppercase letters and numbers). We advise you to use a password manager. Welcome To My Garden can under no circumstances be held responsible for any loss or damage incurred to the account if the above conditions are not met by the user. Welcome To My Garden cannot be held responsible for theft of your account, by 'phishing' for example, either. Welcome To My Garden will never ask its users for personal data such as a login or password via email. If personal data is requested, the user will always be redirected to the platform of Welcome To My Garden. You are responsible for all activities that occur in connection with your account and accept all risks of unauthorized access."
              }
            }
          }
        }
      },
      "1": {
        title: "Terms of use for Hosts",
        info: {
          "0": {
            title: "By adding your garden to the platform, you acknowledge the general rules of the platform which are as follows",
            sections: {
              "0": {
                title: "No income",
                copy: "Welcome To My Garden is a not-for-profit network of citizens offering free camping spots in their gardens to slow travellers. Therefore, no income should be made from it. Offering a garden against a fee is strictly prohibited and the platform reserves the right to delete a host\u2019s account permanently if it happens."
              },
              "1": {
                title: "Disclaimer",
                copy: "The Welcome To My Garden platform is a citizen initiative. The volunteers behind Welcome To My Garden will not take any responsibility for any loss, damage or injury incurred resulting from the use of the website and/or while staying in another citizen\u2019s garden."
              },
              "2": {
                title: "No discrimination",
                copy: "Welcome To My Garden does not tolerate any kind of discrimination. Hosts are expected to act in compliance with this. Hosts cannot discriminate on the basis of gender, ethnicity, age, sexual orientation, socioeconomic status, physical appearance, ability and religion (or lack thereof)."
              }
            }
          }
        }
      },
      "2": {
        title: "Terms for Users",
        descriptions: {
          "0": {
            copy: "Users must be at least 18 years old to use the platform. By creating an account, users immediately agree to the terms of use of Welcome To My Garden."
          }
        },
        paragraphs: {
          "0": {
            title: "Contacting the hosts",
            copy: {
              "0": "Hosts should solely be contacted to request a stay in their gardens. Any misuse of the platform may result in the suspension or deletion of the user\u2019s account."
            }
          },
          "1": {
            title: "Obligation to contact hosts beforehand to request a stay",
            copy: {
              "0": "Users are obliged to contact the host beforehand to request a stay, unless the host has clearly stated on their profile that this is not necessary. Users should always pass on accurate information about themselves."
            }
          },
          "2": {
            title: "Facilities offered by the host",
            copy: {
              "0": "The host is the sole responsible person for the facilities they do or do not put at the user\u2019s disposal. By using this platform, the user acknowledges and accepts the conditions of their stay - which may or may not include access to sanitary facilities."
            }
          },
          "3": {
            title: "Respect for nature",
            copy: {
              "0": 'Users have to take all their waste away upon leaving. Users should always respect nature, the host\u2019s garden and their surroundings, and adhere to the <a href="https://en.wikipedia.org/wiki/Leave_No_Trace">Leave No Trace</a> principle.'
            }
          },
          "4": {
            title: "Respect for the host and the neighbours",
            copy: {
              "0": "Users should always be respectful of the garden owners and reduce noise to a minimum. They should also stick by any requirements the hosts have made."
            }
          },
          "5": {
            title: "No car rule",
            copy: {
              "0": "The Welcome To My Garden platform respects the environment and caters to the needs of slow travellers only. This means users can only travel to gardens on foot, by bicycle or by public transport. The use of motorized vehicles is forbidden, except for users with reduced mobility. However, it is permitted to travel to the start of a trail using a motorized vehicle."
            }
          },
          "6": {
            title: "Disclaimer",
            copy: {
              "0": "The platform Welcome To My Garden is a citizen initiative. The volunteers behind Welcome To My Garden will not take any responsibility for any loss, damage or injury incurred as a result of using the website and/or while staying in another citizen\u2019s garden."
            }
          }
        }
      },
      "3": {
        title: "Interactions with other members",
        paragraphs: {
          "0": {
            title: "You alone are responsible for your interactions with other users.",
            copy: {
              "0": "Welcome To My Garden is a platform for users to put their garden freely at disposal, to request a garden stay and communicate with one another to achieve this use. Users have the sole responsibility for any interactions with other users of the platform. Welcome To My Garden has no involvement and no responsibilities or liabilities with respect to any communications or disputes between two users. To be very clear: Welcome To My Garden is a platform allowing hosts to put their garden freely at disposal, allowing users to use someone\u2019s garden to camp and a place to communicate between users. Welcome To My Garden will not be and cannot be held responsible for the interactions or consequences of interactions between users. Users release Welcome To My Garden (and its volunteers) from claims, demands and damages (actual and consequential) of every kind and nature, known and unknown, suspected and unsuspected, disclosed and undisclosed, arising out of or in any way connected with such disputes. Always keep safety and good judgement in mind when using the platform."
            }
          },
          "1": {
            title: "Identity verification",
            copy: {
              "0": "Users are solely responsible for determining the identity and suitability of other users. As a host, you can always refuse users. As a traveller, you can decide where you want to stay. Welcome To My Garden cannot and do not confirm each user\u2019s identity. The platform does not have any information about the user\u2019s criminal background or morality. Always keep safety and good judgement in mind when using the platform."
            }
          }
        }
      },
      "4": {
        title: "Limitations to content and use of the platform",
        descriptions: {
          "0": {
            copy: "To ensure that the Welcome To My Garden platform is working properly and that you can communicate and connect with others, there are some restrictions to the type of content that can be published via the platform. These are as follows:"
          }
        },
        paragraphs: {
          "0": {
            title: "Offensive behaviour",
            copy: {
              "0": "We firmly believe in freedom of speech. However, in order to ensure that the platform can be used in a constructive way by all users, we do not allow offensive behaviour that constitutes harassment, intimidation or fear-mongering.",
              "1": "Accounts and related accounts that are used to perform the actions listed below can be temporarily blocked and / or permanently deleted.",
              "2": "Violent threats (direct or indirect): You may not threaten or promote violence. This includes the promotion of terrorism. Harassment: You may not incite to or be involved in deliberately insulting or harassing others. Here are some factors that we can take into account when assessing abusive behaviour: whether the main purpose of the reported account is harassing or sending offensive messages to others; whether the reported behaviour is unidirectional or contains threats; whether the reported account encourages others to intimidate another account; and whether the reported account sends intimidating messages to an account from multiple accounts. Hatred: You may not promote violence against other people or directly attack or threaten them on the basis of race, ethnic background, nationality, sexual orientation, gender, gender identity, philosophical affiliation, religion, age, disability or illness. We also do not allow accounts whose main purpose is to incite others to do harm on the basis of these categories. Misuse of multiple accounts: Creating multiple accounts for overlapping use to avoid temporary or permanent suspension of an individual account is not allowed. Private data: You may not publish or post confidential data and private information of others without their express authorization and consent. These data include but are not limited to: credit card numbers, address details, telephone numbers or data that fall under the personal privacy of a person. Impersonation: You are not allowed to access the platform pretending to be someone else and specifically you may not deceive, confuse or threaten other users in this way. You may not be allowed to enter via the platform if someone else deceives, confuses or threatens in a manner that actually decks or threatens others."
            }
          },
          "1": {
            title: "Indemnity",
            copy: {
              "0": "You shall defend, indemnify and hold harmless WelcomeToMyGarden.org (and each of its funders and/or volunteers) from any claim, demand, action, damage, loss, cost or expense, including without limitation reasonable attorneys\u2019 fees, arising out or relating to (a) your use of our services; (b) any member content or submissions you provide; (c) your violation of these terms; (d) your violation of any rights of another; or (e) your conduct in connection with the services. Further, if you are using the services on behalf of any entity, you represent and warrant that such entity agrees to indemnify you and WelcomeToMyGarden.org for violations of these terms in accordance with this section. If you are obligated to indemnify us, we will have the right, in our sole and unfettered discretion, to control any action or proceeding and determine whether we wish to settle it, and if so, on what terms."
            }
          }
        }
      },
      "5": {
        title: "Limitation of Liability",
        descriptions: {
          "0": {
            copy: "Welcome To My Garden - including volunteers - will not be liable to either users and/or hosts under any theory of liability\u2014whether based in contract, tort, negligence, strict liability, warranty, or otherwise\u2014for any indirect, consequential, exemplary, incidental, punitive or special damages. The platform cannot be held responsible for any failure or delay in performing the terms. The platform cannot be held responsible for any liability in case of personal injury or death resulting from using it."
          },
          "1": {
            copy: "IN NO EVENT SHALL WELCOMETOMYGARDEN.ORG, A BELGIAN NONPROFIT ORGANISATION, OR ITS FUNDERS AND VOLUNTEERS, INDIRECT OR CONSEQUENTIAL DAMAGES, OR ANY OTHER DAMAGES OF ANY KIND, INCLUDING, BUT NOT LIMITED TO LOSS OF USE, LOSS OF PROFITS OR LOSS OF DATA, WHETHER IN AN ACTION IN CONTRACT, TORT (INCLUDING BUT NOT LIMITED TO NEGLIGENCE) OR OTHERWISE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, ARISING FROM OR RELATING TO: (A) THE USE OR INABILITY TO USE OUR SERVICES; (B) THE COST OF REPLACEMENT OF ANY GOODS, SERVICES OR INFORMATION PURCHASED OR OBTAINED AS A RESULT OF ANY INFORMATION OBTAINED FROM OR TRANSACTIONS ENTERED INTO THROUGH OR FROM OUR SERVICES; (C) DISCLOSURE OF, UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR CONTENT; (D) DAMAGES FOR LOSS OR CORRUPTION OF DATA OR PROGRAMS, SERVICE INTERRUPTIONS OR PROCUREMENT OF SUBSTITUTE SERVICES, EVEN IF WE KNOW OR HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES; (E) STATEMENTS, CONDUCT OR OMISSIONS OF ANY SERVICE PROVIDERS OR OTHER THIRD PARTY ON OUR SERVICES; (F) YOUR OR ANYONE ELSE\u2019S CONDUCT OR ACTS IN CONNECTION WITH THE USE OF THE SERVICES, INCLUDING WITHOUT LIMITATION, BODILY INJURY, EMOTIONAL DISTRESS, DEATH OR ANY OTHER DAMAGES RESULTING FROM COMMUNICATIONS OR MEETINGS WITH OTHER REGISTERED MEMBERS OF OUR SERVICES OR PERSONS INTRODUCED TO YOU BY OUR SERVICES, WHETHER ON-LINE OR OFF-LINE; OR (G) ANY OTHER MATTER ARISING FROM, RELATING TO OR CONNECTED WITH OUR SERVICES OR THESE TERMS."
          }
        }
      },
      "6": {
        title: "Spam",
        descriptions: {
          "0": {
            copy: "We strive at all times to protect the Welcome To My Garden platform user from technical abuse and spam. Accounts that are used to perform the actions listed below can be temporarily blocked or permanently deleted."
          },
          "1": {
            copy: "Malware / phishing / viruses / worms / Trojans: You may not post malicious content or links to such content for the purpose of damaging or disrupting someone else's browsers or computers, or of violating someone's privacy. Spam: You are not allowed to use the Welcome To My Garden platform to spam people."
          }
        }
      },
      "7": {
        title: "Infringement of applicable laws",
        descriptions: {
          "0": {
            copy: "The use of the account may not in any way infringe applicable laws. This includes infringements against privacy legislation, intellectual property rights, the criminal code, etc."
          },
          "1": {
            copy: "The account may not be used to promote illegal activities in any way."
          }
        }
      },
      "8": {
        title: "In case of breaches of the aforementioned rules",
        descriptions: {
          "0": {
            copy: "Welcome To My Garden reserves the right to delete the relevant messages if it detects infringements of the aforementioned rules, and may even suspend or permanently delete user accounts."
          },
          "1": {
            copy: "Welcome To My Garden cannot be held liable in any way for messages posted by users or third parties, which violate the rules specified above. If a user detects an infringement, please report this to the following email address: {support}"
          },
          "2": {
            copy: "It may occur that harmful files can be downloaded via the platform, whether or not due to a user, or that users place harmful hyperlinks. Every download by a user or click on a hyperlink, placed by a user, is done at the user\u2019s own risk. Any damage incurred is completely and solely the responsibility of this user."
          }
        }
      },
      "9": {
        title: "Intellectual property rights",
        descriptions: {
          "0": {
            copy: "Welcome To My Garden respects the intellectual property rights of others and expects that users of this platform also respect these rights. Welcome To My Garden reserves the right to remove content that infringes intellectual property rights. Repeated infringements of intellectual property rights of any kind by a user will result in the suspension or removal of the account by Welcome To My Garden."
          },
          "1": {
            copy: "Infringements against intellectual property rights can be reported via the following email address: {support}"
          }
        }
      },
      "10": {
        title: "Property rights Welcome To My Garden",
        descriptions: {
          "0": {
            copy: "The source code of Welcome To My Garden is open source. You agree to be bound by and comply with any license agreement that applies to this open source software. The visual identity, including the logo and colors, and the name cannot be used nor replicated for any other platform without the prior permission of Welcome To My Garden."
          }
        }
      },
      "11": {
        title: "Changes to these Terms",
        descriptions: {
          "0": {
            copy: "We may make changes to these Terms from time to time. If we make changes, we will post the amended Terms to our Platform and update the 'Last Updated' date above. We may also attempt to notify you by sending an email notification to the address associated with your account or give notice through our Platform. Unless specified otherwise in our notice, the amended Terms will be effective immediately and your continued access to and use of our Platform after we give notice will confirm your acceptance of the changes. In any case, changes to these Terms will not be retroactive. If you do not agree to the amended Terms, you must stop accessing and using our Platform."
          }
        }
      }
    }
  },
  stmf,
  fallback
};
export { account, auth, chat, cookies, en as default, fallback, faq, garden, generics, index, map, recommendations, register, rules, stmf, tagline, ui };
