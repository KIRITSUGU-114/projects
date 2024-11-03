document.querySelectorAll(".styles__item, .services__item").forEach(article =>{
    const title = article.querySelector(".styles__item-title, .services__item-title");
    const description = article.querySelector(".styles__item-description, .services__item-description");

    if(title && description){
        description.style.maxWidth = title.offsetWidth + "px";
    }
});


window.addEventListener('resize', () =>{
    document.querySelectorAll(".styles__item, .services__item").forEach(article =>{
        const title = article.querySelector(".styles__item-title, .services__item-title");
        const description = article.querySelector(".styles__item-description, .services__item-description");
    
        if(title && description){
            description.style.maxWidth = title.offsetWidth + "px";
        }
    });
});



