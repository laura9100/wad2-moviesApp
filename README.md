# Assignment 2 - Web API.

Name: Laura McBride


## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

```bat
Clone wad2-moviesApp https://github.com/laura9100/wad2-moviesApp.git
```

Clone assignment2 https://github.com/laura9100/assignment2.git

```bat
npm install
```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

```bat
REACT_APP_TMDB_KEY=18273981473921
FAST_REFRESH=false
NODE_ENV=development
NODE_PATH=./src
HOST=localhost
MONGO_DB=mongoDbURL
SEED_DB=True
SECRET=JWTSecret
```



## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const getTopRated = () => {
    return fetch('/api/movies/tmdb/toprated',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
  }
  ).then(res => res.json());
  };


~~~


