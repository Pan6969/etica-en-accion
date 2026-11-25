const json = (statusCode, payload) => new Response(JSON.stringify(payload), {
  status: statusCode,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store, max-age=0',
    'x-content-type-options': 'nosniff'
  }
});

export default async (request) => {
  if (request.method !== 'POST') {
    return json(405, { error: 'Method not allowed' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    return json(503, { error: 'Visit counter is not configured' });
  }

  try {
    const baseUrl = supabaseUrl.replace(/\/$/, '');
    const response = await fetch(`${baseUrl}/rest/v1/rpc/register_visit`, {
      method: 'POST',
      headers: {
        apikey: serviceRoleKey,
        authorization: `Bearer ${serviceRoleKey}`,
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: '{}',
      signal: AbortSignal.timeout(8000)
    });

    if (!response.ok) {
      return json(502, { error: 'Visit counter service failed' });
    }

    const result = await response.json();
    const count = typeof result === 'number' ? result : Number(result);
    if (!Number.isSafeInteger(count) || count < 151) {
      return json(502, { error: 'Visit counter returned an invalid value' });
    }

    return json(200, { visits: count });
  } catch {
    return json(502, { error: 'Visit counter is temporarily unavailable' });
  }
};
