import app from './src/app.js';
import Bun from 'bun';

const bunApp = Bun.serve({
  // Use Render's assigned port OR fallback to 3030 for localhost
  port: process.env.PORT || 3030, 
  hostname: "0.0.0.0", // Ensure it binds to all interfaces, required for Render
  fetch: app.fetch,
});

console.log(`server is started goto ${bunApp.url}ui`);
