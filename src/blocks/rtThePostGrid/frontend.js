import RenderView from "./renderView";

const {render, useState, useEffect} = wp.element;
import apiFetch from '@wordpress/api-fetch';

const RtThePostGrid = (props) => {
    const [data, setData] = useState([]);
    const [perPage, setPerPage] = useState(props.limit || 10);
    useEffect(() => {
        apiFetch({render_callback: '/wp/v2/posts?per_page='+perPage}).then((posts) => {
            setData(posts);
        });
    }, [perPage]);

    return (
        <div className="rt-thepostgrid-frontend">
            <RenderView {...props} data={data}/>
        </div>
    )
}

const divsToUpdate = document.querySelectorAll(".rt-thepostgrid")

divsToUpdate.forEach(div => {
    const data = JSON.parse(div.querySelector("pre").innerText)
    render(<RtThePostGrid {...data} />, div)
    div.classList.remove("rt-radius-blocks-ph")
})
