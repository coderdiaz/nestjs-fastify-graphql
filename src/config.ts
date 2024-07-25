export type Config = {
  port?: number;
  graphql?: {
    graphiql?: boolean;
  };
}

// Define environment variables
export default () => ({
  port: process.env.PORT || 3000,
  graphql: {
    graphiql: process.env.GRAPHQL_PLAYGROUND || false,
  },
} as Config);
