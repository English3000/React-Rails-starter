import axios from 'axios';

const csrfToken = document.querySelector("meta[name=csrf-token]").content;
axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;

const HOST = process.env.NODE_ENV === 'production' ?
  'HEROKU URL' : 'http://localhost:3000';

export const signUp = user => axios.post(`${HOST}/api/users`, {user});
export const signIn = user => axios.post(`${HOST}/api/session`, {user});
export const signOut = () => axios.delete(`${HOST}/api/session`);

// client-side rendering
export const visitProfile = id => axios.get(`${HOST}/users/${id}`, {params: {visited: true}});
