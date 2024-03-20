import './style.css';
import logo from './assets/logo.png'
import { dailyPage } from './Pages/dailyPage';
import { monthlyPage } from './Pages/monthlyPage';
import { loadWeekly, weeklyList } from './Lists/weeklyList';
import { loadMonthly, monthlyList } from './Lists/monthlyList';
import { loadDaily, dailyList } from './Lists/dailyList';
import { addItem } from './handelAdding';
import { weeklyPage } from './Pages/weeklyPage';
import { addingPage } from './Pages/addingPage';


const loadStorage = () => {
    try{
        loadDaily();
        loadWeekly();
        loadMonthly();
    }catch (e) {
        console.log(e);
    }
    
};
loadStorage();
const confirmButton = document.getElementById('confirm');
confirmButton.addEventListener('click', (e) => {
    e.preventDefault();
    addItem();
    dialog.close();
});

const dialog = document.querySelector('.dialog');


const cancelButton = document.getElementById('cancel');
cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
});

addingPage.renderPage([]);
const monthly = document.getElementById('monthly');
monthly.addEventListener('click', (e) => {
    
    monthlyPage.renderPage(monthlyList);
    document.querySelector('header h1').innerText = "Monthly";
    localStorage.setItem("monthlyList", JSON.stringify(monthlyList));

});

const weekly = document.getElementById('weekly');
weekly.addEventListener('click', (e) => {
    weeklyPage.renderPage(weeklyList);
    document.querySelector('header h1').innerText = "Weekly";
    localStorage.setItem("weeklyList", JSON.stringify(weeklyList));
});

const daily = document.getElementById('daily');
daily.addEventListener('click', (e) => {
    dailyPage.renderPage(dailyList);
    document.querySelector('header h1').innerText = "Daily";
    localStorage.setItem("dailyList", JSON.stringify(dailyList));
    console.log(localStorage.getItem("dailyList"));
    
});

const add = document.getElementById("add");
add.addEventListener('click', (e) => {
    addingPage.renderPage([]);
    document.querySelector('header h1').innerText = "perfectodo, perfect To-Do listing!";
});


document.getElementById('logo').src = logo;