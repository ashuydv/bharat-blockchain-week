if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>c(e,n),o={module:{uri:n},exports:r,require:t};s[n]=Promise.all(a.map((e=>o[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Es1bouNzt9dVEAtcTi8o3/_buildManifest.js",revision:"cac602d908dd1f8d3e7062157a09332b"},{url:"/_next/static/Es1bouNzt9dVEAtcTi8o3/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/141-811ba6f63d85c038.js",revision:"811ba6f63d85c038"},{url:"/_next/static/chunks/294-6bf9fe116a80fc25.js",revision:"6bf9fe116a80fc25"},{url:"/_next/static/chunks/718-f9966a6d803c4f9a.js",revision:"f9966a6d803c4f9a"},{url:"/_next/static/chunks/framework-b085f58f35e4e17b.js",revision:"b085f58f35e4e17b"},{url:"/_next/static/chunks/main-b4d723bc63cb6c56.js",revision:"b4d723bc63cb6c56"},{url:"/_next/static/chunks/pages/_app-e2a99d7344d40c4b.js",revision:"e2a99d7344d40c4b"},{url:"/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",revision:"e4f561a102d9bb14"},{url:"/_next/static/chunks/pages/about-e2888fb121069139.js",revision:"e2888fb121069139"},{url:"/_next/static/chunks/pages/agenda-1f7f2da77ff792c8.js",revision:"1f7f2da77ff792c8"},{url:"/_next/static/chunks/pages/checkout-4a32f0f50d4db6ce.js",revision:"4a32f0f50d4db6ce"},{url:"/_next/static/chunks/pages/createEvent-363ef98b1dd0054d.js",revision:"363ef98b1dd0054d"},{url:"/_next/static/chunks/pages/demoCreateEvent-6844086cdc16b5eb.js",revision:"6844086cdc16b5eb"},{url:"/_next/static/chunks/pages/index-99022b6101cc9ce2.js",revision:"99022b6101cc9ce2"},{url:"/_next/static/chunks/pages/partners-c56219250cb591e5.js",revision:"c56219250cb591e5"},{url:"/_next/static/chunks/pages/promotion-adfc51e4236d21c5.js",revision:"adfc51e4236d21c5"},{url:"/_next/static/chunks/pages/speakers-0305383bd28d3be5.js",revision:"0305383bd28d3be5"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/20b0e4b67fe8f09c.css",revision:"20b0e4b67fe8f09c"},{url:"/_next/static/css/a5869f2b2729111f.css",revision:"a5869f2b2729111f"},{url:"/autonomous.jpeg",revision:"3e7aac09cde5aa50c00191354cb6bab8"},{url:"/backdoornight.jpeg",revision:"d6356e505357473cf96dd863141da789"},{url:"/banner.png",revision:"7670d0472474548e5b22f57b435cd893"},{url:"/blocktalks.jpeg",revision:"0d0d837a9d41ff9e7d81a1b76e8c78af"},{url:"/brinc.jpeg",revision:"537fd7863b1a413479f37b101f87a8a8"},{url:"/buidl.so.jpeg",revision:"7e12f9624e0e9d41912f049731b7b369"},{url:"/buidlers.jpeg",revision:"bd9be6ec161f581b377b3a9933a390e8"},{url:"/buildersmixer.jpeg",revision:"4e98eb795614faa28d390b7a374c1aa8"},{url:"/cta1.svg",revision:"6164c2bd16f2ea5e3489840d98f2803b"},{url:"/cta2.svg",revision:"dd8585544e7f977f799b5eaee467627e"},{url:"/disrupt.jpeg",revision:"0d1ad49e9e83779c157a349e30485425"},{url:"/ellipse.svg",revision:"d5a0c660357ea24323e16c5053fc282d"},{url:"/ethindia.jpeg",revision:"43fa9e66b8315541cdac1709a2192071"},{url:"/expelee.jpeg",revision:"a11d1c665335993c2a8cf74d53c0ea81"},{url:"/farcaster.jpeg",revision:"b2c38cd3c35a660ff20c957a83aad1a2"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/feature1.png",revision:"299fbd7733abf884c777fee377cc07a9"},{url:"/feature2.png",revision:"5b52197f0a83015af577053404adb155"},{url:"/feature3.png",revision:"cfc8c4efc0c030c333048a6ab666d119"},{url:"/filbangalore.jpeg",revision:"a10b8b4cfcdfac81b36c484521021801"},{url:"/ibw.jpeg",revision:"3bd0541caf6666e68b0a061440432720"},{url:"/ibwunwind.jpeg",revision:"63db5688e14b55c7c267e8b29fdb5d1e"},{url:"/logo-black.png",revision:"c019bd434e5489eb40e386b60cf045c9"},{url:"/logo-white.png",revision:"1092570c039452d90551d328e0652bc9"},{url:"/logo.png",revision:"78cd4f21199e5aa63f5f8b8f277def36"},{url:"/logo.svg",revision:"852814d76f182824bdc27a7d3ec58898"},{url:"/metamorphosis.jpeg",revision:"0c3d7c47d0ee28dfa2f78acefe3ef095"},{url:"/monument.png",revision:"50a9cb9274019c4aeca8cdcc4c9f517a"},{url:"/omnichain.jpeg",revision:"622131e51dbf45ef168df271998f5892"},{url:"/polkadotpulse.jpeg",revision:"60040ae221aea7044bed447ae8a2e902"},{url:"/polkamix.jpeg",revision:"ea1cd9f4464e5a69b32bf07d975722fa"},{url:"/polyconnect.jpeg",revision:"571e26b6f38a1c95f72cb91793f9f02c"},{url:"/push.jpeg",revision:"8efe806a4bb8239e05654ff6314e8473"},{url:"/qr.png",revision:"fead93f5b21769fe4ca6366be361bc6c"},{url:"/quillcon.jpeg",revision:"4d062543a3b102427f7cc389e31de40c"},{url:"/rangoli.png",revision:"cfcc3c271223d7a3213cd3676e4cd040"},{url:"/shardeum.jpeg",revision:"79222a2bfc7ee1c074c209dc36fbf3c4"},{url:"/snpitlauch.jpeg",revision:"a7d2c4a503d549de09d08691861dbc58"},{url:"/solidityscan.jpeg",revision:"85fa970d27b165193c008e806d014811"},{url:"/square.svg",revision:"063411d7bb242c818e01f96ac6545205"},{url:"/techfest.jpeg",revision:"1cb07f5d94e125e72ab40237f1ebebfd"},{url:"/twitter.svg",revision:"0c9462a79f736453eac5bf7cbb756875"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"},{url:"/web3carnival.jpeg",revision:"8440475f158e2ad914269609118c339a"},{url:"/web3citizens.jpeg",revision:"22ae166b631adfb960216ff4cdc040f8"},{url:"/web3reinvent.jpeg",revision:"e65ae5b95c27ed75c3b26f4efde4c865"},{url:"/wit.jpeg",revision:"7de00b980a14ea04523a293464b56a82"},{url:"/x-twitter.svg",revision:"c1212da6d50b0211349c0ec41c76a96f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
