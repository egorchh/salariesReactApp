import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: "John C.", salary: 800, increase: false, rise: false, id: 1},
        {name: "Alex M.", salary: 3000, increase: false, rise: false, id: 2},
        {name: "Carl W.", salary: 1700, increase: false, rise: false, id: 3},
        {name: "Ann E.", salary: 1300, increase: false, rise: false, id: 4},
      ],
      term: '',
      filter: 'all'
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name, 
      salary,
      increase: false,
      rise: false,
      id: ++this.maxId,
    }
    
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      }
    });
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        return item.id === id ? {...item, [prop]: !item[prop]} : item
      })
    }))
  }

  searchEmp = (items, term) => {
    if (term.lenght === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term: term})
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter(item => item.rise);
      case "highSalary":
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  }

  onUpdateFilter = (filter) => {
    this.setState({filter});
  }

  render() {
    const {data, term, filter} = this.state;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo 
        employeesCount={data.length}
        increasedEmployees={data.filter(item => item.increase).length}/>

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter}/>
        </div>

        <EmployeesList 
        data={visibleData} 
        onDelete={this.deleteItem}
        onToggleProp={this.onToggleProp}/>
        <EmployeesAddForm
        onAdd={this.addItem}/>
      </div>
    )
  }
}

export default App;