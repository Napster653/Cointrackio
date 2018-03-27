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
				console.log(res);
				document.getElementById("dataTable")
				for (key in res.result)
				{
					var productData = {
						id: res[key].MarketName,
						high: res[key].High,
						low: res[key].Low,
						volume: res[key].Volume,
						last: res[key].Last
					};
					console.log(productData)
					updateDataTable(productData);
				}
			}
		}
	}
	request.open("GET", "https://bittrex.com/api/v1.1/public/getmarketsummaries", true);
	request.send();
}