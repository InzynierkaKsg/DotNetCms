$(function () {
    //formularz do zdjec
    $('<div id="pictureForm" title="Add picture"><form>'
        + '<label for="url">Url</label><input type="text" name="url" id="url"'
        + ' class="text ui-widget-content ui-corner-all" /><br /><br />'
        + '<p class="btn submit"><input type="File" value="Choose picture"'
        + ' name="choosePicture" id="choosePicture" accept="image/*"/></p><label for="pichtureWidth">'
        + 'Width</label><input type="text" name="pichtureWidth" id="pichtureWidth"'
        + ' class="text ui-widget-content ui-corner-all" /><label for="pictureHeight">'
        + 'Height</label><input type="text" name="pictureHeight" id="pictureHeight"'
        + ' class="text ui-widget-content ui-corner-all" /></div> ').appendTo('#forma');

   //formularz do tabow
    $('<div id="tabForm" title="Tab data"><form><label>Add tab</label>'
        + '<span class="ui-icon ui-icon-circle-plus"/><br/><label>Titles</label>'
        + '<ul id="tabList"><li id="tabLi1">'
        + '<input type="text" id="tab_title1" value="" class="ui-widget-content ui-corner-all" />'
        + '<span class="ui-icon ui-icon-close"/></li></lu></form></div>').appendTo('#forma2');   
});