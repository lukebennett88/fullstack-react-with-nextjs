import { useState } from 'react';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';

const HabitButton = () => {
  const [complete, setComplete] = useState(false);
  return (
    <button
      onClick={() => setComplete(!complete)}
      type="button"
      className="text-xl"
    >
      {complete ? <FiCheckSquare /> : <FiSquare />}
    </button>
  );
};

export default HabitButton;
