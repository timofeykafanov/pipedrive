const apiUrl = 'https://api.pipedrive.com/v1';
const apiToken = '2aedf0f16be42a9c3674ad8f3744a57a0c4bab09';

const requestData = {
  title: 'Название сделки',
  value: 1000,
  currency: 'USD',
  person_id: 123,
  org_id: 456
};

fetch(`${apiUrl}?api_token=${apiToken}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(requestData)
})
  .then(response => response.json())
  .then(data => {
    console.log('Сделка успешно создана:', data);
  })
  .catch(error => {
    console.error('Ошибка при создании сделки:', error);
  });
