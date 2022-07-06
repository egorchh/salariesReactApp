import {Component} from 'react';

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
      disabled: true
    }
  }

  onValueChange = (e) => {
    const nameInputLength = document.querySelector('.name-input').value.length;
    const salaryInputLength = document.querySelector('.salary-input').value.length;
    if (nameInputLength >= 3 && salaryInputLength >= 3) {
      this.setState(() => {
        return {
          disabled: false
        }
      })
    } else {
      this.setState(() => {
        return {
          disabled: true
        }
      })
    }
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: ''
    })
  }

  render() {
    const {name, salary, disabled} = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
          className="add-form d-flex"
          onSubmit={this.onSubmit}>
          <input type="text"
            className="form-control new-post-label name-input"
            placeholder="Как его зовут?"
            name ="name"
            value={name}  
            onChange={this.onValueChange}/>
          <input type="number"
            className="form-control new-post-label salary-input"
            placeholder="З/П в $?"
            name ="salary"
            value={salary} 
            onChange={this.onValueChange}/>

          <button
            type="submit"
            className="btn btn-outline-light submitButton"
            disabled={disabled}>
            Добавить
          </button>
        </form>
      </div>
    )
  }
}

export default EmployeesAddForm;