import moment from 'moment';
import logo from '../../../assets/logo.png';
import BreakingNews from './BreekingNews';

export default function Header() {
  return (
      <div className='text-center mt-14'>
          <img className='mx-auto' src={logo} />
          <p className='text-lg text-dark-03 my-5'>Journalism Without Fear or Favour</p>
          <p className="text-dark-02">{moment().format('dddd, MMMM D, YYYY')}</p>
          <BreakingNews/>
    </div>
  )
}
