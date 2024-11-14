import headerLogo from '../../../Images/logo.png'
import moment from 'moment';
import Marquee from 'react-fast-marquee';
const Header = () => {

    //return code
    return (
        <div className='text-center container mx-auto p-4'>
            <img src={headerLogo} alt="" className='mx-auto' />
            <p className=' mt-3 text-lg text-gray-600'>Journalism Without Fear or Favour</p>
            <p className=' mt-3 text-xl text-gray-500 font-medium'>{moment().format('dddd, MMMM D, YYYY')}</p>
            <div className='bg-gray-200 flex justify-center gap-3 items-center py-2 mt-3'>
                <button className='text-xl font-medium bg-red-600 px-5 py-1 text-white ml-2'>Latest</button>
                <p className='text-lg font-semibold'><Marquee speed={80} pauseOnHover={true}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as</Marquee></p>
            </div>
        </div>
    );
};

export default Header;