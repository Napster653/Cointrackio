function getHistoricYear(fsym, tsym)
{
	var request = new XMLHttpRequest;
	var requestString = "https://min-api.cryptocompare.com/data/histoday?fsym="+fsym+"&tsym="+tsym +"&limit=365";

	request.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var.response = JSON.parse(request.responseText);
			if (response.response.localeCompare("Success"))
			{
				var ctx = document.getElementById("chartCoins").getContext("2d");
				for (i in response.data) // 365 iteraciones
				{
					var average = (response.data[i].high + response.data[i].low) / 2;
					// Dibujar primera línea de la gráfica
				}
			}
		}
	}
	request.open("GET", requestString, true);
	request.send();
}