import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { withApollo } from '../lib/apollo';
import Layout from '../components/layout';
import HabitList from '../components/habit-list';

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);
  if (loading) return <div>Loading...</div>;
  return (
    <Layout>
      <div className="mt-12">
        <HabitList />
      </div>
    </Layout>
  );
};

export default withApollo(Home);
