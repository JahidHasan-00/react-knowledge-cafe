import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            {
                blogs.map(blog => <div key={blog.id}><img src={blog.cover}></img></div>)
            }
        </div>
    );
};

export default Blogs;