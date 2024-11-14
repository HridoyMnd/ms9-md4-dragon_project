import headerLogo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {

    //return code
    return (
        <div className='text-center container mx-auto'>
            <img src={headerLogo} alt="" className='mx-auto' />
            <p className=' mt-3 text-lg text-gray-600'>Journalism Without Fear or Favour</p>
            <p className=' mt-3 text-xl text-gray-500 font-medium'>{moment().format('dddd, MMMM D, YYYY')}</p>
            <div className='bg-gray-200 flex justify-center w-10/12 mx-auto gap-3 items-center py-2 mt-3'>
                <button className='text-xl font-medium bg-red-600 px-5 py-1 text-white'>Latest</button>
                <p className='text-lg font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </div>
        </div>
    );
};

export default Header;