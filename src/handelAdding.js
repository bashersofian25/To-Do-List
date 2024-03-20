import { monthlyList, appendToMonthlyList } from "./Lists/monthlyList";
import { appendToDailyList, dailyList } from "./Lists/dailyList";
import { appendToWeeklyList } from "./Lists/weeklyList";


export const addItem = () => {
    const item = {};
    const taskName = document.getElementById('task');
    const taskDescription = document.getElementById('description');
    const radio = document.getElementsByName('type');
  
    item.task = taskName.value;
    item.description = taskDescription.value;
    item.done = false;
    item.id = Date.now();
    if(radio[0].checked){
        item.type = "monthly";
        appendToMonthlyList(item);
    }else if(radio[1].checked){
        item.type = "weekly";
        appendToWeeklyList(item);
    }else {
        item.type = "daily";
        appendToDailyList(item);
    }
};



