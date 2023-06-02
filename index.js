const apiUrl = 'https://api.pipedrive.com/v1/deals';
const apiToken = 'cbaa8bdfe56a6d441e1ef4eec8b1460fd2b6dff8';

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
