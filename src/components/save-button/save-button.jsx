import "./save-button.css"

const SaveButton = (props) => {
  const {saveLocalData} = props
  return (
    <div className="search-panel save">
          <button 
          className="save-button"
          onClick={saveLocalData}>
            Сохранить данные о сотрудниках
          </button>
    </div>
  )
}

export default SaveButton;