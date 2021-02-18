
function Hide() {
    const sections = document.querySelectorAll(".section");
    for(let section of sections){
        section.style.display = "none";
    }
    const section5 = document.querySelector("#section5");
    section5.style.display = "block";
}
export default Hide;