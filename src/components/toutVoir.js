function ToutVoir() {
    const sections = document.querySelectorAll(".section");
    for(let section of sections){
        section.style.display = "block";
    }
}
export default ToutVoir;