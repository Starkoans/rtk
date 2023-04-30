import { useState } from 'react'
import Item from "./components/Item.jsx";
import {useGetItemsQuery, useAddItemMutation} from "./store/api/api.js";
import AddForm from "./components/AddForm.jsx";


function App() {
    //получение
    const {isLoading, data =[]} = useGetItemsQuery();
    // console.log(data);


  return (
    <>

        <AddForm/>

        {isLoading? <h3>Loading...</h3> :
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
