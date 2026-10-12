// Builds a URL for files inside /public (works on any GitHub Pages path)
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
