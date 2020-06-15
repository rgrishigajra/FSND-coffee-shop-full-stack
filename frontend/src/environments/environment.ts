

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-fc34y9lq.us', // the auth0 domain prefix
    audience: 'coffee-api', // the audience set for the auth0 app
    clientId: 'E7D2nk5Kt6zwraESPmFP12fQIJqtagAb', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
