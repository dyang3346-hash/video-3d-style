import fetch from "node-fetch";

export default async function handler(req, res) {
  const buffer = await req.arrayBuffer();

  const replicateRes = await fetch(
    "https://api.replicate.com/v1/predictions",
    {
      method: "POST",
      headers: {
        "Authorization": "Token YOUR_REPLICATE_API_KEY",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        version: "VIDEO_3D_CARTOON_MODEL_ID",
        input: {
          video: Buffer.from(buffer).toString("base64")
        }
      })
    }
  );

  const result = await replicateRes.json();
  res.json({ output: result.output });
}
