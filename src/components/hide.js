
function Hide() {
    const sections = document.querySelectorAll(".section");
    for(let section of sections){
        section.style.display = "none";
    }
}
export default Hide;