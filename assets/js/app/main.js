/**
 * Main File
 */
define(['config', 'session', 'template', 'underscore'], function(config, session){
    /**
     * This function is used to bind Events
     */
    function bindEvents(){
        window.config = config;
        window.session = session;
    }

    /**
     * Initialising the Component
     */
    function init(){
        bindEvents();
    }

    return {
        init : init
    };
});