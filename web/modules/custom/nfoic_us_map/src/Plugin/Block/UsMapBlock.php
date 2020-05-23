<?php

namespace Drupal\nfoic_us_map\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'UsMapBlock' block.
 *
 * @Block(
 *  id = "us_map_block",
 *  admin_label = @Translation("US Map"),
 * )
 */
class UsMapBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['us_map_block']['#markup'] = '<div id="map"></div>';
    $build['us_map_block']['#attached']['library'][] = 'nfoic_us_map/map-stuff';

    return $build;
  }

}
