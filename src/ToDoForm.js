import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';

const ToDoForm = ({ addTask, userInput, setUserInput, startDate, setStartDate, pirority, setPirority }) => {
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput, startDate, pirority);
        setUserInput("");
    }
    
    return (
        <form onSubmit={handleSubmit} style={{margin: '40px', border: '2px solid', borderRadius: '15px', paddingBlock: '30px'
        }}>
            <h4>Form</h4><br/>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." required=" "/>
            <br/>
            <br/>
            <div style={{minWidth: "190px"}}>
            <DatePicker
                dateFormat="yyyy/MM/dd"
                selected={startDate}
                onChange={(date)=>{
                    //const d = new Date(date).toLocaleDateString('fr-FR');
                    console.log(date.toLocaleDateString('fr-FR'));
                    setStartDate(date);
                  }}
            />
            </div>
           
            <br/>
            <div style={{justifyContent: 'center', display: 'flex'}}>
                <div style={{width: '190px', minWidth: "190px"}}>
                    <Dropdown
                        placeholder="Select Priority"
                        options={['Low', 'Medium', 'High']}
                        value='Low'
                        onChange={(value) => setPirority(value['value'])}
                        onSelect={(value) => console.log('selected!', value['value'])} 
                    />
                </div>
            </div>
            <br/>
            
            <button>Submit</button>
        </form>
    );
};

export default ToDoForm;