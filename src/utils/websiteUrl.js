// Validate locally; requesting an audit never fetches the submitted website.
export function normalizeWebsiteUrl(value) {
  const input = value.trim();
  const candidate = /^[a-z][a-z\d+.-]*:/i.test(input) ? input : `https://${input}`;
  const url = new URL(candidate);
  if (!/^https?:$/.test(url.protocol) || !url.hostname.includes('.') || url.username || url.password) {
    throw new Error('Enter a website address such as example.com or https://example.com.');
  }
  return url.href;
}
