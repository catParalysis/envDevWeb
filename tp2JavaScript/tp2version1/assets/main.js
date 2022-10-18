window.addEventListener('DOMContentLoaded', function(){
    let entreeTache = document.querySelector('[data-js-btnAjout]'),
        elForm = document.querySelector('[data-js-form]');
        compteur = 0;

        entreeTache.addEventListener('click', function(e){
            e.preventDefault();


            let nomTache = elForm.querySelector('[data-js-nomTache]').value,
                descTache = elForm.querySelector('[data-js-descriptionTache]').value,
                importTache = elForm.querySelector('input[name="importance"]:checked').value;
                compteur++;

            let tache = {
                numero: compteur,
                nom: nomTache, 
                description: descTache, 
                importance: importTache
                };

                todolist.push(tache);
                console.log(todolist);

            new Tache(tache.numero, tache.nom, tache.importance, tache.description);
            elForm.querySelector('[data-js-nomTache]').value = '';
            elForm.querySelector('[data-js-descriptionTache]').value = '';
            elForm.querySelector('input[name="importance"]:checked').checked = false;

        });






});