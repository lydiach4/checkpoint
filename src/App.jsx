
import React, { Component } from 'react';
import "./index.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Hamid Hemdan',
        bio: ' An algerian man ',
        imgSrc: 'https://hamidhemdanbenhmida.com',
        profession: 'Chauffeur',
      },
      shows: false,
      time: 0,
    };
  }

  
  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  componentDidMount() {
    
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.timeElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render()  {
    const { person, shows, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Profile Card</h1>
        <button onClick={this.toggleProfile}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt="Profile" />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <div>
          <p>Time since mounted: {timeElapsed} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;
