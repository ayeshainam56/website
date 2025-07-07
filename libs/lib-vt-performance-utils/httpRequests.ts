import { fetchExtra } from './fetchExtra';

type postRequestDto<T> = {
  url: string;
  data: T;
  useAuth?: boolean;
  otherHeaders?: Record<string, string>;
};

export async function postRequest<T>({
  url,
  data,
  otherHeaders = {},
}: postRequestDto<T>) {
  return await fetchExtra(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...otherHeaders,
      },
      body: JSON.stringify({ ...data }),
    }
  );
}

type patchRequestDto<T> = {
  url: string;
  data: T;
  useAuth?: boolean;
  otherHeaders?: Record<string, string>;
};

export async function patchRequest<T>({
  url,
  data,
  otherHeaders = {}
}: patchRequestDto<T>) {
  return await fetchExtra(
    url,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...otherHeaders,
      },
      body: JSON.stringify({
        ...data,
      }),
    }
  );
}

type getRequestDto = {
  url: string;
  useAuth?: boolean;
  otherHeaders?: Record<string, string>;
};

export async function getRequest<T>({
  url,
  otherHeaders = {},
}: getRequestDto): Promise<T> {
  return (
    await fetchExtra(
      url,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...otherHeaders,
        },
      }
    )
  ).response as T;
}

//Delete Request
type deleteRequestDto = {
  url: string;
  useAuth?: boolean;
  otherHeaders?: Record<string, string>;
};

export async function deleteRequest<T>({
  url,
  otherHeaders = {},
}: deleteRequestDto): Promise<T> {
  return (
    await fetchExtra(
      url,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          ...otherHeaders,
        },
      }
    )
  ).response as T;
}
