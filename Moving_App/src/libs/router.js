const normalizePath = (path = '/') => {
  const normalized = `/${String(path).replace(/^\/+/, '')}`;
  return normalized === '//' ? '/' : normalized;
};

export const getBaseUrl = () => {
  if (typeof window === 'undefined') return '';
  return window.CONFIG?.BASE_URL || '';
};

export const routeHref = (path = '/') => `${getBaseUrl()}/#${normalizePath(path)}`;

export const getHashPath = () => {
  if (typeof window === 'undefined') return '/';
  return normalizePath(window.location.hash.replace(/^#/, '') || '/');
};

export const movePathToHash = () => {
  if (typeof window === 'undefined' || window.location.hash) return;

  const baseUrl = getBaseUrl();
  let path = window.location.pathname;

  if (baseUrl && path.startsWith(baseUrl)) {
    path = path.slice(baseUrl.length);
  }

  path = path.replace(/^\/+/, '');

  if (path) {
    window.history.replaceState(null, '', routeHref(path));
  }
};
