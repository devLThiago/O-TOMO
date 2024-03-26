function copyText() {
        var textToCopy = 'a2888dbe-f797-4af3-a3dc-0f30eee0fd7e';
        var dummyInput = document.createElement('input');
        document.body.appendChild(dummyInput);
        dummyInput.setAttribute('value', textToCopy);
        dummyInput.select();
        document.execCommand('copy');
        document.body.removeChild(dummyInput);
        alert('Chave Pix copiada: ' + textToCopy);
    }

	function redirectToPortal() {
		window.location.href = 'https://mvpsistema.forumbrasil.net';
    }

	function redirectToYoutube() {
       		window.open('https://www.youtube.com/@MvP._');
    }

	function redirectToInstagram() {
        	window.open('https://www.instagram.com/mvp.rps');
    }

    	function redirectToDownload() {
		window.location.href = 'https://mvpsistema.forumbrasil.net/h4-baixar';
    }
	
	function redirectToCriaturas() {
		window.location.href = 'https://mvpsistema.forumbrasil.net/h2-criaturas';
    }
	
	function redirectToMapa() {
		window.location.href = 'https://mvpsistema.forumbrasil.net/h3-mapa';
    }