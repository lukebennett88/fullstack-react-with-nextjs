import PropTypes from 'prop-types';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ADD_EVENT = gql`
  mutation addEvent($date: Date, $habitId: ID) {
    addEvent(date: $date, habitId: $habitId) {
      _id
      name
      events {
        _id
        date
      }
    }
  }
`;

const REMOVE_EVENT = gql`
  mutation removeEvent($eventId: ID, $habitId: ID) {
    removeEvent(eventId: $eventId, habitId: $habitId) {
      _id
      name
      events {
        _id
        date
      }
    }
  }
`;

const HabitButton = ({ date, habitId, events }) => {
  const [addEvent] = useMutation(ADD_EVENT, {
    refetchQueries: ['getHabits'],
  });

  const [removeEvent] = useMutation(REMOVE_EVENT, {
    refetchQueries: ['getHabits'],
  });

  const foundDate = events.find(event => {
    const eventDate = new Date(event.date);
    return eventDate.getDate() === date.getDate();
  });

  return (
    <div className="flex flex-col items-center justify-center mt-4 px-2">
      <div>
        {date.getDate()}/{date.getMonth() + 1}
      </div>
      {foundDate ? (
        <button
          onClick={() =>
            removeEvent({
              variables: {
                habitId,
                eventId: foundDate._id,
              },
            })
          }
          type="button"
          className="mt-1 text-xl"
        >
          <FiCheckSquare />
        </button>
      ) : (
        <button
          onClick={() =>
            addEvent({
              variables: {
                habitId,
                date,
              },
            })
          }
          type="button"
          className="mt-1 text-xl"
        >
          <FiSquare />
        </button>
      )}
    </div>
  );
};

HabitButton.propTypes = {
  date: PropTypes.object,
  habitId: PropTypes.string,
  events: PropTypes.array,
};

export default HabitButton;
