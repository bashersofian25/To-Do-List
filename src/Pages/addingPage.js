import { createAddButton } from "../Components/addButton";
import { createBigCard } from "../Components/bigCard";
import { monthlyList } from "../Lists/monthlyList";
export const addingPage = (function(){

    const renderPage = () => {
        document.querySelector('#content').replaceChildren();
        const content = document.querySelector('#content');
        const bigCard = createBigCard([]);
        const addButton = createAddButton();
        bigCard.innerHTML = "<p>Our approach is separating goals to monthly, weekly and daily.<br>This provides flexibility in planning.</p>"
        content.append(addButton);
        content.append(bigCard);
       
    };
    return { renderPage }
})();