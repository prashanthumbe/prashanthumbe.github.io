// register the service worker if available
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(function(reg) {
    //console.log('Successfully registered service worker', reg);
  }).catch(function(err) {
    //console.warn('Error whilst registering service worker', err);
  });
}
// check if the user is connected
if (navigator.onLine) {
  //console.log("You are online..!!");
}

window.addEventListener('appinstalled', function(e) {
  console.log('a2hs installed');
});

window.addEventListener('online', function(e) {
  //console.log("You are online");
}, false);

window.addEventListener('offline', function(e) {
  //console.log("You are offline");
}, false);

