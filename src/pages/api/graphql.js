import { ApolloServer } from 'apollo-server-micro';
import { mergeResolvers, mergeTypeDefs } from 'graphql-toolkit';

import connectDb from '../../lib/mongoose';
import { habitsResolvers } from '../../api/habits/resolvers';
import { habitsMutations } from '../../api/habits/mutations';
import Habits from '../../api/habits/habits.graphql';

const resolvers = mergeResolvers([habitsResolvers, habitsMutations]);

const typeDefs = mergeTypeDefs([Habits]);

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = apolloServer.createHandler({ path: '/api/graphql' });
export default connectDb(server);
