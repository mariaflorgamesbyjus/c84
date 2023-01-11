canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; // ajustando uma função, ao carregar essa variável
	img_imgTag.src = img_image;   // carregar uma imagem
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
		img_image="alfabeto.png"
		add()

		
}

else if(keyPressed>=48 && keyPressed<=57)

{

	img_image="número.png"
	add()
}


else if(keyPressed>=37 && keyPressed<=40)

{

	img_image="direcional.png"
	add()
}

else if(keyPressed>=17 && keyPressed<=19)

{

	img_image="especial.png"
	add()


}
	else{
		




	img_image="outras.png";
	add();
}}
	
