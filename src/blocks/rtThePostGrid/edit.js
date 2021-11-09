import RenderView from "./renderView";
import apiFetch from "@wordpress/api-fetch";

import {  
	PanelBody, 
	ColorPalette,
	TextControl,
	TabPanel,
	__experimentalText as Text
 } from '@wordpress/components';

import Query from './components/query/Query';
import Layout from './components/layout/Layout';
import Columns from './components/layout/Columns';
import Pagination from './components/layout/Pagination';
import Linking from './components/layout/Linking';

const {__} = wp.i18n;
const {InspectorControls} = wp.blockEditor
const {useState, useEffect} = wp.element;

export default function Edit(props) {
    const {attributes, setAttributes} = props;
    const [data, setData] = useState([]);
    useEffect(() => {
        if (!attributes.limit) {
            return;
        }
        apiFetch({path: '/wp/v2/posts?per_page=' + attributes.limit}).then((posts) => {
            setData(posts);
        });
    }, [attributes.limit]);

    const global_attr = {attributes, setAttributes}
    return (
        <>
            <InspectorControls>
                <PanelBody title={__("Radius Posts", 'radius-blocks')}>
                    <TabPanel
                        className="custom-tab-panel"
                        activeClass="active-tab"
                        tabs={ [
                            {
                                name: 'query',
                                title: 'Query',
                                className: 'tab-query panel_tab',
                            },
                            {
                                name: 'layout',
                                title: 'Layout',
                                className: 'tab-latout panel_tab',
                            },
                            {
                                name: 'advanced',
                                title: 'Advanced',
                                className: 'tab-advanced panel_tab',
                            }
                            
                        ] }
                    >
                        { ( tab ) => {
                            if(tab?.name == "query"){
                                return(
                                    <>
                                        {/* Query  */}
                                        <Query attr={global_attr} />
                                    </>
                                )
                            }else if(tab?.name == "layout"){
                                return(
                                    <>
                                        {/* Layout Type */}

                                        <Layout attr={global_attr}/>

                                        {/* Columns */}

                                        <Columns attr={global_attr}/>

                                        {/* Pagination */}

                                        <Pagination attr={global_attr}/>

                                        {/* Linking */}

                                        <Linking attr={global_attr}/>
                                    </>
                                )
                            }
                        } }
                    </TabPanel>
                </PanelBody>
                
            </InspectorControls>
            <div className="rt-postsreact-editor">
                <RenderView {...attributes} data={data}/>
            </div>
        </>
    );
}