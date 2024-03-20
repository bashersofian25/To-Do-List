export let weeklyList = [];

export const appendToWeeklyList = (item) => {
    weeklyList.push(item);
};
export const loadWeekly = () => {
    weeklyList = JSON.parse(localStorage.getItem("weeklyList"));
};

export const deleteFromWeekly = (id) => {
    weeklyList = weeklyList.filter((item) => id != item.id);
};

export const changeForWeekly = (id) => {
    weeklyList  = weeklyList.map((item) => {
        if(id == item.id){
            item.done = !item.done;
        }
        return item;
    });
}