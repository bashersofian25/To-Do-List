export let dailyList = []; 


export const loadDaily = () => {
    const local = localStorage.getItem("dailyList");
    if(local != null){
        dailyList = JSON.parse(local);
    }
    
};

export const appendToDailyList = (item) => {
    dailyList.push(item);
};

export const deleteFromDaily = (id) => {
    dailyList = dailyList.filter((item) => id != item.id);
    console.log(dailyList);
};

export const changeForDaily = (id) => {
    dailyList  = dailyList.map((item) => {
        if(id == item.id){
            item.done = !item.done;
        }
        return item;
    });
    console.log(dailyList);
};