if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>n(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/5iQnt8o7NsKpmKi3l7BuR/_buildManifest.js",revision:"e22b9607afdf6419d07ed17a1be87a17"},{url:"/_next/static/5iQnt8o7NsKpmKi3l7BuR/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/154-9aa1e66ae93d89d0.js",revision:"9aa1e66ae93d89d0"},{url:"/_next/static/chunks/294-11bbe4596337453c.js",revision:"11bbe4596337453c"},{url:"/_next/static/chunks/61-d4ba7d551b294338.js",revision:"d4ba7d551b294338"},{url:"/_next/static/chunks/framework-b085f58f35e4e17b.js",revision:"b085f58f35e4e17b"},{url:"/_next/static/chunks/main-b4d723bc63cb6c56.js",revision:"b4d723bc63cb6c56"},{url:"/_next/static/chunks/pages/_app-b6cc13fb20869fa1.js",revision:"b6cc13fb20869fa1"},{url:"/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",revision:"e4f561a102d9bb14"},{url:"/_next/static/chunks/pages/about-345c31692be734b0.js",revision:"345c31692be734b0"},{url:"/_next/static/chunks/pages/agenda-0d35c4d183e860de.js",revision:"0d35c4d183e860de"},{url:"/_next/static/chunks/pages/createEvent-d15c16443907fc69.js",revision:"d15c16443907fc69"},{url:"/_next/static/chunks/pages/index-ec66f7787323c5a0.js",revision:"ec66f7787323c5a0"},{url:"/_next/static/chunks/pages/partners-a10f56c1657c6c3e.js",revision:"a10f56c1657c6c3e"},{url:"/_next/static/chunks/pages/speakers-e5723659e08785a1.js",revision:"e5723659e08785a1"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/25f355f538e24eb3.css",revision:"25f355f538e24eb3"},{url:"/cta1.svg",revision:"6164c2bd16f2ea5e3489840d98f2803b"},{url:"/cta2.svg",revision:"dd8585544e7f977f799b5eaee467627e"},{url:"/ellipse.svg",revision:"d5a0c660357ea24323e16c5053fc282d"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/feature1.png",revision:"299fbd7733abf884c777fee377cc07a9"},{url:"/feature2.png",revision:"5b52197f0a83015af577053404adb155"},{url:"/feature3.png",revision:"cfc8c4efc0c030c333048a6ab666d119"},{url:"/hero-bg.png",revision:"b0b44be57a92cc7b4c149daf90ea9811"},{url:"/logo-black.png",revision:"c019bd434e5489eb40e386b60cf045c9"},{url:"/logo-white.png",revision:"1092570c039452d90551d328e0652bc9"},{url:"/logo.png",revision:"78cd4f21199e5aa63f5f8b8f277def36"},{url:"/logo.svg",revision:"852814d76f182824bdc27a7d3ec58898"},{url:"/monument.png",revision:"50a9cb9274019c4aeca8cdcc4c9f517a"},{url:"/rangoli.png",revision:"cfcc3c271223d7a3213cd3676e4cd040"},{url:"/square.svg",revision:"063411d7bb242c818e01f96ac6545205"},{url:"/twitter.svg",revision:"0c9462a79f736453eac5bf7cbb756875"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"},{url:"/x-twitter.svg",revision:"c1212da6d50b0211349c0ec41c76a96f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
