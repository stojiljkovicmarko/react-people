import React, { Fragment } from 'react';

import { Header } from "./Header/Header.jsx";
import { UserList } from "./UserList/UserList.jsx";
import { Footer } from './Footer/Footer.jsx';
import { Spinner } from "./Spinner/Spinner";

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isGridView: true,
      listOfUsers: [],
      searchTerm: "",
    }

    this.changeView = this.changeView.bind(this);
    this.refreshUserList = this.refreshUserList.bind(this);
  }

  //fukcija se moze bindovati ili napisati kao arrow funstion
  //onButtonClick = () => this.setState({counter: this.state.counter + 1});



  changeView() {
    this.setState({
      isGridView: !this.state.isGridView,
    })
    //this.state.isGridView ? this.setState({isGridView : false}) : this.setState({isGridView : true});
  }

  searchHandler = (event) => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  render() {

    const { isGridView, listOfUsers, searchTerm, loading } = this.state;

    return (
      <Fragment>
        <Header changeView={this.changeView} isGridView={isGridView} refreshUserList={this.refreshUserList} searchHandler={this.searchHandler} />
        {loading ? <Spinner /> : <UserList listOfUsers={listOfUsers} isGridView={isGridView} searchTerm={searchTerm} />}
        <Footer />
      </Fragment>
    );
  };

  async refreshUserList() {
    // const url = "https://randomuser.me/api/?results=15";
    // const response = await fetch(url);
    // const data = await response.json();
    // this.setState({ listOfUsers: data.results });
    
    fetch("https://randomuser.me/api/?results=500").
      then(response => response.json())
      .then(data => {
        this.setState({ listOfUsers: data.results });
        this.setState({ loading: false });
      });
      
  }

  componentDidMount() {
    this.refreshUserList();
  }

}

export default App;
