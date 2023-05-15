# Kino Klub website, frontend and Craft CMS backend

## https://kinoklub.si/


Static parts of the website are in the `web` folder (style, scripts, favicons, raw html). Templates are in `templates` folder. Craft generates dynamic content from templates with twig.


### Usage

To clone an entire site, you’ll need to copy its files and database and give it a new URL.

Create a database backup of the original site.
Create a new database for the cloned site, and import the backup you created in the previous step.
Copy the original project directory to a new one you’ll use for the cloned site.
Edit the cloned .env file to point to the new database and use the cloned project’s desired URL.

### Licensing

The project and code are open source, however assets and design are the property of Zavod Aspekt and should not be used, copied or distributed without premission.
