
import {BsBookmarks} from 'react-icons/bs'
import PropTypes from 'prop-types'
const Blog = ({blog, handleAddToBookmarks}) => {
    const {title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div className=''>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex items-center justify-between mt-8'>
                <div className='flex gap-6'>
                   <img className='w-16 h-16 rounded-full p-2' src={author_img} alt="" /> 
                   <div>
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <p className='font-semibold text-base text-[#11111199]'>{posted_date}</p>
                   </div>
                </div>
                <div>
                    <span className='font-medium text-xl text-[#11111199]'>{reading_time} min read</span>
                    <button className='ml-4 text-xl' onClick={()=>handleAddToBookmarks(blog)}><BsBookmarks/></button>
                </div>
            </div>
            <h2 className='text-4xl my-4'>{title}</h2>
            <p className='mb-8'>
            {
                hashtags.map((hash, idx) => <span key={idx}><a className='font-medium text-xl text-[#11111199]' href="">#{hash}</a></span>)
            }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired
}

export default Blog;