import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";


const EmployeesList = ({data, onDelete, onToggleProp}) => {

  const elements = data.map(item => {
    const {id} = item;
    return (
      <EmployeesListItem 
      key={id} 
      name={item.name} 
      salary={item.salary} 
      increase={item.increase ? true : false}
      rise={item.rise ? true : false}
      onDelete={() => onDelete(id)}
      onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
    );
  });

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
}

export default EmployeesList;