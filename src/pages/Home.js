import React, { Fragment } from "react";

import { Header } from "../components/Header/Header.jsx";
import { UserList } from "../components/UserList/UserList.jsx";
import { Footer } from '../components/Footer/Footer.jsx';
import { Spinner } from "../components/Spinner/Spinner";

import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isGridView: true,
      listOfUsers: [],
      searchTerm: "",
    }

    this.changeView = this.changeView.bind(this);
    this.fetchData = this.fetchData.bind(this);
    //this.loadUsers = this.loadUsers.bind(this);
    //this.loadSavedUsers = this.loadSavedUsers(this);
  }

  saveUsers(usersData) {
    localStorage.setItem("latestUsers", JSON.stringify(usersData));
    localStorage.setItem("lastUpdate", Date.now());
  }

  loadSavedUsers = () => {
    const usersData = localStorage.getItem("latestUsers");
    return usersData ? JSON.parse(usersData) : [];
  }

  // loadUsers() {
  //   let users = this.loadSavedUsers();

  //   console.log("from loadUSers, after loadsavedusers:", users);

  //   if (users.length === 0) {
  //     console.log("usli smo u if");
  //     users = this.fetchData();
  //   }

  //   console.log("after fetching", users);

  //   this.setState({
  //     listOfUsers: users,
  //   })
  // }

  fetchData() {
    /* const url = "https://randomuser.me/api/?results=15";
     const response = await fetch(url);
     const data = await response.json();
     this.setState({ listOfUsers: data.results }); */

    const usersData = this.loadSavedUsers();

    if(!usersData) {
      console.log("usli u fetch");
      fetch("https://randomuser.me/api/?results=15")
      .then(response => response.json())
      .then(data => {
        this.saveUsers(data.results);
        this.setState({ 
          listOfUsers: data.results,
          isLoading: false
        });
        
      });
    } else {
      this.setState({
        listOfUsers: usersData,
        isLoading: false
      })
    }
  }

  componentDidMount() {
    this.fetchData();
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

    const { isGridView, listOfUsers, searchTerm, isLoading } = this.state;

    return (
      <Fragment>
        <Header changeView={this.changeView} isGridView={isGridView} refreshUserList={this.fetchData} />
        {isLoading ? <Spinner /> : <UserList listOfUsers={listOfUsers} isGridView={isGridView} searchTerm={searchTerm} searchHandler={this.searchHandler} />}
        <Footer />
      </Fragment>
    );
  };




}

export default Home;