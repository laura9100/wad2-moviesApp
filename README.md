# wad2-moviesApp
# Assignment 1 - ReactJS app.

Name: Laura McBride

## Overview.
This Web App includes movies, favourite movies, upcoming and top rated movies, tv shows that are airing today and tv shows. You can filter and search in all these features.
### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Upcoming Movies
+ Top Rated Movies
+ Tv Shows 
+ Tv Shows airing now
+ etc


## API endpoints.

+ Upcoming Movies - /movies/upcoming
+ Top Rated Movies - /movies/toprated
+ Tv Shows airing now - /shows/airingnow
+ Tv Shows - /shows/tvShows
+ Tv Details -/shows/id

## App Design.
### UI Design.

[ Insert screenshots of the __new/modified app pages__ you developed (and modified existing pages), Include an appropriate caption for each one (see example below).

![image](https://user-images.githubusercontent.com/47563943/145731897-075ec290-62e8-4eae-8f6f-66c7e8f4fcc5.png)

>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

![ ](./images/view.png)

>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

### Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /blogs - displays all published blogs.
+ /blogs/:id - displays a particular blog.
+ /blogs/:id/comments - detail view of a particular blog and its comments.
+ etc.

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

[ Itemize the technologies/techniques you researched independently and adopted in your project, i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these (we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).

Assignment 1 - Agile Software Practice.

## Automated Testing.

### Best test cases.


+ cypress/integration/airingNow-page.spec.js - line 39
+ cypress/integration/topRated-page.spec.js - line 92
+ cypress/integration/upcoming-page.spec.js - line 75
