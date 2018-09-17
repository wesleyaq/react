import CONFIG from '../config';

const BaseURL = CONFIG.SRV.URL;

export function Get(serv) {
  return new Promise((resolve, reject) => {
    fetch(`${serv}`, { //${BaseURL}
      method: 'GET'
    })
    .then((resp) => resp.json())
    .then((resp) => {
      resolve(resp);
    })
    .catch((error) => {
      reject(error);
    });
  });
};

export function GetById(serv, id) {
  return new Promise((resolve, reject) => {
    fetch(`${BaseURL}${serv}/${id}`, {
      method: 'GET'
    })
    .then((resp) => resp.json())
    .then((resp) => {
      resolve(resp);
    })
    .catch((error) => {
      reject(error);
    });
  });
};

export function Post(serv, data) {
  return new Promise((resolve, reject) => {
    fetch(`${BaseURL}${serv}`, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then((resp) => resp.json())
    .then((resp) => {
      resolve(resp);
    })
    .catch((error) => {
      reject(error);
    });
  });
};