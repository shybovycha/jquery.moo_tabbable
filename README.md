# jquery.moo_tabbable

Tabs switcher plugin for jQuery. Tab pane and tab could be any element.

This plugin allows one to create a tab set (tab controls + tab panel) from any elements for any toggling event.

E. g., you may create tabs from dropdown (`<select><option>...</select>`) and a div. Or from a set of links (`<a>`) and
span.

## Usage

**HTML:**

    <select id="tabs" tab-container="#moo">
        <option value="/page1.html">first tab</option>
        <option value="/page2.html">second tab</option>
        <option value="/page3.html">third tab</option>
        <option value="/page4.html">fourth tab</option>
    </select>

    <span style="display: block; width: 200px; height: 200px; overflow: hidden; border: 1px dashed black;" id="moo">some span element</span>

**JavaScript:**

    $('#tabs').moo_tabbable('change', function() { return $(this).val(); }, 'tab-container');

