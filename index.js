
function calculate(){

const AdultosQueBebem = Number (document.getElementById('AdultosQueBebem').value);

const AdultosQueNãoBebem = Number (document.getElementById('AdultosQueNãoBebem').value);

const Crianças = Number (document.getElementById('Crianças').value);


const QuantidadeCarne = (AdultosQueBebem + AdultosQueNãoBebem) * 0.400 + Crianças * 0.200;

const QtdAcompanhamentos = (AdultosQueBebem + AdultosQueNãoBebem + Crianças) * 0.200;

const QtdCerveja = (AdultosQueBebem) * 2;

const QtdRefrigerante = (AdultosQueBebem + AdultosQueNãoBebem + Crianças) * 0.500;

const QtdAgua = (AdultosQueBebem + AdultosQueNãoBebem + Crianças) * 0.400;


alert (`A QUANTIDADE DE ITENS NECESSÁRIOS É:\n

${QuantidadeCarne}Kg de Carne
${QtdAcompanhamentos}Kg de Acompanhamentos
${QtdCerveja}L de Cerveja
${QtdRefrigerante}L de Refrigerante
${QtdAgua}L de Água`);

}