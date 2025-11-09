// src/lib/firebase.js
export const FIREBASE_BASE =
  "https://website-clone-69396-default-rtdb.firebaseio.com";

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch error ${res.status}`);
  return res.json();
}

/**
 * Attempts to fetch product list from known keys.
 * Tries /products.json then root .json as fallback.
 * Returns array of products.
 */
export async function fetchProductsFromFirebase() {
  // try common path
  const candidates = [
    `${FIREBASE_BASE}/products.json`,
    `${FIREBASE_BASE}/items.json`,
    `${FIREBASE_BASE}/data.json`,
    `${FIREBASE_BASE}/.json`,
  ];

  for (const url of candidates) {
    try {
      const payload = await fetchJson(url);
      if (!payload) continue;

      // If root returned object containing items keyed by id
      if (Array.isArray(payload)) {
        return payload;
      }

      // If object with numeric keys or nested objects -> convert to array
      if (typeof payload === "object") {
        // If there is a top-level "products" key
        if (payload.products && Array.isArray(payload.products)) {
          return payload.products;
        }
        // payload may be object of objects: { id1: {...}, id2: {...} }
        const arr = Object.keys(payload).map((k) => {
          const item = payload[k];
          // attach id if not present
          if (item && typeof item === "object" && !item.id) item.id = k;
          return item;
        });
        // return non-empty arrays only
        if (arr.length > 0) return arr;
      }
    } catch (e) {
      // try next candidate
      // console.warn("firebase fetch failed for", url, e);
    }
  }

  // final fallback: empty array
  return [];
}
