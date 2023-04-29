import { useState } from 'react'
import Item from "./components/Item.jsx";
import {useGetItemsQuery, useAddItemMutation} from "./store/api/api.js";


function App() {
    //получение
    const {isLoading, data =[]} = useGetItemsQuery();
    console.log(data);

    //добавление (подключаем хук мутации)
    const [addItem, {isError}] = useAddItemMutation();
    //состояние для объекта для формы
    const [newItem, setNewItem] = useState({
        // name: '',
        // description: ''
    });
    //ассинхронный хэндлер


    const handleSubmit = async ()=> {
    if (newItem.name|| newItem.description){
        await addItem({
            name:newItem.name,
            description: newItem.description
        }).unwrap();

        setNewItem({
            // name: '', description: ''
        });
    }
    }

  return (
    <>
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


        {
            data.map(data => (
                <Item key ={data.id}
                    item={{
                        id: data.id ,
                        name:data.name,
                        description: data.description
                    }}
                />
            ))
        }

    </>
  )
}

export default App
