const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
import attributes from "./attributes"
import edit from "./edit"

registerBlockType("rt-radius-blocks/postsreact", {
    title: __("Radius Post React", "radius-blocks"),
    keywords: [
        __("Posts", "radius-blocks")
    ],
    attributes,
    edit,
    save: () => null
});