const server =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://myserver.com";
export { server };
