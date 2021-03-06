<?php

/**
 * Implements hook_page_attachments_alter().
 */
function charm_page_attachments_alter(array &$attachments) {

  // Bootstrap 4 viewport meta tag.
  $viewport = array(
    '#type' => 'html_tag',
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'viewport',
      'content' => 'width=device-width, initial-scale=1, shrink-to-fit=no',
    ),
  );
  $attachments['#attached']['html_head'][] = [$viewport, 'viewport'];

  // Instructs IE to use highest available engine
  // for established and emerging industry standards.
  $x_ua_compatible = array(
    '#type' => 'html_tag',
    '#tag' => 'meta',
    '#attributes' => array(
      'http-equiv' => 'X-UA-Compatible',
      'content' => 'IE=Edge',
    ),
  );
  $attachments['#attached']['html_head'][] = [$x_ua_compatible, 'X-UA-Compatible'];

}
