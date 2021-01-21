import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      dogObject: undefined,
      loading: true,
    };

    this.fetchDog = this.fetchDog.bind(this);
    this.refreshDogPicture = this.refreshDogPicture.bind(this);
  }

  async fetchDog() {
    const requestURL = await fetch("https://dog.ceo/api/breeds/image/random");
    const resquestObject = await requestURL.json();
    this.setState({
      loading: false,
      dogObject: resquestObject,
    });
    // console.log(this.state.dogObject.message);
  }

  componentDidMount() {
    this.fetchDog();
  }

  refreshDogPicture() {
    return (
      <div>
        {/* <img src={this.state.dogObject.message} alt="Dogs" /> */}
        <button type="button" onClick={ () => this.fetchDog()} >Clicar</button>
      </div>
    );
  }

  render() {
    const { loading, dogObject } = this.state;
    const loadingElement = <span>Loading...</span>;
    console.log(loading);
    console.log(dogObject);
    return (
      <div>
        <p>Leo</p>
        <div>
          {loading ? (
            loadingElement
          ) : (
            <img src={dogObject.message} alt="Dogs" />
          )}
          {this.refreshDogPicture()}
        </div>
      </div>
    );
  }
}

export default App;
