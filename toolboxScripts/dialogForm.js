$(function () {
    //formularz do zdjec
    $('<form><label for="url">Url</label><input type="text" name="url" id="url"'
        + ' class="text ui-widget-content ui-corner-all" /><br /><br />'
        + '<p class="btn submit"><input type="File" value="Choose picture"'
        + ' name="choosePicture" id="choosePicture" accept="image/*"/></p><label for="pichtureWidth">'
        + 'Width</label><input type="text" name="pichtureWidth" id="pichtureWidth"'
        + ' class="text ui-widget-content ui-corner-all" /><label for="pictureHeight">'
        + 'Height</label><input type="text" name="pictureHeight" id="pictureHeight"'
        + ' class="text ui-widget-content ui-corner-all" /></form>').appendTo('#pictureForm');

    //formularz do tabow
    $('<form><label>Add tab</label>'
        + '<span class="ui-icon ui-icon-circle-plus"/><br/><label>Titles</label>'
        + '<ul id="tabList"><li id="tabLi1">'
        + '<input type="text" id="tab_title1" value="" class="ui-widget-content ui-corner-all" />'
        + '<span class="ui-icon ui-icon-close"/></li></lu></form>').appendTo('#tabForm');

    //slidery
    $('<div id="redSlider"></div><div id="greenSlider"></div><div id="blueSlider">'
        + '</div><div id="swatch" class="ui-widget-content ui-corner-all"></div>').appendTo('#picker');

    //edytor tekstu
    $(' <textarea id="dialogEditor" rows="10" style="width: 400px">Wpisz tekst.</textarea>').appendTo('#textEditorForm');


    //formularz do map
    $('<form><label for="latitude">Latitude</label><input type="text" name="latitude" id="latitude"'
        + ' class="text ui-widget-content ui-corner-all" />'
        + '<label for="longitude">Longitude</label><input type="text" name="longitude" id="longitude"'
        + ' class="text ui-widget-content ui-corner-all" /><br /><br />'
        + '<button id="mapPreviewButton">Preview</button><br /><br />'
        + '<div id="mapPreview"></div></form>').appendTo('#mapForm');


});