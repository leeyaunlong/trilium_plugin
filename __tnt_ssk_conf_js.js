

// tree
function qact_pathlist() {
    $(".note-path-list-button").click();
}

// ckeditor 
function qact_btnBlockEdit() {
    var svg_node_tag="[d='M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z']";
    var svg_node=$(".ck-block-toolbar-button").not(".ck-hidden").find(svg_node_tag);
    console.log(svg_node);
	svg_node.parent().parent().click();
}


function qact_btnBullet() {
    var svg_node_tag="[d='M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z']";
    var svg_node=$(".ck-block-toolbar-button").not(".ck-hidden").parent().find(svg_node_tag);
    svg_node.parent().parent().click();
}

function qact_btnQuote() {
	var svg_node_tag="[d='M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z']";
    var svg_node=$(".ck-block-toolbar-button").not(".ck-hidden").parent().find(svg_node_tag);
    svg_node.parent().parent().click();

}function qact_btnTodo() {
	var svg_node_tag="[d='M2.315 14.705l2.224-2.24a.689.689 0 0 1 .963 0 .664.664 0 0 1 0 .949L2.865 16.07a.682.682 0 0 1-.112.089.647.647 0 0 1-.852-.051L.688 14.886a.635.635 0 0 1 0-.903.647.647 0 0 1 .91 0l.717.722zm5.185.045a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75zM2.329 5.745l2.21-2.226a.689.689 0 0 1 .963 0 .664.664 0 0 1 0 .95L2.865 7.125a.685.685 0 0 1-.496.196.644.644 0 0 1-.468-.187L.688 5.912a.635.635 0 0 1 0-.903.647.647 0 0 1 .91 0l.73.736zM7.5 5.75A.75.75 0 0 1 8.25 5h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z']";
    var svg_node=$(".ck-block-toolbar-button").not(".ck-hidden").parent().find(svg_node_tag);
    svg_node.parent().parent().click();
}

function qact_btnCode() {
	var svg_node_tag="[d='M12.87 12.61a.75.75 0 0 1-.089.976l-.085.07-3.154 2.254 3.412 2.414a.75.75 0 0 1 .237.95l-.057.095a.75.75 0 0 1-.95.237l-.096-.058-4.272-3.022-.003-1.223 4.01-2.867a.75.75 0 0 1 1.047.174zm2.795-.231l.095.057 4.011 2.867-.003 1.223-4.272 3.022-.095.058a.75.75 0 0 1-.88-.151l-.07-.086-.058-.095a.75.75 0 0 1 .15-.88l.087-.07 3.412-2.414-3.154-2.253-.085-.071a.75.75 0 0 1 .862-1.207zM16 0a2 2 0 0 1 2 2v9.354l-.663-.492-.837-.001V2a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h3.118L7.156 19H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h14zM5.009 15l.003 1H3v-1h2.009zm2.188-2l-1.471 1H5v-1h2.197zM10 11v.095L8.668 12H7v-1h3zm4-2v1H7V9h7zm0-2v1H7V7h7zm-4-2v1H5V5h5zM6 3v1H3V3h3z']";
    var svg_node=$(".ck-block-toolbar-button").not(".ck-hidden").parent().find(svg_node_tag);
    svg_node.parent().parent().click();
}

// ssk for quickeraction
function qact_btnIncludeNote() {
	var svg_node_tag="[d='M19,3H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h8c0.131,0,0.26-0.026,0.381-0.076s0.232-0.123,0.326-0.217l7-7 c0.086-0.086,0.147-0.187,0.196-0.293c0.014-0.03,0.022-0.061,0.033-0.093c0.028-0.084,0.046-0.17,0.051-0.259 C20.989,13.041,21,13.021,21,13V5C21,3.897,20.103,3,19,3z M5,5h14v7h-6c-0.553,0-1,0.448-1,1v6H5V5z M14,17.586V14h3.586 L14,17.586z']";
    var svg_node=$(".ck-block-toolbar-button").not(".ck-hidden").parent().find(svg_node_tag);
    svg_node.parent().parent().click();
}


// rename function
jQuery.fn.simulateKeyPress = function(character) {    
  // 内部调用jQuery.event.trigger    
  // 参数有 (Event, data, elem). 最后一个参数是非常重要的的！    
  jQuery($(".note-title")).trigger({ type: 'input', which: character.charCodeAt(0) });    
};    

//页面调用    
jQuery(document).ready( function($) {    
  // 绑定事件处理程序    
  $( 'body' ).keypress( function(e) {    
  //  alert( String.fromCharCode( e.which ) );    
    console.log(e);    
  });    
  // 模拟按键了 x    
 // $( 'body' ).simulateKeyPress('x');    
});  


function qact_rename() {
    var selObj = window.getSelection();
    var selText =selObj.toString();
    var range_text=selText.replace(/[\r\n]/g,"");
    selText=range_text.trim();
    console.log(selText);
    var v_title=$(".note-title").select();
    v_title.val(selText);
    $(".note-title").simulateKeyPress(' ');
}





// /////////////////////////////
// ssk for ckeditor
api.bindGlobalShortcut("ctrl+shift+o", () => qact_btnBlockEdit());

api.bindGlobalShortcut("ctrl+shift+6", () => qact_btnTodo());

api.bindGlobalShortcut("ctrl+shift+7", () => qact_btnBullet());

api.bindGlobalShortcut("ctrl+shift+8", () => qact_btnQuote());

api.bindGlobalShortcut("ctrl+shift+9", () => qact_btnCode());

// ssk for tree
api.bindGlobalShortcut("ctrl+shift+0", () => qact_pathlist());

// ssk for quickeraction
api.bindGlobalShortcut("ctrl+shift+l", () => qact_btnIncludeNote());

api.bindGlobalShortcut("alt+F2", () => qact_rename());
