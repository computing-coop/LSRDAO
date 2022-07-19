const generics = {
  shop: "Tienda",
  rules: "Reglas",
  "privacy-policy": "Pol\xEDtica de privacidad",
  password: "Contrase\xF1a",
  map: "Mapa",
  home: "Bienvenido",
  garden: "Jard\xEDn",
  faq: {
    explicit: "Preguntas frecuentes",
    acronym: "FAQ"
  },
  email: "Correo electr\xF3nico",
  "cookie-policy": "Pol\xEDtica de cookies",
  chat: "Chat",
  account: "Cuenta"
};
const account = {
  title: "Cuenta"
};
const fallback = {
  "404": "404 - P\xE1gina no encontrada"
};
const garden = {
  form: {
    location: {
      "adjust-button": "Ajustar ubicaci\xF3n del pin"
    }
  }
};
const index = {
  steps: {
    "0": {
      "add-garden-link-text": "A\xF1\xE1delo al mapa"
    },
    "1": {
      copy: "Una vez que hayas llegado a un acuerdo con tus anfitriones, calcula tu ruta a pie o en bicicleta hasta su jard\xEDn. Sal\xFAdalos y monta tu tienda para pasar la noche."
    }
  }
};
var es = {
  generics,
  account,
  fallback,
  garden,
  index,
  "terms-of-use": {
    articles: {
      "4": {
        paragraphs: {
          "0": {
            copy: {
              "1": "Las cuentas y las cuentas relacionadas que se utilizan para realizar las acciones enumeradas a continuaci\xF3n pueden ser bloqueadas temporalmente y/o eliminadas permanentemente."
            }
          }
        }
      }
    }
  }
};
export { account, es as default, fallback, garden, generics, index };
