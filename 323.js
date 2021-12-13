 $(function() {
var projects = [
{
id:1,
value: "jquery",
label: "jQuery",
desc: "the write less, do more, JavaScript library",
icon: "jquery_32x32.png"
},
{
    id:2,
value: "jquery-ui",
label: "jQuery UI",
desc: "the official user interface library for jQuery",
icon: "jqueryui_32x32.png"
},
{
    id:3,
value: "sizzlejs",
label: "Sizzle JS",
desc: "a pure-JavaScript CSS selector engine",
icon: "sizzlejs_32x32.png"
}
];
     
     
$( "#project" ).autocomplete({
minLength: 0,
source: projects,
focus: function( event, ui ) {
$( "#project" ).val( ui.item.label );
return false;
},
select: function( event, ui ) {
$( "#project" ).val( ui.item.label );
$( "#project-id" ).val( ui.item.id );
//$( "#project-label" ).val( ui.item.label );
$( "#project-description" ).val( ui.item.desc );
$( "#project-icon" ).attr( "src", "images/" + ui.item.icon );
return false;
}
})
.data( "ui-autocomplete" )._renderItem = function( ul, item ) {
return $( "<li>" )
.append( "<a id='"+item.id+"'>" + item.label + "<br>" + item.desc + "</a>" )
.appendTo( ul );
};
});
