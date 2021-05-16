const percentage = document.querySelector('.percentage');




navigator.getBattery().then(function(battery){
    const level = battery.level;
    const status = level * 100 + '%';
    percentage.style.width = battery.level * 100 + '%';
    pecent.innerHTML = battery.level * 100 + '%';




})










