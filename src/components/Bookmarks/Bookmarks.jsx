
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        
        <div className='w-2/5 p-7 bg-gray-300 ml-4'>
            <h2 className='font-bold text-2xl text-center'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
};

export default Bookmarks;