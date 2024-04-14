import { Item } from "./Item";
import { ItemType } from "./types";

type Items = {
    recievedData: ItemType[];
}

export const Listing = ({recievedData}: Items) => {
  return (
    <div className="item-list">
        {recievedData.map((item) => {
            return (
                <Item item={item} key={item.listing_id} />
            )
        })}
    </div>
  )
}
