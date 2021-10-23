import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = process.env.REACT_APP_BACKEND_URL;

const responseBody = res => res.body;
const requests = {
  post: (url, body) => superagent.post(`${API_ROOT}${url}`, body).then(responseBody)

};

const parses = {
  lookup: (request) =>
    requests.post('/wcl/parses/lookup', { character: request, realm: 'ravencrest', region: 'eu' }),
};

export default {
  parses,
};
