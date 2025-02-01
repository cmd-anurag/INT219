window.addEventListener("scroll", function() {
    let navbar = this.document.getElementById("navbar");
    if(this.window.scrollY > 10) {
        navbar.classList.remove("text-white")
        navbar.classList.add("text-black", "bg-gray-50",);
    }
    else {{
        navbar.classList.add("text-white")
        navbar.classList.remove("text-black", "bg-gray-50",);        
    }}
}) 