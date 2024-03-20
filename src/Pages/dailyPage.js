import { dailyList } from "../Lists/dailyList";
import { createAddButton } from "../Components/addButton";
import { createBigCard } from "../Components/bigCard";

export const dailyPage = (function(){

    const renderPage = () => {
        document.querySelector('#content').replaceChildren();
        const content = document.querySelector('#content');
        const bigCard = createBigCard(dailyList);
        content.append(bigCard);
    };
    return { renderPage }
})();