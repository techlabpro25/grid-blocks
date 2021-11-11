import Layout1 from "./layout/grid/Layout1";

const RenderView = (props) => {
    const {data} = props;
    console.log(data);
    return (
        <>  
            {/* <Layout1 {...props} data={data} /> */}
            <h2 className="tt_heading">Radius post react</h2>
            <ul>
                {data.length && data.map((post) => {
                    return (
                    <li key={post.id}>{post.title}, {post.post_date}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default RenderView;