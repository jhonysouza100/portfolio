// Configurar el objeto gapi con el cliente ID
function initClient() {
  gapi.client.init({
    apiKey: '',
    clientId: '446488173466-6douof62o9hj9ke44haa4ksg29ctt437.apps.googleusercontent.com',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/analytics/v3/rest'],
    scope: 'https://www.googleapis.com/auth/analytics.readonly'
  }).then(() => {
    // Llamar a la función para manejar la autenticación del usuario
    handleAuth();
  });
}

// Función para manejar la autenticación del usuario
function handleAuth() {
  gapi.auth2.getAuthInstance().signIn().then(() => {
    // Una vez autenticado, llamar a la función para obtener datos de Google Analytics
    getAnalyticsDataII();
  });
}

// Función para obtener datos de Google Analytics
function getAnalyticsDataII() {
  gapi.client.analytics.data.ga.get({
    'ids': 'ga:402544705',
    'start-date': '2023-08-10',
    'end-date': '2023-08-30',
    'metrics': 'ga:sessions,ga:users',
    'dimensions': 'ga:pagePath'
  }).then(response => {
    const data = response.result;
    console.log('Datos obtenidos:', data);
    // Aquí puedes procesar y mostrar los datos según tus necesidades
  }).catch(error => {
    console.error('Error al obtener datos de Google Analytics:', error);
  });
}

// Cargar la API de Google y configurar la autenticación
gapi.load('client:auth2', initClient);


import credentials from './client.json'
import { google } from 'googleapis'

const VIEW_ID = '402544705'


export const getAnalyticsData = async () => {
    const auth = new google.auth.GoogleAuth({
      credentials: credentials,
      scopes: 'https://www.googleapis.com/auth/analytics.readonly'
    })

    const analytics = google.analytics('v3')

    try {
      const response = await analytics.data.ga.get({
        auth: auth,
        ids: `ga:${VIEW_ID}`,
        'start-date': '7daysAgo',
        'end-date': 'yesterday',
        metrics: 'ga:pageviews'
      })

      console.log('Datos de vistas:', response.data.rows)
      
    } catch (error) {
      console.error('Error al obtener los datos:', error)
    }
  }