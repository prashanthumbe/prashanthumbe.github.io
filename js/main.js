// register the service worker if available
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./js/sw.js').then(function(reg) {
        console.log('Successfully registered service worker', reg);
    }).catch(function(err) {
        console.warn('Error whilst registering service worker', err);
    });
}

window.addEventListener('online', function(e) {
    // re-sync data with server
    console.log("You are online");
    Page.hideOfflineWarning();
}, false);

window.addEventListener('offline', function(e) {
    // queue up events for server
    console.log("You are offline");
    Page.showOfflineWarning();
}, false);

// check if the user is connected
if (navigator.onLine) {
    console.log("You are online >> navigator.onLine");
} else {
    // show offline message
    Page.showOfflineWarning();
}