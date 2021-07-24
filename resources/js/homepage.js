styleHomepageMenu();

function styleHomepageMenu(){
    var navBar = document.querySelector('nav.navbar'); 
    var navDesktop = document.querySelector('.nav-desktop') ;
    var navDesktopMain = document.querySelector('.nav-desktop .nav-main') ; 
    // var navDesktopSub = document.querySelector('.nav-desktop .nav-sub .nav-custom') ; 
    // var navDesktopSearch = document.querySelector('#search-menu') ; 
    
    navDesktop.className = 'nav-desktop d-none d-md-block navbar-dark' ; 
    navDesktopMain.className = 'nav-main container-hybrid bg-white' ;
    navBar.className = 'navbar navbar-expand-md navbar-dark' ; 
    // navDesktopSub.className = 'nav-custom bg-white text-blue' ; 
    // navDesktopSearch.className = 'collapse nav-custom nav-custom-search bg-white text-blue' ; 
    
    var navMobile = document.querySelector('.nav-mobile') ;
    var navMobileMain = document.querySelector('.nav-mobile .nav-main') ;
    var navMobileSub = document.querySelector('.nav-mobile .nav-sub') ;
    
    navMobile.className = 'nav-mobile d-block d-md-none navbar-dark' ; 
    navMobileMain.className = 'nav-main bg-white' ; 
    navMobileSub.className = 'nav-sub collapse bg-white text-blue' ; 
};