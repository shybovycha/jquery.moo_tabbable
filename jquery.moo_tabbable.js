/*
 * This plugin allows one to create a tab set (tab controls + tab panel) from any elements for any toggling event.
 *
 * E. g., you may create tabs from dropdown (<select><option>...</select>) and a div. Or from a set of links (<a>) and
 * span.
 *
 * Usage:
 *
 *  HTML:
 *
 *      <select id="tabs" tab-container="#moo">
 *          <option value="/page1.html">first tab</option>
 *          <option value="/page2.html">second tab</option>
 *          <option value="/page3.html">third tab</option>
 *          <option value="/page4.html">fourth tab</option>
 *      </select>
 *
 *      <span style="display: block; width: 200px; height: 200px; overflow: hidden; border: 1px dashed black;" id="moo">some span element</span>
 *
 *  JavaScript:
 *
 *      $('#tabs').moo_tabbable('change', function() { return $(this).val(); }, 'tab-container');
 */

(function($) {
    $.fn.qap_tabbable = function(event, url_attribute, container_attribute, ready) {
        this.each(function() {
            var $this = $(this);

            var next = function() {
                if (typeof(ready) == "function") {
                    setTimeout(function() {
                        ready.call($this);
                    }, 500);
                }
            };

            $this.die(event).live(event, function(e) {
                e.preventDefault();

                var url = url_attribute, container = container_attribute;

                if (typeof(url_attribute) != "function") {
                    url = function() {
                        return $this.attr(url_attribute);
                    };
                }

                if (typeof(container_attribute) != "function") {
                    container = function() {
                        return $this.attr(container_attribute);
                    };
                }

                var tab_container = $(container.call($this)), tab_url = url.call($this);

                if (tab_container.attr('current_url') == tab_url) {
                    console.warn('tab ' + tab_url + ' is already loaded');
                    next();
                    return false;
                } else {
                    tab_container.attr('current_url', tab_url);
                    tab_container.load(tab_url);
                }

                next();

                return false;
            });
        });
    };
})(jQuery);