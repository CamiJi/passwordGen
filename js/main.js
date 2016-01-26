	  	// On renvoie un entier aléatoire entre une valeur min (incluse)
		// et une valeur max (incluse).
		// Attention : si on utilisait Math.round(), on aurait une distribution
		// non uniforme !
		function getRandomIntInclusive(min, max) {
	  		return Math.floor(Math.random() * (max - min +1)) + min;
		}

		function genererMotDePasse (jeuCaracteres, tailleMdp) {
		  		var motDePasse= '';

		  		for (var i = 0; i < tailleMdp; i++) {
					var nbAleatoire = getRandomIntInclusive(1, jeuCaracteres.length) - 1;
					var caractere = jeuCaracteres.charAt( nbAleatoire );
					motDePasse += caractere;

				}	
			return motDePasse
		}


		function genererListeMdp(jeuCaracteres, tailleMdp, quantiteMdp) {
			var tabPwd = [];

			for (var i = 0; i < quantiteMdp; i++) {
				tabPwd[i] = genererMotDePasse(jeuCaracteres, tailleMdp);
			}

			return tabPwd;
		}




$(document).ready(function() {
	

	console.log('DOM Ready');


	$('#caracSpeId').click(function() {

		if ($("#caracSpeInput").length > 0) {

			$( "#caracSpeDiv" ).empty();

		}

		else {

			$("#caracSpeDiv").append('<label>Quels caractères désirez-vous utiliser?</label><input id="caracSpeInput" type="text" name="caracSpeinput" value="²#{([-|_@)]}=+$%*!:;.,?">');
		}

	});


	$( "#btnGenererId" ).click(function() {

		$( "#zoneAffichage" ).empty();

  		var jeuCaracteres = "abcdefghijklmnopqrstuvwxyz";
  		var majuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  		var nombres = "012345678901234567890123456789";



		if ($('#caracMajId').is(":checked")) {
			 jeuCaracteres += majuscules;		
		}

		if ($('#caracNumId').is(":checked")) {
			 jeuCaracteres += nombres;		
		}

		if ($('#caracSpeId').is(":checked")) {
				var caractereSpeciaux = $('#caracSpeInput').val();
				jeuCaracteres += caractereSpeciaux;
		}





  		var tailleMdp = parseInt($('#tailleMdpId').val(), 10);
  		var quantiteMdp = parseInt($('#nbMdpId').val(), 10);
  		var listeMdp = genererListeMdp(jeuCaracteres, tailleMdp, quantiteMdp);


  		var texte = '';

  		if (listeMdp.length === 1) {
  			texte = '<p>'+listeMdp[0]+'</p>';
  		}

  		else {
  			texte = '<p>'+listeMdp.join('</p><p>')+'</p>';
  		}






		$("#zoneAffichage").append(
			'<p>'+texte+'</p>');

	});/*End Click Generer*/




	
});/*End documents ready*/
