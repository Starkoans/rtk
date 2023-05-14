
import Item from "../components/Item.jsx";
import AddForm from "../components/AddForm.jsx";
import {useGetItemsQuery} from "../store/api/api.js";



export function ItemPage() {
    //получение
    const {data =[], isLoading} = useGetItemsQuery();
    // console.log(data);


    return (
        <div>

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

        </div>
    )
}

export default ItemPage