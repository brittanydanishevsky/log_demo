export function middleware(request) {
    const auth = request.headers.get("authorization");
  
    const expected = "Basic " + btoa("user:lune-demo-password");
  
    if (auth === expected) {
      return new Response(null, { status: 200 });
    }
  
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Freight Dashboard"'
      }
    });
  }
