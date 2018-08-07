$(document).ready(function(){

	
	$('#content2').hide()
	$('#content3').hide()

	$('#btn1').click(function(){
		$('#content1').show()
		$('#content2').hide()
	$('#content3').hide()
	})
	$('#btn2').click(function(){
		$('#content2').show()
		$('#content1').hide()
	$('#content3').hide()
	})
	$('#btn3').click(function(){
		$('#content3').show()
		$('#content2').hide()
	$('#content1').hide()
	})
});


var obj=[
    {
        id : "001",
        name : "apple",
        category : "fruit",
        color : "red"
    },
    {
        id : "002",
        name : "melon",
        category : "fruit",
        color : "green"
    },
    {
        id : "003",
        name : "banana",
        category : "fruit",
        color : "yellow"
    },
    {
        id : "004",
        name : "banana",
        category : "fruit",
        color : "yellow"
    }
];
for (var i =0; i<=obj.length; i++){
	var tr="<tr>"
	var td1= "<td>"+obj[i].id+"</td>";
	var td2= "<td>"+obj[i].name+"</td>";
	var td3= "<td>"+obj[i].category+"</td>";
	var td4= "<td>"+obj[i].color+"</td></tr>";
	$('#mytable').append(tr+td1+td2+td3+td4);



}

