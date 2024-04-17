
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        
        <div className='w-2/5 p-7 bg-gray-300 ml-4'>
            <div className='py-5 bg-[#6047EC1A] text-center border-2 rounded-lg text-blue-600 border-[#6047EC1A]'>
                <h3 className="font-bold text-2xl"> Reading Time: {readingTime} </h3>
            </div>
            <h2 className='font-bold text-2xl text-center'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
};

export default Bookmarks;