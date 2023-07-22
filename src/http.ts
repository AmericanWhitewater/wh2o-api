type HttpMethod = "GET" | "PATCH" | "POST" | "PUT" | "DELETE";

const baseUrl = process.env.AW_API_BASE_URL;

const getConfig = () => ({
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control":
      "no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
  },
});

const request = (method: HttpMethod, url: string, options?: RequestInit) =>
  fetch(baseUrl + url, {
    method,
    ...getConfig(),
    ...options,
  } as RequestInit).then(checkResponse);

/**
 * A wrapper around the JS `fetch` built-in which applies
 * common configuration for each HTTP method.
 *
 * @example const value = await http.get("/api/foo-endpoint").then(res => checkResponse(res))
 * @example const value = await http.post("/api/foo-endpoint", { body: JSON.stringify(payload) }).then(res => checkResponse(res))
 */
const http = {
  get: (url: string, options?: RequestInit) => request("GET", url, options),
  patch: (url: string, options?: RequestInit) => request("PATCH", url, options),
  post: (url: string, options?: RequestInit) => request("POST", url, options),
  put: (url: string, options?: RequestInit) => request("PUT", url, options),
  delete: (url: string, options?: RequestInit) =>
    request("DELETE", url, options),
};

export const checkResponse = async (res: Response, errorMsg = "") => {
  if (!res.ok) {
    throw new Error(errorMsg || res.statusText);
  }
  return await res.json();
};

export default http;
