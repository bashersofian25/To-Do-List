
import { createListItem } from "../Components/listItem";

export const createBigCard = (dailyList) => {
    const bigCard = document.createElement('div');
    bigCard.setAttribute('id', 'big-card');
    const cards = dailyList.map(item => {
        return createListItem(item);
    });
    cards.forEach(item => {
        bigCard.append(item); 
    });

    return bigCard;
};