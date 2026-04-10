export async function onRequestPost(context) {
  const request = context.request;

  const response = await fetch("https://cloudflareinsights.com/cdn-cgi/rum", {
    method: "POST",
    headers: request.headers,
    body: request.body,
  });

  return response;
}
