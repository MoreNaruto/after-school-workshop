// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require skrollr
//= require turbolinks
//= require bootstrap
//= require bootstrap-sprockets
//= require_tree .

$.getScript('https://rawgithub.com/Prinzhorn/skrollr/master/src/skrollr.js',function(){
  $.getScript('https://rawgithub.com/Prinzhorn/skrollr-menu/master/src/skrollr.menu.js',function(){
  	var s = skrollr.init();
    
    skrollr.menu.init(s, {
    //skrollr will smoothly animate to the new position using `animateTo`.
    animate: true,

    //The easing function to use.
    //easing: 'sqrt',

    //Multiply your data-[offset] values so they match those set in skrollr.init
    scale: 2,

    //How long the animation should take in ms.
    duration: function(currentTop, targetTop) {
        //By default, the duration is hardcoded at 500ms.
        return 800;

        //But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
        return Math.abs(currentTop - targetTop) * 40;
    },

    //If you pass a handleLink function you'll disable `data-menu-top` and `data-menu-offset`.
    //You are in control where skrollr will scroll to. You get the clicked link as a parameter and are expected to return a number.
    /*handleLink: function(link) {
        return 400;//Hardcoding 400 doesn't make much sense.
    }*/
	});
  });
});

