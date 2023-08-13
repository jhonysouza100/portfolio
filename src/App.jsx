import { useEffect, useState } from 'react';
import './App.css';
import getAccessToken from './components/google/getAccessToken';
import getAnalyticsData from './components/google/getAnalyticsData';

import credentials from './components/google/client.json';


function App() {
  const { web } = credentials;
  const { client_id, client_secret, redirect_uris } = web;
  const [token, setToken] = useState(null);
  const [analyticsData, setAnalyticsData] = useState(null);

  const handleLoginClick = () => {
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${client_id}&redirect_uri=${redirect_uris}&response_type=code&scope=email+profile`;

    // Redirige al usuario a la página de autorización de Google
    window.location.href = authUrl;
  };

  useEffect(() => {
    const fetchToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const authorizationCode = urlParams.get('code');

      if (authorizationCode) {
        const accessToken = await getAccessToken(authorizationCode);
        setToken(accessToken);

        // Ahora que tenemos el token de acceso, obtenemos los datos de Google Analytics
        const analyticsData = await getAnalyticsData(accessToken);
        setAnalyticsData(analyticsData);
      }
    };

    fetchToken();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <button onClick={handleLoginClick}>Iniciar sesión con Google</button>
        ) : (
          <>
            <p>Token de acceso: {token}</p>
            {analyticsData && (
              <p>Resultados de Google Analytics: {JSON.stringify(analyticsData)}</p>
            )}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
