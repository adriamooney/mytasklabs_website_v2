/**
 * Resend requires `from` as `email@x.com` or `Name <email@x.com>`.
 * Trims, strips accidental wrapping quotes, fixes "Name email@x.com" (no angle brackets).
 */
export function normalizeResendFrom(raw: string | undefined): string | null {
  if (!raw) return null;
  let s = raw.trim().replace(/\r?\n/g, '');

  // Remove accidental wrapping quotes from env files/copy-paste.
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    s = s.slice(1, -1).trim();
  }

  // Remove stray quotes that sometimes wrap just the display name.
  s = s.replace(/^["']+|["']+$/g, '').trim();
  if (!s) return null;

  const plainEmail = /^[^\s<>]+@[^\s<>]+\.[^\s<>]+$/;
  if (plainEmail.test(s)) return s;

  const displayNameFormat = /^.+<[^>\s]+@[^>\s]+>$/.test(s);
  if (displayNameFormat) return s;

  const withSpace = s.match(/^(.+?)\s+([^\s<>]+@[^\s<>]+\.[^\s<>]+)$/);
  if (withSpace) {
    return `${withSpace[1].trim()} <${withSpace[2]}>`;
  }

  return null;
}
