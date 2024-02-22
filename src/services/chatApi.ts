import {assistant, prompt} from './prompt'

const chatGpt = async (todos) => {
  const response = await
  fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'system', content: `${assistant}` }, { role: 'user', content: `${prompt(todos)}` }],
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      const list = data.choices[0].message.content;
      const listArray = list.split('\n');
      console.log(listArray);
      return listArray;
    })
    .catch((error) => console.error('Error:', error));
  return response;
};

export { chatGpt };