import { createClient } from "microcms-js-sdk";

console.log("Service Domain:", process.env.NEXT_PUBLIC_SERVICE_DOMAIN);
console.log("API Key:", process.env.NEXT_PUBLIC_API_KEY);

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "",
  apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
});
