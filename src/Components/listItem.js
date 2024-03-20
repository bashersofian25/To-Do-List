
import { changeForDaily, deleteFromDaily, dailyList} from "../Lists/dailyList";
import { changeForMonthly, deleteFromMonthly, monthlyList } from "../Lists/monthlyList";
import { changeForWeekly, deleteFromWeekly, weeklyList } from "../Lists/weeklyList";


export const createListItem = (Item) => {
    const item = document.createElement('div');
    item.classList.add('item');
    item.setAttribute('id', `${Item.id}`);
    item.classList.add(`${Item.type}`);
    const task = document.createElement('h2');
    task.innerText = Item.task;
    const description = document.createElement('p');
    description.innerText = Item.description;
    
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    const deleteButton = document.createElement('button');
    const doneButton = document.createElement('button');

    if(Item.done){
        doneButton.innerText = "Done";
        doneButton.classList.add('task-done');
       
    }else{
        doneButton.innerText = "Not Done";
    }
    
  
    
    deleteButton.innerText = "delete";


    doneButton.addEventListener('click', (e) => {
        e.target.classList.toggle('task-done');

        if(e.target.innerText == 'Done'){
            e.target.innerText = "Not Done";
        }else {
            e.target.innerText = 'Done';
        }

        const type = e.target.parentElement.parentElement.classList[1];
        const id  = e.target.parentElement.parentElement.id;

        if(type == "monthly"){
            changeForMonthly(id);
            
        }else if (type == "weekly"){
            changeForWeekly(id);
        }else {
            changeForDaily(id);

        }

        localStorage.setItem("monthlyList", JSON.stringify(monthlyList));
        localStorage.setItem("weeklyList", JSON.stringify(weeklyList));
        localStorage.setItem("dailyList", JSON.stringify(dailyList));

    });
    deleteButton.addEventListener('click', (e) => {

        const type = e.target.parentElement.parentElement.classList[1];
        const id  = e.target.parentElement.parentElement.id;

        if(type == "monthly"){
            deleteFromMonthly(id);
            
        }else if (type == "weekly"){
            deleteFromWeekly(id);
        }else {
            deleteFromDaily(id);

        }
        
        e.target.parentElement.parentElement.remove();

        localStorage.setItem("monthlyList", JSON.stringify(monthlyList));
        localStorage.setItem("weeklyList", JSON.stringify(weeklyList));
        localStorage.setItem("dailyList", JSON.stringify(dailyList));
        
    });


    buttons.append(doneButton);
    buttons.append(deleteButton);
    item.append(task);
    item.append(description);
    item.append(buttons);
    item.append(document.createElement("hr"));

    return item;
};