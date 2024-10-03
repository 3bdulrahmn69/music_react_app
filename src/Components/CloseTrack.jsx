import PropTypes from 'prop-types';

const CloseTrack = ({ setCurrentTrack }) => {
  return (
    <button
      className="absolute top-0 right-0 bg-red-500  text-gray-200 p-1 w-8 h-8 flex items-center justify-center rounded-tr-lg rounded-bl-lg hover:bg-red-600 transition-colors"
      onClick={() => setCurrentTrack(null)}
    >
      X
    </button>
  );
};

CloseTrack.propTypes = {
  setCurrentTrack: PropTypes.func.isRequired,
};

export default CloseTrack;