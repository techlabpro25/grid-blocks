const Layout1 = (props) => {
    const {data} = props
    return (
        <>
            <div className="rt-container-fluid rt-tpg-container ">
                {
                    data.length && data.map((post) =>{
                        return(
                            <>
                                <div className="rt-col-md-4 rt-col-sm-6 rt-col-xs-12 rt-equal-height  rt-grid-item even-grid-item">
                                    <div className="rt-holder">
                                        <div className="rt-img-holder">
                                            <a data-id={post.id} className="" href={post.post_link}>
                                                <img width="150" height="150" src={post.image_url} className="rt-img-responsive" alt=""/>
                                            </a>
                                        </div>
                                        <div className="rt-detail">
                                            <h3 className="entry-title">
                                                <a data-id={post.id} className="" href={post.post_link}>
                                                    {post.title}
                                                </a>
                                            </h3>
                                            <div className="post-meta-user  ">
                                                <span className="author">
                                                    <i className="fa fa-user"></i>
                                                    <a href={post.author_url}>
                                                        {post.author_name}
                                                    </a>
                                                </span>
                                                <span className="date">
                                                    <i className="far fa-calendar-alt"></i>
                                                    {post.post_date}
                                                </span>
                                                <span className="categories-links">
                                                    <i className="fas fa-folder-open"></i>
                                                    {
                                                        post?.category?.length && post.category.map((cat_item, i) =>{
                                                           
                                                            return(
                                                                <>
                                                                    {(i>0)? ", ":""}
                                                                    <a href={cat_item.cat_link} rel="category">
                                                                        {cat_item.cat_name}
                                                                    </a>
                                                                </>
                                                                
                                                            )  
                                                        }) 
                                                    }
                                                </span>
                                                <span className="post-tags-links">
                                                    <i className="fa fa-tags"></i>
                                                    {
                                                        post?.tags?.length && post.tags.map((tag_item, i) =>{
                                                           
                                                            return(
                                                                <>
                                                                    {(i>0)? ", ":""}
                                                                    <a href={tag_item.tag_link} rel="tag">
                                                                        {tag_item.tag_name}
                                                                    </a>
                                                                </>
                                                                
                                                            )  
                                                        }) 
                                                    }
                                                </span>
                                                <span className="comment-count">
                                                    <i className="fas fa-comments"></i>
                                                    <a href={`${post.post_link}/#respond`}>
                                                        {post.comment_count}
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="tpg-excerpt">
                                                {post.excerpt}
                                            </div>
                                            <div className="post-meta ">
                                                <span className="read-more">
                                                    <a data-id={post.id} className="" href={post.post_link}>
                                                        Read More
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Layout1;