const attributes = {
    limit: {
        type: "number",
        default: 10,
    },
    query:{
        type:"object",
        default:{
            post_type: "post",
            limit: -1,
            include: "",
            exclude: "",
            offset: 0,
            taxonomy_bool: false,
            category_bool: false,
            category: [],
            category_operator: "",
            tag_bool: false,
            tag: [],
            tag_operator: "",
            relation: "",
            order_bool: false,
            order_by: "",
            order: "",
            author_bool: false,
            author:[],
            status_bool: false,
            status:["publish"],
            keyword_bool: false,
            keyword:""
        }
    },
    columns:{
        type:"object",
        default:{
            desktop: "4",
            tablet: "6",
            mobile: "12"
        }
    },
    pagination:{
        type: "object",
        default:{
            show: false,
            post_per_page:5,
            pagination_type:""
        }
    },
    linking:{
        type: "object",
        default:{
            link_to_page: true,
            link_type: "",
            target:""
        }
    }
};

export default attributes;