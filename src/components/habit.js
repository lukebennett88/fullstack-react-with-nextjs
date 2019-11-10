import HabitButton from './habit-button';

const Habit = () => {
  return (
    <article className="mt-6">
      <h3 className="font-black text-2xl">Habit Title</h3>
      <div>
        <HabitButton />
        <HabitButton />
        <HabitButton />
        <HabitButton />
        <HabitButton />
      </div>
    </article>
  );
};

export default Habit;
