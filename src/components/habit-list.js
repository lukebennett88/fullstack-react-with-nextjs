import PropTypes from 'prop-types';

import Habit from './habit';

const HabitList = ({ habits }) => {
  return (
    <section className="inline-block mt-6">
      <h2 className="font-black text-3xl">My Habits</h2>
      <div className="flex flex-wrap -mx-4">
        {habits.map(habit => (
          <Habit habit={habit} key={habit} />
        ))}
      </div>
    </section>
  );
};

HabitList.propTypes = {
  habits: PropTypes.array,
};

export default HabitList;
