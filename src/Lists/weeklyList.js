export let weeklyList = [];

export const appendToWeeklyList = (item) => {
    weeklyList.push(item);
};
export const loadWeekly = () => {
    const local = localStorage.getItem("weeklyList");
    if(local != null){
        weeklyList = JSON.parse(local);
    }
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