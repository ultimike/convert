# Convert a Drupal 8 site to use drupal/recommended-project example.

## Sample site for DrupalEasy's "Composer Basics" workshop.

This codebase is used as the starting point for an example of converting a site
from the https://github.com/drupal-composer/drupal-project/ Composer template to the 
https://github.com/drupal/recommended-project Composer template.

For more information about this workshop, visit: https://www.drupaleasy.com/composer-basics

### Pinned dependencies for exercise
  "require": {
LEAVE AS-IS    "cweagans/composer-patches": "^1.0",
REMOVE    "drupal-composer/drupal-scaffold": "^2.0.1",
    "drupal/address": "1.6.0",
    "drupal/admin_toolbar": "2.0.0",
    "drupal/block_visibility_groups": "1.3.0",
    "drupal/bootstrap": "3.17.0",
    "drupal/bootstrap_paragraphs": "2.0.0-beta6",
LEAVE AS-IS    "drupal/config_direct_save": "^1.0",
LEAVE AS-IS    "drupal/config_installer": "^1.0",
LEAVE AS-IS    "drupal/config_split": "^1.3",
???    "drupal/console": "^1.0.0-rc8",
    "drupal/contact_formatter": "1.1.0",
LEAVE AS-IS    "drupal/contact_storage": "^1.0@beta",
ADD    "drupal/ctools": "3.2.0",
REMOVE    "drupal/core": "8.8",
    "drupal/editor_advanced_link": "1.4.0",
ADD    "drupal/entity_reference_revisions": "1.6.0",
LEAVE AS-IS    "drupal/environment_indicator": "^3.0",
    "drupal/field_group": "1.0.0",
LEAVE AS-IS    "drupal/google_analytics": "^2.1",
LEAVE AS-IS    "drupal/honeypot": "^1.27",
    "drupal/linkit": "5.0.0-beta8",
    "drupal/menu_block": "1.5.0",
LEAVE AS-IS    "drupal/metatag": "^1.1",
    "drupal/paragraphs": "1.8.0",
    "drupal/pathauto": "1.6.0",
    "drupal/redirect": "1.3.0",
    "drupal/scheduler": "1.0.0",
LEAVE AS-IS    "drupal/simple_block": "^1.0@beta",
    "drupal/simple_sitemap": "2.12.0",
    "drupal/smart_trim": "1.2.0",
    "drupal/social_media_links": "2.6.0",
LEAVE AS-IS    "drupal/stage_file_proxy": "^1.0@alpha",
ADD    "drupal/token": "1.5.0",
ADD    "drupal/viewsreference": "1.4.0",
???    "drush/drush": "^9.0",
    "rvtraveller/qs-composer-installer": "^1.1",
    "topfloor/composer-cleanup-vcs-dirs": "^1.0",
REMOVE    "webflo/drupal-core-strict": "^8.8"
  },
  "require-dev": {
    "mikey179/vfsstream": "^1.2",
    "behat/behat": "3.*",
    "behat/mink": "^1.7",
    "behat/mink-extension": "^2.2",
    "behat/mink-goutte-driver": "^1.2",
    "jcalderonzumba/gastonjs": "^1.0.2",
    "jcalderonzumba/mink-phantomjs-driver": "^0.3.1",
    "drupal/drupal-extension": "^3.1",
    "drush-ops/behat-drush-endpoint": "^0.0.4",
    "pantheon-systems/quicksilver-pushback": "~1",
    "phpunit/phpunit": "^4.8",
    "symfony/css-selector": "^2.8"
  },