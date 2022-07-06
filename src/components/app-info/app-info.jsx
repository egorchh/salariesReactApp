import './app-info.css';

const AppInfo = (props) => {
  const { employeesCount, increasedEmployees } = props
  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компании RUMPU</h1>
      <h2>Общее число сотрудников: {employeesCount}</h2>
      <h2>Премию получат: {increasedEmployees}</h2>
    </div>
  );
}

export default AppInfo;