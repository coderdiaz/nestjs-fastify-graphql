export type Config = {
  port?: number;
  graphql?: {
    debug?: boolean;
    playground?: boolean;
  };
}

// Define environment variables
export default () => ({
  port: process.env.PORT || 3000,
  graphql: {
    debug: process.env.GRAPHQL_DEBUG || false,
    playground: process.env.GRAPHQL_PLAYGROUND || false,
  },
} as Config);
