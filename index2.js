const axios = require('axios');
axios.get('https://vk.com')
    .then(response => {
        console.log('Статус:', response.status);
        console.log('Первые 200 символов HTML:', response.data.slice(0, 200));
    })
    .catch(error => console.error('Ошибка:', error.message));
axios.get('https://json.geoiplookup.io/')
    .then(response => {
        console.log('Данные геолокации:', response.data);
    })
    .catch(error => console.error('Ошибка:', error.message));