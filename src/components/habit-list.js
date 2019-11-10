import Habit from './habit';

const HabitList = () => {
  return (
    <section>
      <h2 className="font-black text-3xl">My Habits</h2>
      <Habit />
      <Habit />
      <Habit />
    </section>
  );
};

export default HabitList;
