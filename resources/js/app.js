import '../assets/admin/plugins/jquery/jquery.min.js';
import '../assets/admin/js/adminlte.min.js';
import '../assets/admin/js/demo.js';
import '../assets/admin/plugins/bootstrap/js/bootstrap.bundle.min.js';

import.meta.glob([
    '../assets/admin/img/credit/**',
    '../assets/admin/img/**',
]);

$('.nav-sidebar a').each(function(){
    let location = window.location.protocol + '//' + window.location.host + window.location.pathname;
    let link = this.href;
    if(link === location){
        $(this).addClass('active');
        $(this).closest('.has-treeview').addClass('menu-open');
    }
});


