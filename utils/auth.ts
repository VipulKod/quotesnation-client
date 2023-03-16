export default function isAuthenticated() {
  if (typeof window !== 'undefined') {
    const token = localStorage?.getItem("token") ?? null;
    return token;
  }
  return null;
}