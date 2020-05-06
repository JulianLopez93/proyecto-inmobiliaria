
document.addEventListener('DOMContentLoaded', function () {
    // navbar
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {

    });

    // modals
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
});


function initMaterializeSelect(){
    // select
    var elems = document.querySelectorAll('select');
    
    var instances = M.FormSelect.init(elems, {});

}



// metodo para inicializar el carousel del hero 
//var instance = M.Carousel.init({
  //  fullWidth: true,
    //indicators: true
  //});

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {

    });
  });

  
  /*var instance = M.Carousel.init({
    fullWidth: true
  });*/

