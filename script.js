function calcularMedia() {
   var primeiraNota = document.getElementById("notaUm");
   var notaUm = primeiraNota.value;
   var primeiraNotaDigitada = parseFloat(notaUm);

   var segundaNota = document.getElementById("notaDois");
   var notaDois = segundaNota.value;
   var segundaNotaDigitada = parseFloat(notaDois);

   var terceiraNota = document.getElementById("notaTres");
   var notaTres = terceiraNota.value;
   var terceiraNotaDigitada = parseFloat(notaTres);

   var quartaNota = document.getElementById("notaQuatro");
   var notaQuatro = quartaNota.value;
   var quartaNotaDigitada = parseFloat(notaQuatro);

   var mediaFinal = (primeiraNotaDigitada + segundaNotaDigitada + terceiraNotaDigitada + quartaNotaDigitada) / 4;
   console.log(mediaFinal);

   var valorNotaFinal = document.getElementById("notaFinal")
   var notaFinal = "A sua média final é " + mediaFinal
   valorNotaFinal.innerHTML = notaFinal
}