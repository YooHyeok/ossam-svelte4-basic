const normalizePath = (path = '/') => {
  const normalized = `/${String(path).replace(/^\/+/, '')}`;
  return normalized === '//' ? '/' : normalized;
};

export const getBaseUrl = () => {
  if (typeof window === 'undefined') return '';
  return window.CONFIG?.BASE_URL || '';
};

export const isHashRouter = () => {
  if (typeof window === 'undefined') return false;
  return window.CONFIG?.ROUTER_MODE === 'hash';
};

export const routeHref = (path = '/') => {
  const routePath = normalizePath(path);
  return isHashRouter() ? `${getBaseUrl()}/#${routePath}` : `${getBaseUrl()}${routePath}`;
};

export const getRoutePath = () => {
  if (typeof window === 'undefined') return '/';

  if (isHashRouter()) {
    return normalizePath(window.location.hash.replace(/^#/, '') || '/');
  }

  const baseUrl = getBaseUrl();
  let path = window.location.pathname;

  if (baseUrl && path.startsWith(baseUrl)) {
    path = path.slice(baseUrl.length);
  }

  return normalizePath(path || '/');
};

export const movePathToHash = () => {
  if (typeof window === 'undefined' || !isHashRouter() || window.location.hash) return;

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
