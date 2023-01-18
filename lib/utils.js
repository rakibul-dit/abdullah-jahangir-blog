export const isActive = (url, pathname) =>
	pathname.startsWith(url) ? "active" : "";
