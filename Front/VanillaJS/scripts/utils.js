const BASE_URL_API = "http://167.71.69.158";

export async function getApiJsonByUrl(url) {
  const response = await fetch(BASE_URL_API + url);
  return response.json();
}

export async function getApiBlobByUrl(url) {
  const response = await fetch(BASE_URL_API + url);
  return response.blob();
}