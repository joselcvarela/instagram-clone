import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Post from './components/Post/Post'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Post
            nickname="José Varela"
            avatar="https://media.licdn.com/dms/image/C4E03AQEWZFNLN-L9Vg/profile-displayphoto-shrink_200_200/0?e=1530381600&v=beta&t=V5NjqeB6r3rGJ-Kai3dH3nB9J3BzfIT_hC0mExJq_og"
            image="https://cdn-images-1.medium.com/max/800/1*EOMP0V69RZ5xChG5pRoFyA.png"
            caption="learning new tools"
          />
        </div>
      </div>
    );
  }
}

export default App;
