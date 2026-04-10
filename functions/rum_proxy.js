export async function onRequestPost(context) {
  const request = context.request;
  const body = await request.arrayBuffer();

  const response = await fetch("https://cloudflareinsights.com/cdn-cgi/rum", {
    method: "POST",
    headers: {
      "Content-Type": request.headers.get("Content-Type"),
    },
    body: body,
  });

  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
}
