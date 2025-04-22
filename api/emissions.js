// netlify/functions/emissions.js
export async function handler(event) {
    const body = JSON.parse(event.body);
  
    const response = await fetch("https://api.lune.co/v1/estimates/shipping/multi-leg", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sFBroShlnbkyxovIr2tX25qdSa7RoMGqQgfQqYCFv6w'
      },
      body: JSON.stringify(body)
    });
  
    const data = await response.json();
    console.log("Function HIT");
    return {
      statusCode: response.status,
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    };
  }

  // api/emissions.js
export default async function handler(req, res) {
  const body = req.body;

  const response = await fetch("https://api.lune.co/v1/estimates/shipping/multi-leg", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer sFBroShlnbkyxovIr2tX25qdSa7RoMGqQgfQqYCFv6w'
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(response.status).json(data);
}
