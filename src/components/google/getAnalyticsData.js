const getAnalyticsData = async (token) => {
  const analyticsApiUrl = 'https://analyticsreporting.googleapis.com/v4/reports:batchGet';

  const requestData = {
    reportRequests: [
      {
        viewId: '402544705',
        dateRanges: [
          {
            startDate: '2023-08-01',
            endDate: '2023-08-10',
          },
        ],
        metrics: [
          {
            expression: 'ga:sessions',
          },
        ],
      },
    ],
  };

  try {
    const response = await fetch(analyticsApiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }

    const data = await response.json();
    console.log('Respuesta de la API:', data);
    return data; // Puedes devolver los datos o realizar más operaciones aquí
  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw error;
  }
}

export default getAnalyticsData;
