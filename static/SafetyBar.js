function toggleSafetyBar() {
    const safetyBar = document.querySelector('.safety-bar');
    const mirko = document.querySelector('.mirko');
    const arrow2Icon = document.querySelector('.arrow2-icon');
    
    safetyBar.classList.toggle('expanded');
    mirko.style.maxHeight = safetyBar.classList.contains('expanded') ? mirko.scrollHeight + "px" : "0";
    arrow2Icon.style.transform = safetyBar.classList.contains('expanded') ? 'rotate(45deg)' : 'rotate(0deg)';
}