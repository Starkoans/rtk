import styles from './item.module.css'
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../store/items/item.slice.js";

function Item({item}) {

    const items = useSelector((state) => state.items)
    console.log(items)

    const dispatch = useDispatch()
    const handleClick = () =>{
        dispatch(addItem(item))
    }

    return(
        <div className={styles.Item}>
        <h3>{item.name}</h3>
            <div>{item.description}</div>
            <button onClick={handleClick}>Add item</button>
        </div>
        )



}
export default Item;