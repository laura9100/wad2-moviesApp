# wad2-moviesApp
# Assignment 1 - ReactJS app.

Name: Laura McBride

## Overview.
This Web App includes movies, favourite movies, upcoming and top rated movies, tv shows that are airing today and tv shows. You can filter and search in all these features.
### Features.

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



![image](https://user-images.githubusercontent.com/47563943/145731897-075ec290-62e8-4eae-8f6f-66c7e8f4fcc5.png)
>New movies that are up and coming

![image](https://user-images.githubusercontent.com/47563943/145731970-4bd77d78-e19f-4633-9382-1b72d3ed89f7.png)
>Top Rated movies of all time.

![image](https://user-images.githubusercontent.com/47563943/145731995-e753abc5-0518-416c-a16a-3e0f1154e6e4.png)
>What tv shows are airing today

![image](https://user-images.githubusercontent.com/47563943/145732017-1f85ae3e-960b-44ee-a4f3-c8c5144b11ec.png)
>Shows a list of all Tv Shows

>Each of these pages can be searched and filtered

### Routing.


+ /shows/airingnow Airing Today.
+ /shows/tvShows All Tv Shows
+ /shows/:id Tv Shows Details.
+ /movies/upcoming Upcoming movies.



Assignment 1 - Agile Software Practice.

## Automated Testing.

### Best test cases.


+ cypress/integration/airingNow-page.spec.js - line 39
+ cypress/integration/topRated-page.spec.js - line 92
+ cypress/integration/upcoming-page.spec.js - line 75
