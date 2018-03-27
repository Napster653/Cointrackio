function getProductsBittrex()
{
	var request = new XMLHttpRequest;
	var key;
	request.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var res = JSON.parse(request.responseText);
			if (res.success == true)
			{
				document.getElementById("dataTable")
				for (key in res.result)
				{
					var productData = {
						id: res.result[key].MarketName,
						high: res.result[key].High,
						low: res.result[key].Low,
						volume: res.result[key].Volume,
						last: res.result[key].Last
					};
					updateDataTable(productData);
				}
			}
		}
	}
	request.open("GET", "https://cors-anywhere.herokuapp.com/https://bittrex.com/api/v1.1/public/getmarketsummaries", true);
	request.send();
}