export type Config = {
  port?: number;
}

// Define environment variables
export default () => ({
  port: process.env.PORT || 3000,
} as Config);
