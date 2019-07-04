import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://joke3.p.rapidapi.com/v1',
  headers: {
    'X-RapidAPI-Host': 'joke3.p.rapidapi.com',
    'X-RapidAPI-Key': '484dcbd25cmsh83b9af51c41404dp17692djsn14cd28f2b0d2',
  },
});

export const fetchJoke = async () => {
  try {
    return await instance.get(`/joke`).then(response => response.data);
  } catch (error) {
    throw new Error('Ошибка сети. Попробуйте ещё раз');
  }
};

export const fetchJokeById = async id => {
  try {
    return await instance.get(`/joke/${id}`).then(response => response.data);
  } catch (error) {
    throw new Error('Ошибка сети. Попробуйте ещё раз');
  }
};

export const upvoteJoke = async id => {
  try {
    return await instance
      .post(`/joke/${id}/upvote`)
      .then(response => response.data);
  } catch (error) {
    throw new Error('Ошибка сети. Попробуйте ещё раз');
  }
};

export const downvoteJoke = async id => {
  try {
    return await instance
      .post(`/joke/${id}/downvote`)
      .then(response => response.data);
  } catch (error) {
    throw new Error('Ошибка сети. Попробуйте ещё раз');
  }
};
