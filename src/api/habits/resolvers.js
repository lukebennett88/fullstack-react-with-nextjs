export const habitResolvers = {
  Query: {
    async habits() {
      console.log('Query habit');
      return [
        {
          _id: 'Array goes here',
          name: 'Name of habit goes here',
        },
      ];
    },
  },
};
