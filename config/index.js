const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "https://jsonplaceholder.typicode.com/users"
  : "http://www.website.com";
