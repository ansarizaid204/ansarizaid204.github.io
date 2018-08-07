

$(document).ready(function() {

	$('#heading').append("Hello World");


	$('#btn').click( function(e){
		$('#content').html("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, praesentium!</p>");	
		e.target.innerText = 'else'		
	})

});





// JS OBJECT
// JSON

var agli = {
	"name": "chudail",
	"lname": "bail ki bulli",
	"shadi": function (marad){
		return this.name + " " + marad.lname
	}
}

var shoeb = {
	"lname":"kazi",
}

var data = {
	"name":"faisal",
	"lname":"chawal",
	"some":"thing",
	"password":["empty","more","more","somemore"],
	"json":{"key":"value"},
	"fullname": function(){
		return data.name + data.lname
	},

}

var sum = function(a,b){ return a+b}

i = 1
while( i <= 10 ){
	if(i%2 == 0){
		console.log(agli.shadi(data));
	}else{
		console.log(agli.shadi(shoeb));
	}
	
	i++;
}



// console.log(sum(10,5))


// console.log(data.fullname())
// console.log(data.some)
