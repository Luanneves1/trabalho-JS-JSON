
var cont = 1; 

function clicar(){
   
    novaDiv = document.createElement ("div");
    novaDiv.innerHTML = '<form action="" class="container">   <div class="container" id="form">      <fieldset class="container" id="criar">        <h2 id="h2">             <ul>Personagem - 1 </ul>         </h2>          <div id="im">             <img src="personagens/3 clases.webp" alt="" width="500"                 style="border: 5px solid rgb(255, 255, 255); border-radius: 10px;">         </div>         <div id="criar2">             <fieldset class="container" id="forme">                 <input type="checkbox" name="checked" id="box"> - Incluir personagem na batalha.                 <div>                     Nome <div class="container" id="nom"> <input type="text" name="nome" id="nomme"> </div>                 </div>                  <h4>Escolha sua classe de Batalha</h4>                  <input type="radio" name="personagem" id="cav">                 <label for="cav">cavaleiro</label>                  <input type="radio" name="personagem" id="sam">                 <label for="sam">samurai</label>                  <input type="radio" name="personagem" id="vik">                 <label for="vik">vikings</label>                   <div class="container" id="lab">                     <div><label for="for">Força</label></div>                      <div> <input type="number" name="força" id="for" value="552"></div>                 </div>                  <div class="container">                     <div><label for="for">Agilidade</label> </div>                     <div><input type="number" name="Agilidade" id="for" value="250"></div>                 </div>                  <div class="container">                     <div>                         <label for="for">Vida</label>                     </div>                     <div>                         <input type="number" name="vida" id="for" value="1500">                     </div>                 </div>                  <div class="container">                     <div> <label for="for">Estamina</label> </div>                     <div> <input type="number" name="estamina" id="for" value="630"> </div>                 </div>                  <div class="container">                     <div> <label for="for">Resistência</label> </div>                     <div> <input type="number" name="resistencia" id="for" value="450"> </div>                 </div>                  <div>                     <input id="button" type="button" value="Criar">                     <div>                         <button id="button" id="add" type="button" onclick="clicar()">Criar Novo Personagem</button>                     </div>                 </div>                 <div id="box" class="box">              </fieldset>         </div>         <h2 id="h2">      </fieldset> </div>  </form>'
    ;
    
    if (cont<8) { 
        document.getElementById ("form_container").appendChild(novaDiv);
        cont++;
}
 };

 var text = 
 [
    {"id":  1,  "Legion": "Cavaleiro",  "casa":  "Reino dos Cavaleiros",  "descricao": "Os cavaleiros são personagens que Possuem seus atribustos equilibrados tanto em força quanto velocidade e agilidade",  "personagens-saga":  ["Guardião",  "Chosen",  "Cavaleiro",      "casa",      "castelo"],      "imagem":"personagens/cavaleiro.webp"},{"id": 2, "nacao": "japão", "casa": "Vila", "descricao": "Os Samurais são personagens que possuem uma alta agilidade e velocidade mas não possuem uma grande força.",  "personagens-saga": ["Samurai",            "Samurai",            "casa"],            "imagem": "personagens/samurai.jpg"},
]

var text1 = JSON.parse (text); 
console.log (text1[0]);