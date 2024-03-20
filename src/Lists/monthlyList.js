export let monthlyList = [];

export const appendToMonthlyList = (item) => {
    monthlyList.push(item);
};
export const loadMonthly = () => {
    monthlyList = JSON.parse(localStorage.getItem("monthlyList"));
};

export const deleteFromMonthly = (id) => {
    monthlyList = monthlyList.filter((item) => id != item.id);
};

export const changeForMonthly = (id) => {
    monthlyList  = monthlyList.map((item) => {
        if(id == item.id){
            item.done = !item.done;
        }
        return item;
    });
}