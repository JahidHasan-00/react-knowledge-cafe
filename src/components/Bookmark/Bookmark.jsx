
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-200 m-4 p-5 rounded-lg'>
            <h3 className='font-semibold text-xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
};

export default Bookmark;