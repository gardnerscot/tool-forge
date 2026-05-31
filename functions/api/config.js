export async function onRequest(context) {
  const key = context.env.GOOGLE_MAPS_API_KEY;
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
