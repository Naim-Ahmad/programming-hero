import moment from 'moment';
import BreakingNews from './BreekingNews';

export default function Header() {
  return (
    <div className='text-center mt-14'>
      {/* <img className='mx-auto' src={logo} /> */}
      <h2 className='text-4xl font-bold'>আল-ইসলাম নিউজ</h2>
      <p className='text-lg text-dark-03 my-5'>ইসলাম এবং মুসলিমদের কল্যাণে</p>
      <p className="text-dark-02">{moment().format('dddd, MMMM D, YYYY')}</p>
      <BreakingNews />
    </div>
  )
}
