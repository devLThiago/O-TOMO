function sortCards(sortFunction) {
  const container = document.querySelector('#card-container');
  const cards = Array.from(container.children);
  cards.sort(sortFunction);
  container.innerHTML = '';
  cards.forEach(card => container.appendChild(card));
}
function compareByName(a, b) {
  const titleA = a.querySelector('.title').textContent;
  const titleB = b.querySelector('.title').textContent;
  return titleA.localeCompare(titleB);
}

function compareByType(a, b) {
  const tipoA = a.querySelector('.tipo').classList[1];
  const tipoB = b.querySelector('.tipo').classList[1];
  return tipoA.localeCompare(tipoB);
}
document.addEventListener('DOMContentLoaded', () => {
  const sortByNameBtn = document.querySelector('#sort-by-name');
  const sortByTypeBtn = document.querySelector('#sort-by-type');
  
  sortByNameBtn.addEventListener('click', () => {
    sortCards(compareByName);
  });
  
  sortByTypeBtn.addEventListener('click', () => {
    sortCards(compareByType);
  });
});

window.IconTipo = "";

window.Corruptor = "https://media.discordapp.net/attachments/1146553147943309425/1146852587153408070/Corruptor.png?ex=65f32db4&is=65e0b8b4&hm=1ad006de861483ab4331218ade7e5098ccaa4e1b1ec037444749663eb22546ac&=&format=webp&quality=lossless";
window.Aberracao = "https://media.discordapp.net/attachments/1146553147943309425/1146852558594396290/Aberracao.png?ex=65f32dad&is=65e0b8ad&hm=3d8bd61e6aa9ee1849e3d92e96b5bd14e37d6c9a1a8d1ba969f002f4bcec1264&=&format=webp&quality=lossless";
window.Fantasma = "https://media.discordapp.net/attachments/1146553147943309425/1146880523503931512/Fantasma.png?ex=65f347b8&is=65e0d2b8&hm=c5595f7343003ddba80881a41f8ea97bbe7ecd7e249549a9590c05399093c0f5&=&format=webp&quality=lossless";

window.Animal = "https://media.discordapp.net/attachments/1146553147943309425/1146852570241970188/Animal.png?ex=65f32db0&is=65e0b8b0&hm=1e60a56a0e26db12b415eb0f2329ff277344613811953b0edd865b747c496dc3&=&format=webp&quality=lossless";
window.Andos = "https://media.discordapp.net/attachments/1146553147943309425/1146878379358957708/Andos.png?ex=65f345b9&is=65e0d0b9&hm=84c167e64f5bd4ec642b10e98d94e4c9d0d39a32ec0b74824dd3c54072783ef7&=&format=webp&quality=lossless";
window.Ayope = "https://media.discordapp.net/attachments/1146553147943309425/1146878408442261614/Ayope.png?ex=65f345c0&is=65e0d0c0&hm=3ecb8dc400d1d4f5d75ee216720fb3bc994349b46ee81978120b274e5e251288&=&format=webp&quality=lossless";
window.Nain = "https://media.discordapp.net/attachments/1146553147943309425/1146878423017459722/Nain.png?ex=65f345c4&is=65e0d0c4&hm=8032c58ef7260c028c453170d0ee4b1a28182cdc987aa4939551f4a93b10b359&=&format=webp&quality=lossless";

window.Ectoplasma = "https://media.discordapp.net/attachments/1146553147943309425/1146852601749585970/Ectoplasma.png?ex=65f32db7&is=65e0b8b7&hm=58b26e1a79e9e70fbd0cf91bae3adb56bdd51db5ad05e257374546f80794a634&=&format=webp&quality=lossless";

window.Atroce = "https://media.discordapp.net/attachments/1146553147943309425/1147020016491974737/Atroce.png?ex=65f3c9a2&is=65e154a2&hm=0b9651718d4f7983ad01e8d2d61d13c8b61cdb25420dcb9711d0dc1df5f9df76&=&format=webp&quality=lossless";
window.Possessao = "https://media.discordapp.net/attachments/1146553147943309425/1146852613317472306/Possessao.png?ex=65f32dba&is=65e0b8ba&hm=cfc596b0b3a72e61bb584fdf3b91ef63ca85e492c3576b1846dd42aaccc85076&=&format=webp&quality=lossless";

window.Metamorfo = "https://media.discordapp.net/attachments/1146553147943309425/1147260117948051476/Materia-Vegetal.png?ex=65f4a93f&is=65e2343f&hm=2eb5a7a353f40942cabfbe2882b9c67f2dcaa4679e7a9cb51f86905ec14bdb7a&=&format=webp&quality=lossless";

window.iconMapping = {
  'Animal': Animal,
  'Andos': Andos,
  'Ayope': Ayope,
  'Nain': Nain,
  'Aberração': Aberracao,
  'Corruptor': Corruptor,
  'Fantasma': Fantasma,
  'Ectoplasma': Ectoplasma,
  'Atroce': Atroce,
  'Possessão': Possessao,
  'Metamorfo': Metamorfo
};

