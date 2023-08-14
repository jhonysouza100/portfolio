import credentials from './clientData.json';

const getAccessToken = async (authorizationCode) => {
  const { web } = credentials;
  const { client_id, client_secret, redirect_uris } = web;

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id,
      client_secret,
      redirect_uri: redirect_uris[0],
      grant_type: 'authorization_code',
      code: authorizationCode,
    }),
  });

  const data = await response.json();
  return data.access_token;
};

export default getAccessToken;

