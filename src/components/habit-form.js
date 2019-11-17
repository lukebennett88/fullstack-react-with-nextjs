import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import useForm from 'react-hook-form';
import { FiAlertTriangle } from 'react-icons/fi';

const HabitForm = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const [addHabit] = useMutation(
    gql`
      mutation addHabit($habit: HabitInput) {
        addHabit(habit: $habit) {
          _id
          name
        }
      }
    `,
    {
      refetchQueries: ['getHabits'],
    }
  );

  const onSubmit = data => {
    addHabit({
      variables: {
        habit: {
          name: data.habit,
        },
      },
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
      {errors.habit && (
        <p className="absolute flex font-black items-center text-pink-400 px-4 top-0 -mt-8">
          <FiAlertTriangle className="text-pink-300" />{' '}
          <span className="ml-1">Please add a new habit</span>
        </p>
      )}
      <input
        type="text"
        placeholder="Habit"
        name="habit"
        ref={register({ required: true, maxLength: 80 })}
        className="bg-blue-800 border-2 border-pink-400 font-black px-4 py-1 rounded text-pink-400 placeholder-pink-400 shadow hover:shadow-lg"
      />
      <button
        type="submit"
        className="bg-pink-400 font-black ml-4 px-4 py-1 rounded shadow text-pink-800 hover:bg-pink-500 hover:shadow-lg hover:text-pink-900"
      >
        Submit
      </button>
    </form>
  );
};

export default HabitForm;
