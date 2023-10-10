function toggleReferenceBar() {
    const referenceBar = document.querySelector('.reference-bar');
    const sources = document.querySelector('.sources');
    const arrowIcon = document.querySelector('.arrow-icon');
    
    referenceBar.classList.toggle('expanded');
    sources.style.maxHeight = referenceBar.classList.contains('expanded') ? sources.scrollHeight + "px" : "0";
    arrowIcon.style.transform = referenceBar.classList.contains('expanded') ? 'rotate(45deg)' : 'rotate(0deg)';
}