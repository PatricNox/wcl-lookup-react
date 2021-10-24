import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = process.env.REACT_APP_BACKEND_URL;

const responseBody = res => res.body;
const requests = {
  post: (url, body) => superagent.post(`${API_ROOT}${url}`, body).then(responseBody)

};

const parses = {
  lookup: (character, realm, region) =>
    requests.post('/wcl/parses/lookup', { character: character, realm: realm, region: region }),
};

const endpoints = {
  parses,
};
export default endpoints;
