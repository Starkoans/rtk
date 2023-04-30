import {useAddItemMutation} from "../store/api/api.js";
import {useState} from "react";

function AddForm(){

    //добавление (подключаем хук мутации)
    const [addItem, {isError}] = useAddItemMutation();
    //состояние для объекта для формы
    const [newItem, setNewItem] = useState({
        // name: '',
        // description: ''
    });
    //ассинхронный хэндлер


    const handleSubmit = async (event)=> {
        event.preventDefault();
        if (newItem.name && newItem.description){
            await addItem({
                name:newItem.name,
                description: newItem.description
            }).unwrap();

            setNewItem({
                // name: '', description: ''
            });
        }
    }
    return(
        <form
            onSubmit={handleSubmit}>
            <label> Name:
                <input type={"text"}
                       value={newItem.name}
                       onChange={(event)=> setNewItem({name: event.target.value, description: newItem.description})}
                />
            </label>
            <label> Description:
                <input type={"text"}
                       value={newItem.description}
                       onChange={(event)=> setNewItem({description: event.target.value, name: newItem.name})}
                />
            </label>
            <button type={"submit"} >Add</button>
        </form>
    )
}

export default AddForm;