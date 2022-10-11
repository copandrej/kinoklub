# Craft CMS for kino klub website

## Beta: https://beta.kinoklub.si/


static parts of the website are in the `web` folder. Templates are in `templates` folder. Craft generates dynamic content from templates with twig.


To clone an entire site, you’ll need to copy its files and database and give it a new URL.

Create a database backup of the original site.
Create a new database for the cloned site, and import the backup you created in the previous step.
Copy the original project directory to a new one you’ll use for the cloned site.
Edit the cloned .env and config/general.php files to point to the new database and use the cloned project’s desired URL