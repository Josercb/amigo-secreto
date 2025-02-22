//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
 // Lista para armazenar os participantes
 let participants = [];

 // Função para adicionar um participante
 function addParticipant() {
   const input = document.getElementById('participantName');
 
   if (!input) {
     alert("Elemento de entrada 'participantName' não encontrado.");
     return;
   }
 
   const name = input.value.trim().toLowerCase();
 
   if (name === "") {
     alert("Por favor, insira um nome.");
     return;
   }
 
   if (participants.includes(name)) {
     alert("Esse nome já foi adicionado.");
     return;
   }
 
   participants.push(name);
   input.value = ""; // Limpa o campo de entrada
   updateParticipantList();
 }
 
 // Função para atualizar a lista de participantes na interface
 function updateParticipantList() {
   const participantsDiv = document.getElementById('participants');
   participantsDiv.innerHTML = "<h3>Participantes:</h3>";
 
   participants.forEach((participant, index) => {
     participantsDiv.innerHTML += `<div class="participant">${index + 1}. ${participant}</div>`;
   });
 }
 
 // Função de embaralhamento Fisher-Yates
 function shuffleArray(array) {
   for (let i = array.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
 }
 
 // Função para realizar o sorteio
 function draw() {
   if (participants.length < 2) {
 