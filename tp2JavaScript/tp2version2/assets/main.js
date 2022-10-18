window.addEventListener('DOMContentLoaded', function(){

        let elForm = document.querySelector('[data-js-form]'),
                btnSubmit = elForm.querySelector('[data-js-btnAjout]');

                btnSubmit.addEventListener('click', function() {
                        new Form(elForm);
                
        });
});
