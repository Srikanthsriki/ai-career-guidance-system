const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();
const API_BASE_URL = (
  configuredApiUrl ||
  (import.meta.env.PROD ? "" : "http://localhost:5000")
).replace(/\/+$/, "");

export function apiUrl(path) {
  if (!API_BASE_URL) {
    throw new Error(
      "Backend URL is not configured. Set VITE_API_URL in Vercel to your deployed backend URL, then redeploy."
    );
  }

  return `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
