import React, { Fragment } from "react";

import { Header } from "../components/Header/Header.jsx";
import { UserList } from "../components/UserList/UserList.jsx";
import { Footer } from '../components/Footer/Footer.jsx';
import { Spinner } from "../components/Spinner/Spinner";

import { userService } from "../services/UserService.js";
import { LocalStorageService } from "../services/LocalStorageService.js";

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
    this.loadUsers = this.loadUsers.bind(this);
    this.loadSavedUsers = this.loadSavedUsers.bind(this);
    this.saveUsers = this.saveUsers.bind(this);
    this.lastUpdate = this.lastUpdate.bind(this);
  }

  saveUsers(usersData) {
    LocalStorageService.set("latestUsers", usersData);
    LocalStorageService.set("lastUpdate", Date.now());
  }

  loadSavedUsers() {
    const usersData = LocalStorageService.get("latestUsers");
    return usersData ? usersData : [];
  }

  lastUpdate() {
    const lastUpdate = new Number(LocalStorageService.get("lastUpdate"));
    return lastUpdate ? lastUpdate : Date.now();
  }

  loadUsers() {
    const usersData =  LocalStorageService.get("latestUsers") || [];
    const lastUpdate = LocalStorageService.get('lastUpdate') || Date.now();

    if (!usersData || (usersData.length === 0)) {
      console.log("usli u fetch");
      this.fetchData();
    } else {
      this.setState({
        listOfUsers: usersData,
        isLoading: false,
        lastUpdate: lastUpdate,
      })
    }
  }

  fetchData() {
    /* const url = "https://randomuser.me/api/?results=15";
     const response = await fetch(url);
     const data = await response.json();
     this.setState({ listOfUsers: data.results }); */
    userService.fetchAll().then(data => {
      this.saveUsers(data.results);
      this.setState({
        listOfUsers: data.results,
        isLoading: false,
        lastUpdate: Date.now()
      });
    });
  }

  componentDidMount() {
    this.loadUsers();
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

    const { isGridView, listOfUsers, searchTerm, isLoading, lastUpdate } = this.state;
    console.log(listOfUsers);
    return (
      <Fragment>
        <Header changeView={this.changeView} isGridView={isGridView} refreshUserList={this.fetchData} />
        {isLoading ? <Spinner /> : <UserList listOfUsers={listOfUsers} isGridView={isGridView} searchTerm={searchTerm} searchHandler={this.searchHandler} />}
        <Footer lastUpdate={lastUpdate} />
      </Fragment >
    );
  };




}

export default Home;