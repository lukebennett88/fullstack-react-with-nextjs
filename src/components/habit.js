import PropTypes from 'prop-types';

import getLast5Dates from '../utils/getLast5Dates';
import HabitButton from './habit-button';

const Habit = ({ habit }) => {
  const dates = getLast5Dates();
  return (
    <article className="bg-yellow-400 mt-6 mx-4 px-4 py-6 rounded-lg shadow-lg text-yellow-800 hover:shadow-2xl">
      <h3 className="font-black text-2xl">{habit}</h3>
      <div className="flex -mx-2">
        {dates.reverse().map(date => (
          <HabitButton date={date} key={date.getTime()} />
        ))}
      </div>
    </article>
  );
};

Habit.propTypes = {
  habit: PropTypes.string,
};

export default Habit;