var divTipo = document.querySelectorAll('.tipo');
var divMudarDisplay = document.querySelector('.desc-tip');

divTipo.forEach(function(elemento) {
  elemento.addEventListener('click', function() {
    divMudarDisplay.style.display = 'block';

    var classesNetos = Array.from(elemento.parentNode.children).map(function(netos) {
      return netos.classList[1];
    }).join(',');

    switch (elemento.classList[1]) {
      case "Etereo":
        divMudarDisplay.innerHTML = "...";
        break;
      case "Caeli":
        divMudarDisplay.innerHTML = "...";
        break;
      case "Ignus":

		if (elemento.textContent in iconMapping) {
			IconTipo = iconMapping[elemento.textContent];
		};
		
		if (classesNetos.includes("Abismo")) {
			divMudarDisplay.innerHTML = "<div class='ordem'><img src="+ IconTipo +"><center>Abismo/Ruína/Ignífugo</center><hr></div><center><table><tr><th>Eficiente</th><th>Ineficiente</th></tr><tr><td><div style='background-color: orange;  border-radius: 10px;'>Relampejante</div></td><td><div style='background-color: mediumvioletred;  border-radius: 10px;'>Necrosante</div></td></tr></table></center>";
		} else {		
			divMudarDisplay.innerHTML = "<div class='ordem'><img src="+ IconTipo +"><center>Ignus/Urbano</center><hr></div><center><table><tr><th>Eficiente</th><th>Ineficiente</th></tr><tr><td><div style='background-color: blue;  border-radius: 10px;'>Congelante</div></td><td><div style='background-color: red;  border-radius: 10px;'>Flamejante</div></td></tr><tr><td><div style='background-color: #2E2F4F;  border-radius: 10px;'>Fumegante</div></td><td><div style='background-color: mediumvioletred;  border-radius: 10px;'>Necrosante</div></td></tr></table></center>";
		};
		
		break;
      case "Aqua":
	  
	  	if (elemento.textContent in iconMapping) {
			IconTipo = iconMapping[elemento.textContent];
		};
	  
		if (classesNetos.includes("Abismo")) {
			divMudarDisplay.innerHTML = "<div class='ordem'><img src="+ IconTipo +"><center>Abismo/Ruína/Aquático</center><hr></div><center><table><tr><th>Eficiente</th><th>Ineficiente</th></tr><tr><td><div style='background-color: gray;  border-radius: 10px;'>Chocante</div></td><td><div style='background-color: blue;  border-radius: 10px;'>Congelante</div></td></tr><tr><td><div style='background-color: orange;  border-radius: 10px;'>Relampejante</div></td><td></td></tr><tr><td><div style='background-color: indigo;  border-radius: 10px;'>Trovejante</div></td><td></td></tr></table></center>";
		} else {
			divMudarDisplay.innerHTML = "...";
		};
		
        break;
      case "Feerico":
        
	  	if (elemento.textContent in iconMapping) {
			IconTipo = iconMapping[elemento.textContent];
		};
	  
		if (classesNetos.includes("Etereo")) {
			divMudarDisplay.innerHTML = "...";
		} else {
			divMudarDisplay.innerHTML = "<div class='ordem'><img src="+ IconTipo +"><center>Feérico/Colina</center><hr></div><center><table><tr><th>Eficiente</th><th>Ineficiente</th></tr><tr><td><div style='background-color: blue;  border-radius: 10px;'>Congelante</div></td><td><div style='background-color: #2E2F4F;  border-radius: 10px;'>Fumegante</div></td></tr><tr><td><div style='background-color: red;  border-radius: 10px;'>Flamejante</div></td><td><div style='background-color: orange;  border-radius: 10px;'>Relampejante</div></td></tr></table></center>";
		};
		
        break;
      case "Sobreterra":

		if (elemento.textContent in iconMapping) {
			IconTipo = iconMapping[elemento.textContent];
		};
		
		if (classesNetos.includes("Etereo")) {
			divMudarDisplay.innerHTML = "...";
		} else {
			divMudarDisplay.innerHTML = "<div class='ordem'><img src="+ IconTipo +"><center>Sobreterra/Mata</center><hr></div><center><table><tr><th>Eficiente</th><th>Ineficiente</th></tr><tr><td></td><td><div style='background-color: green;  border-radius: 10px;'>Vida</div></td></tr></table></center>";
		};
		
		break;
      case "Limbo":
        
		if (elemento.textContent in iconMapping) {
			IconTipo = iconMapping[elemento.textContent];
		};
		
		if (classesNetos.includes("Etereo")) {
			divMudarDisplay.innerHTML = "...";
		} else {
			divMudarDisplay.innerHTML = "<div class='ordem'><img src="+ IconTipo +"><center>Limbo/Pântano</center><hr></div><center><table><tr><th>Eficiente</th><th>Ineficiente</th></tr><tr><td><div style='background-color: red;  border-radius: 10px;'>Flamejante</div></td><td><div style='background-color: #2E2F4F;  border-radius: 10px;'>Fumegante</div></td></tr><tr><td><div style='background-color: orange;  border-radius: 10px;'>Relampejante</div></td><td></td></tr></table></center>";
		};		

        break;	
      case "Abismo":

		if (elemento.textContent in iconMapping) {
			IconTipo = iconMapping[elemento.textContent];
		};
		
		if (classesNetos.includes("Aqua")) {
			divMudarDisplay.innerHTML = "<div class='ordem'><img src="+ IconTipo +"><center>Abismo/Ruína/Aquático</center><hr></div><center><table><tr><th>Eficiente</th><th>Ineficiente</th></tr><tr><td><div style='background-color: gray;  border-radius: 10px;'>Chocante</div></td><td><div style='background-color: blue;  border-radius: 10px;'>Congelante</div></td></tr><tr><td><div style='background-color: orange;  border-radius: 10px;'>Relampejante</div></td><td></td></tr><tr><td><div style='background-color: indigo;  border-radius: 10px;'>Trovejante</div></td><td></td></tr></table></center>";
		} else {
		if (classesNetos.includes("Ignus")) {
			divMudarDisplay.innerHTML = "<div class='ordem'><img src="+ IconTipo +"><center>Abismo/Ruína/Ignífugo</center><hr></div><center><table><tr><th>Eficiente</th><th>Ineficiente</th></tr><tr><td><div style='background-color: orange;  border-radius: 10px;'>Relampejante</div></td><td><div style='background-color: mediumvioletred;  border-radius: 10px;'>Necrosante</div></td></tr></table></center>";
		} else {
		if (classesNetos.includes("Submundo")) {
			divMudarDisplay.innerHTML = "<div class='ordem'><img src="+ IconTipo +"><center>Submundo/Caverna/Aruinado</center><hr></div><center><table><tr><th>Eficiente</th><th>Ineficiente</th></tr><tr><td><div style='background-color: red;  border-radius: 10px;'>Flamejante</div></td><td><div style='background-color: blue;  border-radius: 10px;'>Congelante</div></td></tr><tr><td><div style='background-color: orange;  border-radius: 10px;'>Relampejante</div></td><td></td></tr></table></center>";
		} else {
			divMudarDisplay.innerHTML = "<div class='ordem'><img src="+ IconTipo +"><center>Abismo/Ruína</center><hr></div><center><table><tr><th>Eficiente</th><th>Ineficiente</th></tr><tr><td><div style='background-color: red;  border-radius: 10px;'>Flamejante</div></td><td><div style='background-color: blue;  border-radius: 10px;'>Congelante</div></td></tr><tr><td><div style='background-color: orange;  border-radius: 10px;'>Relampejante</div></td><td><div style='background-color: #2E2F4F;  border-radius: 10px;'>Fumegante</div></td></tr><tr><td><div style='background-color: green;  border-radius: 10px;'>Vida</div></td><td><div style='background-color: mediumvioletred;  border-radius: 10px;'>Necrosante</div></td></tr></table></center>";
		}}};		
		
        break;
      case "Submundo":
		if (elemento.textContent in iconMapping) {
			IconTipo = iconMapping[elemento.textContent];
		};
		
		if (classesNetos.includes("Abismo")) {
			divMudarDisplay.innerHTML = "<div class='ordem'><img src="+ IconTipo +"><center>Submundo/Caverna/Aruinada</center><hr></div><center><table><tr><th>Eficiente</th><th>Ineficiente</th></tr><tr><td><div style='background-color: red;  border-radius: 10px;'>Flamejante</div></td><td><div style='background-color: blue;  border-radius: 10px;'>Congelante</div></td></tr><tr><td><div style='background-color: orange;  border-radius: 10px;'>Relampejante</div></td><td></td></tr></table></center>";
		} else {		
			divMudarDisplay.innerHTML = "<div class='ordem'><img src="+ IconTipo +"><center>Submundo/Caverna</center><hr></div><center><table><tr><th>Eficiente</th><th>Ineficiente</th></tr><tr><td><div style='background-color: red;  border-radius: 10px;'>Flamejante</div></td><td><div style='background-color: blue;  border-radius: 10px;'>Congelante</div></td></tr><tr><td><div style='background-color: orange;  border-radius: 10px;'>Relampejante</div></td><td><div style='background-color: indigo;  border-radius: 10px;'>Trovejante</div></td></tr></table></center>";
		};		

		break;
      case "Tormento":
        divMudarDisplay.innerHTML = "...";
        break;
      default:
        divMudarDisplay.innerHTML = "Visível";
        break;
    };
  });
});


document.addEventListener('mouseout', function(event) {
  if (!divMudarDisplay.contains(event.target) && !Array.from(divTipo).some(function(el) { return el.contains(event.target); })) {
    divMudarDisplay.style.display = 'none';
    inputElement.value = 'Visível';
  }
});

var flutuante = document.getElementById("flutuante");

document.addEventListener("click", function(e) {
  var x = e.clientX;
  var y = e.clientY;

  flutuante.style.top = y + "px";
  flutuante.style.left = x + "px";
});