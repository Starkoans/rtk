import styles from './item.module.css'
import {useEditItemMutation, useRemoveItemMutation} from "../store/api/api.js";
import {useState} from "react";

function Item({item}) {

    // const items = useSelector((state) => state.items)
    // console.log(items)
    //
    //
    // const dispatch = useDispatch()
    // const handleClick = () =>{
    //
    //     dispatch(addItem(item))
    // }


    const [removeItem, {isLoading, removeError}] = useRemoveItemMutation();
    const [isEdit, setIsEdit] = useState(false);
    const handleDelete = ()=>{
        removeItem(item.id).unwrap();
    }

    const [editItem, {editError}] = useEditItemMutation();

    const [editedItem, setEditedItem]=useState({
        id:item.id,
        name:item.name,
        description:item.description
    })

    const handleEdit = async (e) => {

        e.preventDefault();

        if( editedItem.name || editedItem.description){
                // console.log(editedItem);
                await editItem(editedItem).unwrap();
        }

        setIsEdit(false);
    }

    return(
        <>
        {isEdit?
            <form onSubmit={handleEdit}>
                <label>
                    <input type={"text"} defaultValue={editedItem.name}
                    onChange={e => {
                        setEditedItem(
                            {...editedItem,
                                name: e.target.value});

                    }}
                    />
                </label>
                <label>
                    <input type={"text"} defaultValue={editedItem.description}
                           onChange={e =>
                               setEditedItem(
                                   {...editedItem,
                                       description:e.target.value})}
                    />
                </label>
                <button type={"submit"}>Save</button>
            </form>
            :

        <div className={styles.Item}>
        <h3>{item.name}</h3>
            <div>{item.description}</div>
            <button onClick={handleDelete}>Remove</button>
            <button onClick={()=>setIsEdit(true)}>Edit</button>
        </div>}
        </>
        )
}
export default Item;