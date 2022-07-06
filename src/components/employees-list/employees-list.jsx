import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";


const EmployeesList = ({data, onDelete, onAddEmployeer}) => {

  const elements = data.map(item => {
    const {id} = item;
    return (
      <EmployeesListItem key={id} 
      name={item.name} 
      salary={item.salary} 
      increase={item.increase ? "increase" : ''}
      onDelete={() => onDelete(id)}/>
    );
  });

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
}

export default EmployeesList;