
/**
 * @roxi/routify 2.18.8
 * File generated Wed Sep 14 2022 21:13:23 GMT+0200 (Central European Summer Time)
 */

export const __version = "2.18.8"
export const __timestamp = "2022-09-14T19:13:23.319Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isFallback": true,
      "path": "/_fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isPage": true,
      "path": "/account",
      "id": "_account",
      "component": () => import('../src/pages/account.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isPage": true,
          "path": "/auth/action",
          "id": "_auth_action",
          "component": () => import('../src/pages/auth/action.svelte').then(m => m.default)
        }
      ],
      "path": "/auth"
    },
    {
      "isDir": true,
      "children": [
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isPage": true,
              "path": "/chat/:name/:chatId",
              "id": "_chat__name__chatId",
              "component": () => import('../src/pages/chat/[name]/[chatId].svelte').then(m => m.default)
            }
          ],
          "path": "/chat/:name"
        },
        {
          "isIndex": true,
          "isPage": true,
          "path": "/chat/index",
          "id": "_chat_index",
          "component": () => import('../src/pages/chat/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "path": "/chat",
      "id": "_chat__layout",
      "component": () => import('../src/pages/chat/_layout.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "children": [
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isPage": true,
              "path": "/explore/garden/:gardenId",
              "id": "_explore_garden__gardenId",
              "component": () => import('../src/pages/explore/garden/[gardenId].svelte').then(m => m.default)
            }
          ],
          "path": "/explore/garden"
        },
        {
          "isIndex": true,
          "isPage": true,
          "path": "/explore/index",
          "id": "_explore_index",
          "component": () => import('../src/pages/explore/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "path": "/explore",
      "id": "_explore__layout",
      "component": () => import('../src/pages/explore/_layout.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isPage": true,
          "path": "/garden/add",
          "id": "_garden_add",
          "component": () => import('../src/pages/garden/add.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/garden/manage",
          "id": "_garden_manage",
          "component": () => import('../src/pages/garden/manage.svelte').then(m => m.default)
        }
      ],
      "path": "/garden"
    },
    {
      "isIndex": true,
      "isPage": true,
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "children": [
        {
          "isPage": true,
          "path": "/info/faq",
          "id": "_info_faq",
          "component": () => import('../src/pages/info/faq.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/info/rules",
          "id": "_info_rules",
          "component": () => import('../src/pages/info/rules.svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "path": "/info",
      "id": "_info__layout",
      "component": () => import('../src/pages/info/_layout.svelte').then(m => m.default)
    },
    {
      "isPage": true,
      "path": "/register",
      "id": "_register",
      "component": () => import('../src/pages/register.svelte').then(m => m.default)
    },
    {
      "isPage": true,
      "path": "/request-password-reset",
      "id": "_requestPasswordReset",
      "component": () => import('../src/pages/request-password-reset.svelte').then(m => m.default)
    },
    {
      "isPage": true,
      "path": "/reset-password",
      "id": "_resetPassword",
      "component": () => import('../src/pages/reset-password.svelte').then(m => m.default)
    },
    {
      "isPage": true,
      "path": "/sign-in",
      "id": "_signIn",
      "component": () => import('../src/pages/sign-in.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "children": [
        {
          "isPage": true,
          "path": "/terms/cookies",
          "id": "_terms_cookies",
          "component": () => import('../src/pages/terms/cookies.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/terms/privacy-policy",
          "id": "_terms_privacyPolicy",
          "component": () => import('../src/pages/terms/privacy-policy.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/terms/terms-of-use",
          "id": "_terms_termsOfUse",
          "component": () => import('../src/pages/terms/terms-of-use.svelte').then(m => m.default)
        }
      ],
      "isLayout": true,
      "path": "/terms",
      "id": "_terms__layout",
      "component": () => import('../src/pages/terms/_layout.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

