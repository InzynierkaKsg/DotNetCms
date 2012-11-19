$(function () {
    //formularz do zdjec
    $('<p class="validateTips"></p><form><div class="picker"><select><option SELECTED>Url</option>'
        + '<option>Select File</option></select>'
        + '<a href="#" class="toggle" id="selectedPicture" >Url<span class="caret"></span></a><ul><li><a href="#" class="selctablePicture">Url</a></li><li>'
        + '<a href="#" class="selctablePicture">Select File</a></li></ul></div><div id="urlPicture"><label for="url">Url</label><input '
        + 'type="text" name="url" id="url" class="text ui-widget-content ui-corner-all" /></div>'
        + '<div id="selectFilePicture"><p class="btn submit"><input type="File" value="Select picture"'
        + ' name="choosePicture" id="choosePicture" accept="image/*"/></p></div><label for="pichtureWidth">'
        + 'Width</label><input type="text" name="pichtureWidth" id="pichtureWidth"'
        + ' class="text ui-widget-content ui-corner-all" /><label for="pictureHeight">'
        + 'Height: Auto</label></form>').appendTo('#pictureForm');


    $('<p class="validateTips"></p><form><div class="picker"><select><option SELECTED>Url</option>'
        + '<option>Select File</option></select>'
        + '<a href="#" class="toggle" id="selectedPictureEdit" >Url<span class="caret">'
        + '</span></a><ul><li><a href="#" class="selctablePictureEdit">Url</a></li><li>'
        + '<a href="#" class="selctablePictureEdit">Select File</a></li></ul></div>'
        + '<div id="urlPictureEdit"><label for="urlEdit">Url</label><input type="text" name="urlEdit" id="urlEdit"'
        + ' class="text ui-widget-content ui-corner-all" /></div>'
        + '<div id="selectFilePictureEdit" style="display: none"><p class="btn submit"><input type="File" value="Choose picture"'
        + ' name="choosePictureEdit" id="choosePictureEdit" accept="image/*"/></p></div><label for="pichtureWidthEdit">'
        + 'Width</label><input type="text" name="pichtureWidthEdit" id="pichtureWidthEdit"'
        + ' class="text ui-widget-content ui-corner-all" /><label for="pictureHeightEdit">'
        + 'Height: Auto</label></form>').appendTo('#pictureFormEdit');



    //formularz do tabow
    $('<p class="validateTips"></p><form><label>Titles</label>'
        + '<span class="ui-icon ui-icon-circle-plus"/><br/><label>Titles</label>'
        + '<ul id="tabList"><li id="tabLi1">'
        + '<input type="text" id="tab_title1" value="" class="ui-widget-content ui-corner-all" />'
        + '<span class="ui-icon ui-icon-close"/></li></lu></form>').appendTo('#tabForm');

    //slidery
    $('<div id="redSlider"></div><div id="greenSlider"></div><div id="blueSlider">'
        + '</div><div id="swatch" class="ui-widget-content ui-corner-all"></div>').appendTo('#picker');

    //dodaj edytor tekstu
    $('<textarea id="dialogAddTextEditor" rows="10" style="width: 400px">Click to edit.</textarea>').appendTo('#textAddForm');

    //edytuj tekst
    $('<textarea id="dialogTextEditor" rows="10" style="width: 400px"></textarea>').appendTo('#textEditorForm');

    //formularz do map
    $('<form><label for="address">Address</label><input type="text" name="address" id="address"'
        + ' class="text ui-widget-content ui-corner-all" />'
        + '<form><label for="description">Description</label><input type="text" name="description" id="description"'
        + ' class="text ui-widget-content ui-corner-all" /><br /><br />'
        + '<button id="mapPreviewButton">Preview</button><br /><br />'
        + '<div id="mapPreview"></div></form>').appendTo('#mapForm');

    //formularz do page'ow
    $('<p class="validateTips"></p><form><label>Add tab</label>'
        + '<span class="ui-icon ui-icon-circle-plus"/><br/><label>Titles</label>'
        + '<ul id="pageList"></lu></form>').appendTo('#pageForm');

});