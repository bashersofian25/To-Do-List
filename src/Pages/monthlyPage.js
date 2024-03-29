
import { createAddButton } from "../Components/addButton";
import { createBigCard } from "../Components/bigCard";
import { monthlyList } from "../Lists/monthlyList";
export const monthlyPage = (function(){

    const renderPage = () => {
        document.querySelector('#content').replaceChildren();
        const content = document.querySelector('#content');
        const bigCard = createBigCard(monthlyList);
        content.append(bigCard);
    };
    return { renderPage }
})();