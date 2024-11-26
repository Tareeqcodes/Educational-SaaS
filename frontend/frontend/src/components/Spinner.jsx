import RingLoader from 'react-spinners/RingLoader';

const override = {
  display: 'block',
  margin: '200px auto',
};

const Spinner = ({ loading }) => {
  return (
    <RingLoader
      color='#fff'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};
export default Spinner;
