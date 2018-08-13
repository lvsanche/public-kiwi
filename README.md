
# Public Version of Project Kiwi

The goal is to create a web app that can track student progress, manage student grades and is easy to use.
Currently the project is aimed to assist one particular teacher. A lot has been written with hardly any experience, and
as I learn more, the code will continue to be refactored and improved.
Any critique, suggestions, and improvements are welcomed.

## Live version

Find it on https://project-kiwi-0123.firebaseapp.com

### Log In Information: 

```
 email: random@tester.com
 password: asdfgh
```

## Getting Started


### Prerequisites

Will need npm, and firebase set up. One file is missing to get this all working.


```
  touch ./src/services/api/firebase.js
```

Inside that file include the firebase crendetials as such:
```
  import * as firebase from 'firebase';

  const config = {
      apiKey: "YOUR KEY ",
      authDomain: "YOUR AUTH DOMAIN",
      databaseURL: "YOUR DATABASE URL",
      projectId: "YOUR PROJECT ID ",
      storageBucket: "YOUR STORAGE BUCKET",
      messagingSenderId: "YOUR ID"
    };

  if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }
  const db = firebase.database();
  const auth = firebase.auth();

  export {
      db,
      auth
  }
```

### Installing

1. After cloning, run `npm install` in home directory
2. `npm start` and you are set


## Running the tests

Tests are yet to come

