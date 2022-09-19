
/**
 * @roxi/routify 2.18.8
 * File generated Thu Sep 15 2022 22:12:57 GMT+0200 (Central European Summer Time)
 */

export const __version = "2.18.8"
export const __timestamp = "2022-09-15T20:12:57.116Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "account.svelte",
      "filepath": "/account.svelte",
      "name": "account",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/account.svelte",
      "importPath": "../src/pages/account.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/account",
      "id": "_account",
      "component": () => import('../src/pages/account.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "auth",
      "filepath": "/auth",
      "name": "auth",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/auth",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "action.svelte",
          "filepath": "/auth/action.svelte",
          "name": "action",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/auth/action.svelte",
          "importPath": "../src/pages/auth/action.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/auth/action",
          "id": "_auth_action",
          "component": () => import('../src/pages/auth/action.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/auth"
    },
    {
      "isFile": true,
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/chat/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/chat/_layout.svelte",
      "children": [
        {
          "isFile": false,
          "isDir": true,
          "file": "[name]",
          "filepath": "/chat/[name]",
          "name": "[name]",
          "ext": "",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/chat/[name]",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "[chatId].svelte",
              "filepath": "/chat/[name]/[chatId].svelte",
              "name": "[chatId]",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/chat/[name]/[chatId].svelte",
              "importPath": "../src/pages/chat/[name]/[chatId].svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/chat/:name/:chatId",
              "id": "_chat__name__chatId",
              "component": () => import('../src/pages/chat/[name]/[chatId].svelte').then(m => m.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/chat/:name"
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/chat/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/chat/index.svelte",
          "importPath": "../src/pages/chat/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/chat/index",
          "id": "_chat_index",
          "component": () => import('../src/pages/chat/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/chat/_layout.svelte",
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/chat",
      "id": "_chat__layout",
      "component": () => import('../src/pages/chat/_layout.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/explore/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/explore/_layout.svelte",
      "children": [
        {
          "isFile": false,
          "isDir": true,
          "file": "garden",
          "filepath": "/explore/garden",
          "name": "garden",
          "ext": "",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/explore/garden",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "[gardenId].svelte",
              "filepath": "/explore/garden/[gardenId].svelte",
              "name": "[gardenId]",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/explore/garden/[gardenId].svelte",
              "importPath": "../src/pages/explore/garden/[gardenId].svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/explore/garden/:gardenId",
              "id": "_explore_garden__gardenId",
              "component": () => import('../src/pages/explore/garden/[gardenId].svelte').then(m => m.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/explore/garden"
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/explore/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/explore/index.svelte",
          "importPath": "../src/pages/explore/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/explore/index",
          "id": "_explore_index",
          "component": () => import('../src/pages/explore/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/explore/_layout.svelte",
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/explore",
      "id": "_explore__layout",
      "component": () => import('../src/pages/explore/_layout.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "garden",
      "filepath": "/garden",
      "name": "garden",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/garden",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "add.svelte",
          "filepath": "/garden/add.svelte",
          "name": "add",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/garden/add.svelte",
          "importPath": "../src/pages/garden/add.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/garden/add",
          "id": "_garden_add",
          "component": () => import('../src/pages/garden/add.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "manage.svelte",
          "filepath": "/garden/manage.svelte",
          "name": "manage",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/garden/manage.svelte",
          "importPath": "../src/pages/garden/manage.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/garden/manage",
          "id": "_garden_manage",
          "component": () => import('../src/pages/garden/manage.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/garden"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/info/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/info/_layout.svelte",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "faq.svelte",
          "filepath": "/info/faq.svelte",
          "name": "faq",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/info/faq.svelte",
          "importPath": "../src/pages/info/faq.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/info/faq",
          "id": "_info_faq",
          "component": () => import('../src/pages/info/faq.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "rules.svelte",
          "filepath": "/info/rules.svelte",
          "name": "rules",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/info/rules.svelte",
          "importPath": "../src/pages/info/rules.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/info/rules",
          "id": "_info_rules",
          "component": () => import('../src/pages/info/rules.svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/info/_layout.svelte",
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/info",
      "id": "_info__layout",
      "component": () => import('../src/pages/info/_layout.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "register.svelte",
      "filepath": "/register.svelte",
      "name": "register",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/register.svelte",
      "importPath": "../src/pages/register.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/register",
      "id": "_register",
      "component": () => import('../src/pages/register.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "request-password-reset.svelte",
      "filepath": "/request-password-reset.svelte",
      "name": "request-password-reset",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/request-password-reset.svelte",
      "importPath": "../src/pages/request-password-reset.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/request-password-reset",
      "id": "_requestPasswordReset",
      "component": () => import('../src/pages/request-password-reset.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "reset-password.svelte",
      "filepath": "/reset-password.svelte",
      "name": "reset-password",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/reset-password.svelte",
      "importPath": "../src/pages/reset-password.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/reset-password",
      "id": "_resetPassword",
      "component": () => import('../src/pages/reset-password.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "sign-in.svelte",
      "filepath": "/sign-in.svelte",
      "name": "sign-in",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/sign-in.svelte",
      "importPath": "../src/pages/sign-in.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/sign-in",
      "id": "_signIn",
      "component": () => import('../src/pages/sign-in.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/terms/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/terms/_layout.svelte",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "cookies.svelte",
          "filepath": "/terms/cookies.svelte",
          "name": "cookies",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/terms/cookies.svelte",
          "importPath": "../src/pages/terms/cookies.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/terms/cookies",
          "id": "_terms_cookies",
          "component": () => import('../src/pages/terms/cookies.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "privacy-policy.svelte",
          "filepath": "/terms/privacy-policy.svelte",
          "name": "privacy-policy",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/terms/privacy-policy.svelte",
          "importPath": "../src/pages/terms/privacy-policy.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/terms/privacy-policy",
          "id": "_terms_privacyPolicy",
          "component": () => import('../src/pages/terms/privacy-policy.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "terms-of-use.svelte",
          "filepath": "/terms/terms-of-use.svelte",
          "name": "terms-of-use",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/buffalojunior/Documents/GitHub/LSRDAO/src/pages/terms/terms-of-use.svelte",
          "importPath": "../src/pages/terms/terms-of-use.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/terms/terms-of-use",
          "id": "_terms_termsOfUse",
          "component": () => import('../src/pages/terms/terms-of-use.svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/terms/_layout.svelte",
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/terms",
      "id": "_terms__layout",
      "component": () => import('../src/pages/terms/_layout.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

