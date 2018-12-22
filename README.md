# 🕑 ReactFlipClock

⚠️ **This project is under development** ⚠️

Wrapping [FlipClock.js](http://flipclockjs.com/) with React

## Installing

```
yarn add reactflipclock-js
```

You also need jquery and FlipClock.js library
```html
 <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.8/flipclock.min.js"></script>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.8/flipclock.min.css">

```


## Usage

```js
import React, { Component } from "react";
import { FlipClock } from "reactflipclock-js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlipClock time={2000} clockFace="DailyCounter" />
      </div>
    );
  }
}

export default App;

```

## PropTypes
You can look for available props in http://flipclockjs.com in **options** section
