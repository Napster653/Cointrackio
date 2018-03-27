function wait(ms)
{
	var start = new Date().getTime();
	var end = start;
	while (end < start + ms)
	{
		end = new Date().getTime();
	}
}
function exists (table, id)
{
	for (var i = 0; i < table.rows.length; i++)
	{
		if (table.rows[i].cells[0].innerHTML == id)
		{
			return i;
		}
	}
	return -1;
}
function getTrend (oldN, newN)
{
	var decreaseValue = newN - oldN;
	return (decreaseValue / oldN) * 100;
}
function updateDataTable(y)
{
	var dataTable = document.getElementById("dataTable");
	var existe = exists(dataTable, y.id);
	var oldLast = -1, oldTrend = -1;
	if (existe != -1)
	{
		oldLast = Number(dataTable.rows[existe].cells[4].innerHTML);
		oldTrend = Number(dataTable.rows[existe].cells[5].innerHTML);

		dataTable.rows[existe].cells[1].innerHTML =  Number(y.high).toFixed(6);
		dataTable.rows[existe].cells[2].innerHTML =  Number(y.low).toFixed(6);
		dataTable.rows[existe].cells[3].innerHTML =  Number(y.volume).toFixed(6);
		dataTable.rows[existe].cells[4].innerHTML =  Number(y.last).toFixed(6);
		if (oldLast !=  y.last)
		{
			var trend = getTrend(oldLast, y.last);
			dataTable.rows[existe].cells[5].innerHTML = (Number(trend)<0?"":"+") + Number(trend).toFixed(6);
			if (trend > 0)
			{
				console.log("Better");
				dataTable.rows[existe].cells[5].classList.toggle("text-info", false);
				dataTable.rows[existe].cells[5].classList.toggle("text-danger", false);
				dataTable.rows[existe].cells[5].classList.toggle("text-success", true);
			}
			else
			{
				console.log("Worse");
				dataTable.rows[existe].cells[5].classList.toggle("text-info", false);
				dataTable.rows[existe].cells[5].classList.toggle("text-success", false);
				dataTable.rows[existe].cells[5].classList.toggle("text-danger", true);
			}
		}
	}
	else
	{
		var row, cell;
		row = dataTable.insertRow(-1);

		var cell = row.insertCell(0);
		cell.innerHTML = y.id;

		cell = row.insertCell(1);
		cell.innerHTML = Number(y.high).toFixed(6);

		cell = row.insertCell(2);
		cell.innerHTML = Number(y.low).toFixed(6);

		cell = row.insertCell(3);
		cell.innerHTML = Number(y.volume).toFixed(6);

		cell = row.insertCell(4);
		cell.innerHTML = Number(y.last).toFixed(6);

		cell = row.insertCell(5);
		cell.innerHTML = (0.00).toFixed(6);
		cell.classList.toggle("text-info", true);
	}
	// if (last != -1)
	// {
	// 	console.log("last:\t" + typeof(last) + "\t" + last);
	// 	console.log("y.last\t" + typeof(Number(y.last)) + "\t" + Number(y.last));
	// 	if (last < Number(y.last))
	// 	{
	// 		console.log("mejor");
	// 		cell.classList.toggle("text-danger", false);
	// 		cell.classList.toggle("text-info", false);
	// 		cell.classList.toggle("text-success", true);
	// 		cell.innerHTML = Number(y.last);
	// 	}
	// 	else if (last > Number(y.last))
	// 	{
	// 		console.log("peor");
	// 		cell.classList.toggle("text-success", false);
	// 		cell.classList.toggle("text-info", false);
	// 		cell.classList.toggle("text-danger", true);
	// 		cell.innerHTML = Number(y.last);
	// 	}
	// 	else
	// 	{
	// 		cell.classList = classes;
	// 		cell.innerHTML = last;
	// 		console.log("igual");
	// 	}
	// }
	// else
	// {
	// 	cell.innerHTML = Number(y.last);
	// }
}