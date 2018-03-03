import axios from 'axios';

const HOST = process.env.NODE_ENV === 'production' ?
  'HEROKU URL' : 'http://localhost:3000';

export const signUp = user => axios.post(`${HOST}/api/users`, {user});
export const signIn = user => axios.post(`${HOST}/api/session`, {user});
export const signOut = () => axios.delete(`${HOST}/api/session`);

// client-side rendering
export const visitProfile = id => axios.get(`${HOST}/users/${id}`);
