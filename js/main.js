// register the service worker if available
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function(reg) {
        console.log('Successfully registered service worker', reg);
    }).catch(function(err) {
        console.warn('Error whilst registering service worker', err);
    });
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

window.addEventListener('appinstalled', (evt) => {
  console.log('a2hs installed');
});

window.addEventListener('online', function(e) {
    console.log("You are online");
}, false);

window.addEventListener('offline', function(e) {
    console.log("You are offline");
}, false);

if (window.matchMedia('(display-mode: minimal-ui)').matches) {
  console.log('display-mode is minimal-ui');
}


// check if the user is connected
if (navigator.onLine) {
    console.log("You are online >> navigator.onLine");
}