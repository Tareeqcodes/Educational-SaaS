import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className='text-center bg-black justify-center items-center h-screen'>
      <h1 className='text-6xl font-bold mb-4'>404 Not Found</h1>
      <p className='text-xl mb-5'>This page does not exist</p>
      <Link
        to='/'
        className='text-white rounded-md px-3 py-2 mt-4'
      >
        Go Back
      </Link>
    </section>
  );
};
export default NotFoundPage;
