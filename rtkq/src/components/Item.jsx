import styles from './item.module.css'
import {useRemoveItemMutation} from "../store/api/api.js";

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

    const [removeItem, {isLoading, error}] = useRemoveItemMutation();

    const handleDelete = ()=>{
        console.log(item.id);
        removeItem(item.id).unwrap();
    }
    return(
        <div className={styles.Item}>
        <h3>{item.name}</h3>
            <div>{item.description}</div>
            <button onClick={handleDelete}>Remove item</button>
        </div>
        )



}
export default Item;