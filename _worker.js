export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // API config endpoint — serves the Google Maps key from env var
    if (url.pathname === '/api/config') {
      const key = env.GOOGLE_MAPS_API_KEY;
      if (!key) {
        return new Response(JSON.stringify({ error: 'key not configured' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      return new Response(JSON.stringify({ apiKey: key }), {
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }
      });
    }
    
    // Everything else: serve from static assets
    return env.ASSETS.fetch(request);
  }
}
