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

  const text = await response.text();
  console.log("status:", response.status);
  console.log("body:", text);

  return new Response(
    JSON.stringify({
      status: response.status,
      body: text,
    }),
    { status: 200 },
  );
}
