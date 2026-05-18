export const getCookieValue = (
  cookieHeader: string | undefined,
  cookieName: string,
) => {
  if (!cookieHeader) {
    return undefined;
  }

  const cookies = cookieHeader.split(';');

  for (const cookie of cookies) {
    const [rawName, ...rawValue] = cookie.trim().split('=');

    if (rawName === cookieName) {
      const value = rawValue.join('=');
      return value ? decodeURIComponent(value) : undefined;
    }
  }

  return undefined;
};
