// src/lib/firebase.js
export const FIREBASE_BASE =
  "https://website-clone-69396-default-rtdb.firebaseio.com";

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch error ${res.status}`);
  return res.json();
}

/**
 * Fetch products from common firebase paths and normalize to array.
 */
export async function fetchProductsFromFirebase() {
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

      if (Array.isArray(payload)) return payload;

      if (typeof payload === "object") {
        if (payload.products && Array.isArray(payload.products)) {
          return payload.products;
        }
        // convert keyed object -> array
        const arr = Object.keys(payload).map((k) => {
          const item = payload[k];
          if (item && typeof item === "object" && !item.id) item.id = k;
          return item;
        });
        if (arr.length > 0) return arr;
      }
    } catch (e) {
      // try next candidate
    }
  }

  return [];
}
