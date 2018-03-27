function getProductsGdax()
{
	var request = new XMLHttpRequest;
	var key;
	request.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			var res = JSON.parse(request.responseText);
			console.log(res);
			document.getElementById("dataTable")
			for (key in res)
			{
				var productData = {
					id: key,
					high: res[key].stats_24hour.high,
					low: res[key].stats_24hour.low,
					volume: res[key].stats_24hour.volume,
					last: res[key].stats_24hour.last
				};
				console.log(productData)
				updateDataTable(productData);
			}
		}
	}
	request.open("GET", "https://api.gdax.com/products/stats", true);
	request.send();
}