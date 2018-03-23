/**
 * Created by Asus on 10.01.2018.
 */

var $grid = $('.grid').isotope({
   itemSelector: '.element-item',
   layoutMode: 'fitRows',
   getSortData:{
       name: '.name'
   }
});