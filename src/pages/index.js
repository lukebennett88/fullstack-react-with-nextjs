import Head from 'next/head';
import { useState } from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';

import { withApollo } from '../lib/apollo';
import Layout from '../components/layout';
import HabitForm from '../components/habit-form';
import HabitList from '../components/habit-list';

const Home = () => {
  const [habits, setHabits] = useState(['Go to gym']);
  return (
    <Layout>
      <Head>
        <title>Level Up Your Life</title>
      </Head>
      <div className="mt-12 px-4 relative">
        <HabitForm setHabits={setHabits} />
        <HabitList habits={habits} />
      </div>
    </Layout>
  );
};

export default withApollo(Home);
