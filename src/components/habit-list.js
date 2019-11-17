import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Habit from './habit';

const HabitList = () => {
  const { data, loading } = useQuery(gql`
    query getHabits {
      habits {
        _id
        name
      }
    }
  `);

  if (loading) return <section>Loading...</section>;
  const { habits } = data;
  return (
    <section className="inline-block mt-6">
      <h2 className="font-black text-3xl text-pink-400">My Habits</h2>
      <div className="flex flex-wrap -mx-4">
        {habits.map(habit => (
          <Habit habit={habit} key={habit._id} />
        ))}
      </div>
    </section>
  );
};

export default HabitList;
