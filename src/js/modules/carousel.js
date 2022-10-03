export function carousel() {
    // Tabs
    document.querySelector('.tab__tab-btn').addEventListener('click', showCurrentTab);
    document.querySelector('.tab__tab-btn').addEventListener('click', aciveBtn);

    const tabInnerBtn = document.querySelectorAll('.tab-btn-switch');
    const wave = document.querySelector('.tab__wave');
    const slider = document.querySelectorAll('.tab-content');
    let currentTab;

    function showCurrentTab(event) {
        if (event.target.className === 'tab-btn-switch') {
            const tabAttr = parseInt(event.target.dataset.tab);

            for (let i = 0; i < slider.length; i++) {
                tabAttr === i ? slider[i].style.display = 'flex' : slider[i].style.display = 'none';
            }
        }
    }

    function aciveBtn(event) {
        if (currentTab = event.target.dataset.tab) {

            for (let i = 0; i < tabInnerBtn.length; i++) {
                currentTab == i ? tabInnerBtn[i].classList.add('tab-is-active') : tabInnerBtn[i].classList.remove('tab-is-active');
                } 
            
            if (currentTab == '0') {
                wave.style.top = '12%';
            } else if (currentTab == '1') {
                wave.style.top = '42%';
            } else if (currentTab == '2') {
                wave.style.top = '72%';
            }
        } 
    }
}