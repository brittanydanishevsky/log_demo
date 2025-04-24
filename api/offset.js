export default async function handler(req, res) {
    const body = req.body;
  
    const response = await fetch("https://api.lune.co/v1/orders/by-mass/quote", {
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
  