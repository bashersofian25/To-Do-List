export const createAddButton = () => {
    const addButton = document.createElement("button");
    addButton.innerText = "+";
    addButton.classList.add('add');
    addButton.addEventListener('click', () => {
        document.querySelector("dialog").show();
    });

    return addButton;
};