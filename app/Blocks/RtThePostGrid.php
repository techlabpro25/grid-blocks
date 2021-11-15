<?php

namespace RT\RadiusBlocks\Blocks;

use RT\RadiusBlocks\Abstracts\Block;

class RtThePostGrid extends Block
{
	protected $name = 'rt-radius-blocks/thepostgrid';

	protected $attributes = [
		'layout' => [
			'type'=> "string",
			'default' => "grid"
		],
	];

	public function __construct()
	{
		add_action('init', [$this, 'register_blocks']);
	}

	public function register_blocks()
	{
		register_block_type($this->getName(), [
			'attributs'       => $this->getAttributes(),
			'render_callback' => [&$this, 'render_callback'],
		]);
	}

	public function render_callback($attributes)
	{
		$_attributes = array_merge(array_map(function ($attribute) {
			return $attribute['default'];
		}, $this->getAttributes()), $attributes);
		wp_enqueue_script(RT_RADIUS_BLOCKS_SLUG . '-frontend-js');
		    //    }
		ob_start(); ?>
        <div class="rt-radius-blocks-ph rt-thepostgrid">
            <pre style="display: none;"><?php echo wp_json_encode($_attributes) ?></pre>
        </div>
<?php return ob_get_clean();
	}
}
