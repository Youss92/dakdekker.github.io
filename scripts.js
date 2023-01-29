const navLinks = document.querySelector(".nav-links")

const opTele = document.querySelector(".opTele")


opTele.addEventListener("click",() => {
    const visibility = navLinks.getAttribute("data-visible");
    const visibility1 = opTele.getAttribute("aria-expanded");

    if(visibility === "false"){
        navLinks.setAttribute("data-visible", true);
        opTele.setAttribute("aria-expanded", true);
       
    }else if (visibility === "true"){
        navLinks.setAttribute("data-visible", false);
        opTele.setAttribute("aria-expanded", false);


    }
})