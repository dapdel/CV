function Next(e){
    let sectionCourante = e.currentTarget.parentNode.id;
    let noDeSection = sectionCourante.charAt(7);
    noDeSection++;
    let sectionVisee = document.querySelector(`#section${noDeSection}`);
    sectionVisee.scrollIntoView();
}

export default Next;