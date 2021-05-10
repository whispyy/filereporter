const { ApolloServer, gql } = require('apollo-server');
const readPath = require('./src/services/readpath').readPath;

const typeDefs = gql`
  type Node {
    path: String,
    lastModifiedTime: String,
    size: String,
    name: String,
    isFile: Boolean,
    isDirectory: Boolean,
    subNode: [Node],
    fileCount: Int,
    folderCount: Int,
    totalFiles: Int,
    totalFolder: Int,
  }

  type Query {
    node(path: String): Node
  }
`;

const resolvers = {
  Query: {
    node: async (_, { path }) => {
      const nodes = await readPath(path || __dirname);
      return ( nodes || {});
    }
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
