document.onkeydown = function(e) {
    if (e.altKey && e.keyCode == 86) {
    	event.target.innerText = event.target.innerText.engForrus()
    }
}

String.prototype.engForrus = function() {
	let rus = ['й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю', 'Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Я','Ч','С','М','И','Т','Ь','Б','Ю','ё','Ё','0','1','2','3','4','5','6','7','8','9','!','@','"','#','№','$',';','%','^',':','&','?','*','(',')','-','_','+','=']
	let eng = ['q','w','e','r','t','y','u','i','o','p','[',']','a','s','d','f','g','h','j','k','l',';',"'",'z','x','c','v','b','n','m',',','.', 'Q','W','E','R','T','Y','U','I','O','P','[',']','A','S','D','F','G','H','J','K','L',':','"','Z','X','C','V','B','N','M','<','>','`','~','0','1','2','3','4','5','6','7','8','9','!','@','"','#','№','$',';','%','^',':','&','?','*','(',')','-','_','+','=']
	let n_russ = ''	
	let ff = ''
	for (var i = 0; i <= (this.length - 1); i++) {
		n_russ = eng.indexOf(this[i], 0)
		switch(n_russ) {
			case n_russ : if (rus[n_russ] == undefined) {
					ff += ' '}
				else{
					ff += rus[n_russ]}
			break;
		}
	}
	return ff
}