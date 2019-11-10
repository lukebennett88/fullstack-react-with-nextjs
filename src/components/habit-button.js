import PropTypes from 'prop-types';
import { useState } from 'react';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';

const HabitButton = ({ date }) => {
  const [complete, setComplete] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center mt-4 px-2">
      <div>
        {date.getDate()}/{date.getMonth() + 1}
      </div>
      <button
        onClick={() => setComplete(!complete)}
        type="button"
        className="mt-1 text-xl"
      >
        {complete ? <FiCheckSquare /> : <FiSquare />}
      </button>
    </div>
  );
};

HabitButton.propTypes = {
  date: PropTypes.object,
};

export default HabitButton;
