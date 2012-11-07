$(function () {
    //formularz do zdjec
    $('<form><label for="url">Url</label><input type="text" name="url" id="url"'
        + ' class="text ui-widget-content ui-corner-all" /><br /><br />'
        + '<p class="btn submit"><input type="File" value="Choose picture"'
        + ' name="choosePicture" id="choosePicture" accept="image/*"/></p><label for="pichtureWidth">'
        + 'Width</label><input type="text" name="pichtureWidth" id="pichtureWidth"'
        + ' class="text ui-widget-content ui-corner-all" /><label for="pictureHeight">'
        + 'Height</label><input type="text" name="pictureHeight" id="pictureHeight"'
        + ' class="text ui-widget-content ui-corner-all" />').appendTo('#pictureForm');

   //formularz do tabow
    $('<form><label>Add tab</label>'
        + '<span class="ui-icon ui-icon-circle-plus"/><br/><label>Titles</label>'
        + '<ul id="tabList"><li id="tabLi1">'
        + '<input type="text" id="tab_title1" value="" class="ui-widget-content ui-corner-all" />'
        + '<span class="ui-icon ui-icon-close"/></li></lu></form>').appendTo('#tabForm');

    //slidery
    $('<div id="redSlider"></div><div id="greenSlider"></div><div id="blueSlider"></div><div id="swatch" class="ui-widget-content ui-corner-all"></div>').appendTo('#picker');
});