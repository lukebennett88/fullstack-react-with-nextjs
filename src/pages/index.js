import Head from 'next/head';

import { withApollo } from '../lib/apollo';
import Layout from '../components/layout';
import HabitForm from '../components/habit-form';
import HabitList from '../components/habit-list';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Level Up Your Life</title>
      </Head>
      <div className="mt-12 px-4 relative">
        <HabitForm />
        <HabitList />
      </div>
    </Layout>
  );
};

export default withApollo(Home);
