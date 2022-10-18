class Task{
    constructor(el){
        this._el = el;
        console.log(this._el)
        this._afficheDetail = this._el.querySelector('[data-js-afficher]');
        this._supprimeTache = this._el.querySelector('[data-js-supprimer]');
        this._zoneAfficheDetail = document.querySelector('[data-js-description]');
        this._index = this._el.getAttribute('data-js-tache');
        this._descriptionTache = Object.values(todolist[this._index]);
        this._btnAccordeon = document.querySelector('[data-js-btnAccordeon]');
        this.init();
    }
    init(){
        this._supprimeTache.addEventListener('click', function(e){

            let zoneAVider = document.querySelectorAll('p');
            zoneAVider.forEach(function(p) {
                p.remove();                
            });
            let index = e.target.parentNode.getAttribute('[data-js-tache]');
            console.log(index);
            todolist.splice(index);
            e.target.parentNode.parentNode.remove();
            console.log(todolist);
            });


        this._afficheDetail.addEventListener('click', function(e){
            e.preventDefault();
            console.log(todolist);
        if(this._zoneAfficheDetail.querySelectorAll('p')){
            let zoneAVider = this._zoneAfficheDetail.querySelectorAll('p');
            zoneAVider.forEach(function(p) {
                p.remove();                
            });}
            this._zoneAfficheDetail.insertAdjacentHTML('beforeend', `<p data-js-nom='${this._descriptionTache[0]}'>Nom : ${this._descriptionTache[0]}</p><p>Description : ${this._descriptionTache[1]}</p>`)
            this._btnAccordeon.classList.add("bottom");
                let panel = this._zoneAfficheDetail;
                if (panel.style.maxHeight == 0) {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                } 
        }.bind(this));
           
    }
}

