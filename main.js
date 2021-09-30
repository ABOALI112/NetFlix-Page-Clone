const tabItems = document.querySelectorAll('.tab-item');
const tabItems = document.querySelectorAll('.tab-content-item');

function selectItem(e){
    removeBorder();
    /* select content item and add it to border */
    this.classList.add('tab-border');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

tabItems.forEach(item=>item.addEventListener('click',selectItem));
