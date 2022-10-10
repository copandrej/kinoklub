# Craft CMS for kino klub website

static parts of the website are in the `web` folder. Templates are in `templates` folder. Craft generates dynamic content from templates with twig.

For deployment install craft on your (local) machine and copy the `web`, `templates` and `config` folders to the server. Or deploy some other way using migrations.

1. Make sure Craft and your plugins are all up to date for the original project.
2. In the original site’s control panel, go to Utilities → Project Config and press Rebuild. (You can alternatively use php craft project-config/rebuild from your terminal.)
3. Create a new database for the cloned site.
4. Copy the original project directory to a new one you’ll use for the cloned site. If you’d rather be more selective, at minimum copy composer.json, composer.lock, config project/*, craft, web/index.php, .env, and .env.example.
5. Edit the cloned .env and config/general.php files to point to the new database and use the cloned project’s desired URL(s).
6. Run composer install (not composer update!) for the new site.
7. Configure your web server for the new site.
8. In your terminal, run php craft setup and follow the prompts to create an admin account and configure basic site settings. Your project config YAML will automatically be applied toward the end of the install process: