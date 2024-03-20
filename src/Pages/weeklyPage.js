
import { createAddButton } from "../Components/addButton";
import { createBigCard } from "../Components/bigCard";
import { weeklyList } from "../Lists/weeklyList";
export const weeklyPage = (function(){

    const renderPage = () => {
        document.querySelector('#content').replaceChildren();
        const content = document.querySelector('#content');
        const bigCard = createBigCard(weeklyList);
        content.append(bigCard);
    };
    return { renderPage }
})();