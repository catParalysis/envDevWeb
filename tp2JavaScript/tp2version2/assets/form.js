

    class Form {
        constructor(elForm){

            this.elForm = elForm;
            this._nomTache = elForm.querySelector('[data-js-nomTache]');
            this._descTache = elForm.querySelector('[data-js-descriptionTache]');
            this._importTache = elForm.querySelector('input[name="importance"]:checked');
            this._zoneAffichageListe = elForm.querySelector('[data-js-liste]');
            this._zoneAffichageDescription = elForm.querySelector('[data-js-description]');
            this._btnAccordeon = elForm.querySelector('[data-js-btnAccordeon]');
            this._btnSubmit = elForm.querySelector('[data-js-btnAjout]');
            this._btnTriImp = elForm.querySelector('[data-js-triImport]');
            this._btnTriAlpha = elForm.querySelector('[data-js-triAlpha]');

            this.init();
} 
            

            init(){
                if (this._nomTache != "" && this._importTache != "") {
                    let tache = {
                    nom: this._nomTache.value, 
                    description: this._descTache.value, 
                    importance: this._importTache.value
                    };
                    todolist.push(tache);
                    document.querySelector('[data-js-nomTache]').value = '';
                    document.querySelector('[data-js-descriptionTache]').value = '';
                    document.querySelector('input[name="importance"]:checked').checked = false;   
                
                }
                this.methodeAffichage();
                this.methodeAccordeon();
                
            
            
            }
            methodeAffichage(){

            if(this._zoneAffichageListe.querySelectorAll('tr')){
                let zoneAVider = this._zoneAffichageListe.querySelectorAll('tr');
                zoneAVider.forEach(function(tr) {
                    tr.remove();                
                });} 
            for (let i = 0; i < todolist.length; i++) {
                this._zoneAffichageListe.insertAdjacentHTML('beforeend', `<tr data-js-tache='${i}'><td><small>Tâche -</small> ${todolist[i].nom}</td><td><small>Importance - </small>${todolist[i].importance}</td><td><input type="button" data-js-afficher=${i} value="Afficher le détail"></td><td><input type="button" data-js-supprimer='${i}' value="Supprimer"></td></tr>`);
                let elTache = this._zoneAffichageListe.querySelector(`[data-js-tache='${i}']`)
                    if(parseInt(i+2) > todolist.length){
                        new Task(elTache);
                    }
        }
            }
            methodeAccordeon(){
                this._btnAccordeon.addEventListener("click", function() {
                    this._btnAccordeon.classList.toggle("bottom");
                    let panel = this._zoneAffichageDescription;
                    console.log(panel);
                    if (panel.style.maxHeight) {
                      panel.style.maxHeight = null;
                    } else {
                      panel.style.maxHeight = panel.scrollHeight + "px";
                    } 
                }.bind(this));
                
            }
        }
