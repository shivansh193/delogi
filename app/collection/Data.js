const axios = require('axios');

const fetchData = async () => {
  const config = {
    method: 'get',
    url: 'https://api.pinata.cloud/data/pinList?status=pinned&pinSizeMin=100',
    headers: {
      'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkM2ZlYjg3Yi1iNmEwLTRkN2EtOTA4NS0yMDY2MjYxOGQxYzQiLCJlbWFpbCI6InNoaXZhbnNoa2FscmE3OTZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImVjMGRlZGJkMGI4MjA1MGM2ZjRhIiwic2NvcGVkS2V5U2VjcmV0IjoiNDA5NDJlOWVhNTRkZDhjN2Q0YWQ2YTE4MGZhZDI2MDY5Y2JmMTc0MjQwY2I2Y2RiNGQ5Njg3ZDcyNGQxNDQ3NSIsImlhdCI6MTY4OTYxNTA1NX0.ATsTaAmPqws8fWxVVABqs1A1N1ov8INk_oe0oXujra4`,
    },
  };

  try {
    const response = await axios(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error retrieving pin jobs:', error);
    return null;
  }
};

module.exports = fetchData;
