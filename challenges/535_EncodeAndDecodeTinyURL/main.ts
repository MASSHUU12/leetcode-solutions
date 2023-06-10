/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
  return btoa(longUrl);
}

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
  return atob(shortUrl);
}

console.log(decode(encode("https://leetcode.com/problems/design-tinyurl")));
