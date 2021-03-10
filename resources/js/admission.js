window.addEventListener('load', function() {
    fixMenuLinks();
    
     function fixMenuLinks(){
         
        var ulNav = document.querySelector('ul.navbar-items-menu'); 
        if (window.location.href.indexOf("admission.universityofcalifornia.edu/admission-requirements/") > -1) {
          ulNav.getElementsByTagName("li")[0].className += " nav-item-active"
        }else if (window.location.href.indexOf("admission.universityofcalifornia.edu/how-to-apply/") > -1) {
          ulNav.getElementsByTagName("li")[1].className += " nav-item-active"
        }else if (window.location.href.indexOf("admission.universityofcalifornia.edu/tuition-financial-aid/") > -1) {
          ulNav.getElementsByTagName("li")[2].className += " nav-item-active"
        }else if (window.location.href.indexOf("admission.universityofcalifornia.edu/campuses-majors/") > -1) {
          ulNav.getElementsByTagName("li")[3].className += " nav-item-active"
        }
    };
});