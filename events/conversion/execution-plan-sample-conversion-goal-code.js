// Evolv 1.0 Conversion

/****
 * Execution Plan conversion method
 ****/
function evolvConversion() {
    // Note: (await evolv.runtime) is not compatible with IE 11
    evolv.runtime.then(function(rt) {
        rt.emitEvent('[event-name]'); // event name is set in the Manager
    });
};

/****
 * Execution Plan click event.
 * Reference the appropriate selector.
 ****/
var selector = document.querySelector("#cta");
selector.addEventListener("click", function() {
    evolvConversion();
})

/****
 * Trigger conversion on page load event, e.g. order confirmation.
 ****/
document.addEventListener("DOMContentLoaded", function() {
    evolvConversion();
});

/****
 * Ensure event fires if page loads before evolv client is available
 ****/
(function evolvConversion() {
    document.addEventListener("DOMContentLoaded", function() {
        if (evolv !== 'undefined') {
            evolv.runtime.then(function(rt) {
               rt.emitEvent('[event-name]'); // event name is set in the Manager
            });
            return;
        } else {
            evolvConversion();
        }
    });
})();
