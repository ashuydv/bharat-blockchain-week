if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/294-121c8dfb3b71324a.js",revision:"121c8dfb3b71324a"},{url:"/_next/static/chunks/718-f9966a6d803c4f9a.js",revision:"f9966a6d803c4f9a"},{url:"/_next/static/chunks/framework-b085f58f35e4e17b.js",revision:"b085f58f35e4e17b"},{url:"/_next/static/chunks/main-b4d723bc63cb6c56.js",revision:"b4d723bc63cb6c56"},{url:"/_next/static/chunks/pages/_app-e2a99d7344d40c4b.js",revision:"e2a99d7344d40c4b"},{url:"/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",revision:"e4f561a102d9bb14"},{url:"/_next/static/chunks/pages/about-8848dd8b952331c4.js",revision:"8848dd8b952331c4"},{url:"/_next/static/chunks/pages/agenda-1f7f2da77ff792c8.js",revision:"1f7f2da77ff792c8"},{url:"/_next/static/chunks/pages/checkout-e29ef0a11f6a0800.js",revision:"e29ef0a11f6a0800"},{url:"/_next/static/chunks/pages/createEvent-eafe4ea4a00d652a.js",revision:"eafe4ea4a00d652a"},{url:"/_next/static/chunks/pages/index-be935697b37daec6.js",revision:"be935697b37daec6"},{url:"/_next/static/chunks/pages/partners-c56219250cb591e5.js",revision:"c56219250cb591e5"},{url:"/_next/static/chunks/pages/promotion-cbb89209181c9edb.js",revision:"cbb89209181c9edb"},{url:"/_next/static/chunks/pages/speakers-0305383bd28d3be5.js",revision:"0305383bd28d3be5"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/20b0e4b67fe8f09c.css",revision:"20b0e4b67fe8f09c"},{url:"/_next/static/css/ebd7427eaa482d7a.css",revision:"ebd7427eaa482d7a"},{url:"/_next/static/k-4rkwClgkp0ee2mX9YNK/_buildManifest.js",revision:"262e1066d8b3e198dff411db8d45dc5b"},{url:"/_next/static/k-4rkwClgkp0ee2mX9YNK/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/cta1.svg",revision:"6164c2bd16f2ea5e3489840d98f2803b"},{url:"/cta2.svg",revision:"dd8585544e7f977f799b5eaee467627e"},{url:"/ellipse.svg",revision:"d5a0c660357ea24323e16c5053fc282d"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/feature1.png",revision:"299fbd7733abf884c777fee377cc07a9"},{url:"/feature2.png",revision:"5b52197f0a83015af577053404adb155"},{url:"/feature3.png",revision:"cfc8c4efc0c030c333048a6ab666d119"},{url:"/hero-bg.png",revision:"b0b44be57a92cc7b4c149daf90ea9811"},{url:"/logo-black.png",revision:"c019bd434e5489eb40e386b60cf045c9"},{url:"/logo-white.png",revision:"1092570c039452d90551d328e0652bc9"},{url:"/logo.png",revision:"78cd4f21199e5aa63f5f8b8f277def36"},{url:"/logo.svg",revision:"852814d76f182824bdc27a7d3ec58898"},{url:"/monument.png",revision:"50a9cb9274019c4aeca8cdcc4c9f517a"},{url:"/qr.png",revision:"fead93f5b21769fe4ca6366be361bc6c"},{url:"/rangoli.png",revision:"cfcc3c271223d7a3213cd3676e4cd040"},{url:"/square.svg",revision:"063411d7bb242c818e01f96ac6545205"},{url:"/twitter.svg",revision:"0c9462a79f736453eac5bf7cbb756875"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"},{url:"/x-twitter.svg",revision:"c1212da6d50b0211349c0ec41c76a96f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
