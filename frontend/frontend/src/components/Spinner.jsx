import RingLoader from 'react-spinners/RingLoader';

const override = {
  display: 'block',
  margin: '200px auto',
};

const Spinner = ({ loading }) => {
  return (
    <RingLoader
      color='#333'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};
export default Spinner;
