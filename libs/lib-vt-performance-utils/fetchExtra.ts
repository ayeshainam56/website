const baseURL = 'http://192.168.1.36:4000/api/';

export async function fetchExtra(
  input: string,
  init: RequestInit
) {

  const response = await fetch(`${baseURL}${input}`, init);

  switch (response.status) {
    case 200:
    case 201:
      return {
        status: response.status,
        response: response.json(),
      };
    case 204:
      return {
        status: response.status,
      };
    case 401:
      throw await response.json();
    default:
      throw await response.json();
  }
}
