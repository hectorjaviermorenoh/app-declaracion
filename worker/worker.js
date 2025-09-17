export default {
  async fetch(request) {
    // ⚡ Manejo de preflight CORS
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "*"
        }
      });
    }

    const destino =
      "https://script.google.com/macros/s/AKfycbziHDpQfYjrIdCaiB9w9uZqNgp6czAkNQVoPo0XxPuuWEFXJP0KxqRaZ48VRjRXU1Xx/exec";

    try {
      let response;

      if (request.method === "POST") {
        // 🚀 reenviar con body
        const body = await request.text();
        response = await fetch(destino, {
          method: "POST",
          body,
          headers: { "Content-Type": "application/json" }
        });
      } else if (request.method === "GET") {
        // 🚀 reenviar querystring
        const url = new URL(request.url);
        response = await fetch(`${destino}?${url.searchParams.toString()}`, {
          method: "GET"
        });
      } else {
        return new Response("Método no permitido", { status: 405 });
      }

      const content = await response.text();

      return new Response(content, {
        status: response.status,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "*",
          "Content-Type": "application/json"
        }
      });
    } catch (err) {
      return new Response(
        JSON.stringify({
          success: false,
          message: `❌ Worker error: ${err.message}`
        }),
        {
          status: 500,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        }
      );
    }
  }
};
