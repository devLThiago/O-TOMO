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

	function redirectToWhatsapp() {
        window.location.href = 'https://www.instagram.com/mvp.rpg';
    }

	function redirectToInstagram() {
        window.location.href = 'https://www.instagram.com/mvp.rpg';
    }

    function redirectToDownload() {
		window.location.href = 'https://mvpsistema.forumbrasil.net/faq';
    }
	
	function redirectToCriaturas() {
		window.location.href = 'https://mvpsistema.forumbrasil.net/faq';
    }
	
	function redirectToMapa() {
		window.location.href = 'https://mvpsistema.forumbrasil.net/gallery';
    }
