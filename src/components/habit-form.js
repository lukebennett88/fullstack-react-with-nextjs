import PropTypes from 'prop-types';

import useForm from 'react-hook-form';

const HabitForm = ({ setHabits }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    setHabits(prevState => [...prevState, data.habit]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="-mx-4">
      <input
        type="text"
        placeholder="Habit"
        name="habit"
        ref={register({ required: true, maxLength: 80 })}
        className="border-2 border-yellow-600 px-4 py-1"
      />
      <button
        type="submit"
        className="bg-yellow-400 font-black ml-4 px-4 py-1 rounded shadow text-yellow-800"
      >
        Submit
      </button>
    </form>
  );
};

HabitForm.propTypes = {
  setHabits: PropTypes.func,
};

export default HabitForm;
