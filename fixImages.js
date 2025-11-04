import fs from "fs";

const file = "./src/Data/productsData.js";
let content = fs.readFileSync(file, "utf-8");

// list of 10 working Unsplash CDN URLs
const pool = [
  "https://images.unsplash.com/photo-1519741497954-0b4f7b1b7f5b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1520975918319-38d8f6e4b6b2?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1514995669114-7f7a5b8a2f66?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1495121605193-b116b5b09a3f?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519744346360-69b3a3f5e3f9?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
];

// replace each unsplash URL with a rotating one from pool
let index = 0;
content = content.replace(/https:\/\/source\.unsplash\.com[^"]+/g, () => {
  const url = pool[index % pool.length];
  index++;
  return url;
});

fs.writeFileSync(file, content, "utf-8");
console.log("✅ Replaced all images with different Unsplash CDN URLs.");
