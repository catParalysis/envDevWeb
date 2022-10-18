
class Tache{
    constructor(numTache, nomTache, importTache, descTache) {

        this._nomTache = nomTache;
        this._descTache = descTache;
        this._importTache = importTache;
        this._index = numTache;
        this._zoneAffichageListe = document.querySelector('[data-js-liste]');
        this._zoneAffichageDescription = document.querySelector('[data-js-description]');
        this._btnAccordeon = document.querySelector('[data-js-btnAccordeon]');


        this.init();


} 
        init(){
            this.methodeAffichage();
            this._btnSup = document.querySelectorAll(`[data-js-supprimer]`);
            this._btnDecription = document.querySelectorAll(`[data-js-afficher]`);
            for (let i = 0; i < this._btnSup.length; i++) {
                this._btnSup[i].addEventListener('click', function(e){
                e.preventDefault();
                this.methodeSuppression();
                }.bind(this));
            }
            for (let i = 0; i < this._btnDecription.length; i++) {
            this._btnDecription[i].addEventListener('click', function(e){
                e.preventDefault();
                this.methodeAffichDetail();
            }.bind(this));
            }
            this._btnAccordeon.addEventListener('click', function(e){
                e.preventDefault();
                this.methodeAccordeon()
            }.bind(this));
        }



        methodeAffichage(){
            if(this._zoneAffichageListe.querySelectorAll('tr')){
                let zoneAVider = this._zoneAffichageListe.querySelectorAll('tr');
                zoneAVider.forEach(function(tr) {
                    tr.remove();                
                });} 
            for (let i = 0; i < todolist.length; i++) {
                this._zoneAffichageListe.insertAdjacentHTML('beforeend', `<tr><td>${todolist[i].nom}</td><td>${todolist[i].importance}</td><td><button data-js-afficher=${todolist[i].numero}>Afficher le détail</button></td><td><button data-js-supprimer='${todolist[i].numero}'>Supprimer</button></td></tr>`);
            }
        }



        methodeSuppression(){
            //this.parentNode.parentNode.remove();
            for (let i = 0; i < todolist.length; i++) {
                if (todolist[i].numero == this._btnSup.dataset.jsSupprimer)
                todolist.splice(i);
            }
            
            this.removeEventListener('click', this.methodeSuppression);
            console.log(todolist);
        }






        methodeAffichDetail(){
            if(this._zoneAffichageDescription.querySelectorAll('p')){
            let zoneAVider = this._zoneAffichageDescription.querySelectorAll('p');
            zoneAVider.forEach(function(p) {
                p.remove();                
            });}
            this._zoneAffichageDescription.classList.toggle("hidden")
            this._btnAccordeon.classList.toggle("bottom")
            this._zoneAffichageDescription.insertAdjacentHTML('beforeend', `<p>Nom : ${this._nomTache}</p><p>Description : ${this._descTache}</p><p>Importance : ${this._importTache}</p>`);
        }






        methodeAccordeon(){
            this._btnAccordeon.classList.toggle("bottom");
            this._zoneAffichageDescription.classList.toggle("hidden");
        }

};