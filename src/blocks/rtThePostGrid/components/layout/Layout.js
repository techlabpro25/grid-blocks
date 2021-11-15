import { PanelBody, SelectControl } from "@wordpress/components";
import { useState } from "@wordpress/element";
function Layout(props) {
	const { layout } = props.attr.attributes;
	const [option, setOption] = useState("a");
    return (
			<PanelBody title="Layout Type" initialOpen={true}>
				<SelectControl
					label="Layout:"
					options={[
						{label:"Grid", value:"grid"},
						{label:"List", value:"list"},
						{label:"Isotope", value:"isotope"},
					]}
					value={columns.desktop}
					onChange={(val) =>
						props.attr.setAttributes({ layout: val })
					}
				/>
			</PanelBody>
		);
}

export default Layout;