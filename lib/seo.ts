/**
 * Shared URL and slug helpers for metadata, sitemaps, and course routes.
 * Set NEXT_PUBLIC_SITE_URL to the primary production URL when possible.
 */
function normalizeSiteUrl(value: string | undefined): string | undefined {
  const candidate = value?.trim();
  if (!candidate) return undefined;

  const withProtocol = /^https?:\/\//i.test(candidate) ? candidate : `https://${candidate}`;
  try {
    return new URL(withProtocol).origin;
  } catch {
    return undefined;
  }
}

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined) ||
  process.env.DEPLOY_PRIME_URL ||
  process.env.DEPLOY_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export const SITE_URL = normalizeSiteUrl(configuredSiteUrl);

export function courseSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function absoluteUrl(path: string): string | undefined {
  return SITE_URL ? new URL(path, `${SITE_URL}/`).toString() : undefined;
}
