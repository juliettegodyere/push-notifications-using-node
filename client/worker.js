console.log('Service Worker Loaded');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('Push Received...');
    self.registration.showNotification(data.title, {
        body: 'Notified by Tranversy Media!',
        icon:'https://image.flaticon.com/icons/png/512/33/33447.png'
    })
});