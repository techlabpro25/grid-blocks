<?php

namespace RT\RadiusBlocks\Blocks;

use RT\RadiusBlocks\Abstracts\Block;

class RtThePostGrid extends Block
{
    protected $name = 'rt-radius-blocks/thepostgrid';

    public function __construct() {

    }

    public static function render_callback($attributes) {
//        if (!is_admin()) {
            // Add special scripts if needed
            wp_enqueue_script(RT_RADIUS_BLOCKS_SLUG . '-frontend-js');
//        }
        ob_start(); ?>
        <div class="rt-radius-blocks-ph rt-thepostgrid">
            <pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre>
        </div>
        <?php return ob_get_clean();
    }
}