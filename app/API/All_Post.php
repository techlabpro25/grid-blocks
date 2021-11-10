<?php

namespace RT\RadiusBlocks\API;

class All_Post{
    public function __construct(){
        add_action("rest_api_init", [$this, 'register_post_route']);
    }

    public function register_post_route(){
        register_rest_route( 'rt/v1', 'query',array(
            'methods'  => 'GET',
            'callback' => [$this, 'get_all_posts']
        ));
    }

    public function get_all_posts($request){
        $post_type = $request["post_type"];
        $post_per_page = $request["post_per_page"];
        $include = explode(",",$request["include"]);
        $exclude = explode(",", $request["exclude"]);
        $offset = $request["offset"];
        $category = explode(",",$request["category"]);
        $cat_operator = $request["cat_operator"];
        $tag = explode(",",$request["tag"]);
        $relation = $request["relation"];
        $order_by = $request["order_by"];
        $order = $request["order"];
        $author = explode(",",$request["author"]);
        $status = explode(",",$request["status"]);
        $keyword = $request["keyword"];

        $post_type =  ($request["post_type"] === null )? "post": $request["post_type"];
        $post_per_page =  ($request["post_per_page"] === null )? -1: $request["post_per_page"];

        $args = array(
            'post_type' => $post_type,
        );

        if(!empty($include) && isset($include) && array_filter($include)){
            $args['post__in'] = array($include);
        }

        if(!empty($exclude) && isset($exclude) && array_filter($exclude)){
            $args['post__not_in'] = array($exclude);
        }

        if(isset($offset) && $offset){
            $args['offset'] = $offset;
        }
        print_r($args);

        // $query = new WP_Query($args);


        // if (empty($taxonomy_objects )) {
        //     return new WP_Error( 'empty_category', 'There are no terms to display', array('status' => 404) );
        // }
    }
}