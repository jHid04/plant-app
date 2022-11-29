# PlantApp

Welcome to the Plant App! When you visit, you can see pictures of plants that users have submitted. You can click on any plant and see more information on visit the users profile page. When you visit a users page, you can see all of their plants!

## Technology 
- This app was built using React on Rails with Ruby Version 2.7.3

- To add a plant, you must be signed with an account and visit your profile page. You'll see a form to add any plant you want! You'll need to know some extra information, like your plant's name and optionally, what family your plant belongs to. You can upload a photo of your plant, and you'll be all set to see your plant on the home page.

## Features moving forward
- I would like to set watering reminders so that a user can keep up with their plant care.
- I would like to incorporate an API so that when a user submits a photo of their plant, it can identify what plant it is!
- I would like to add comments to each plant, so users can leave tips, tricks, or overall praises for the plants.

### Sign up/sign in pages
#### Technology: Rails and Devise (through make_it_so)
I am using an implementation of devise generated through the make_it_so gem https://github.com/LaunchAcademy/make_it_so. 

There are some custom database fields for things like first/last name, etc. These custom values and form fields have been added to both the database and the form

I am managing image upload and storage of profile pictures through carrier wave and an Amazon s3 bucket. See external resources for more about the implementation as we applied a standard implementation for each

All functionality for PW reset, account editing, and account creation is handled through make_it_so's default implementation

## Credits
- @jHid04

### Project Mentors
- @nwalberts
- @dovakeen118
