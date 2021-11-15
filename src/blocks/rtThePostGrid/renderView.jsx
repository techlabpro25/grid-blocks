import Layout1 from "./layout/grid/Layout1";

const RenderView = (props) => {
    const {layout, data} = props;
    
    if(layout == "grid"){
        return(
			<>
				<Layout1 {...props} data={data}/>
			</>
		)
    }
    
}

export default RenderView;