$(document).ready(function() {
	$('#bfScore').circliful();
	
	$(".arrow").click(function () {
		$header = $(this);
		//getting the next element
		$content = $header.next();
		//open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
		$content.slideToggle(250, function () {
			//execute this after slideToggle is done
			//change text of header based on visibility of content div
			$header.html(function () {
				//change text based on condition
				switch($content.children().attr('id'))				
				{
					case "hcDailyTransactions":
						drawDailyTransactions();
						break;
					case "hcCirculation":
						drawBTCCirculation();
						break;
					case "hcAngelList":
						drawAngelList();
						break;
					case "hcCoreDownloads":
						drawCoreDownloads();
						break;
					case "hcWalletUsers":
						drawWalletUsers();
						break;
					case "hcATM":
						drawATM();
						break;
					case "hcBusinesses":
						drawBusinesses();
						break;
					case "hcCoreCommits":
						drawCoreCommits();
						break;
					case "hcNetworkRate":
						drawHashRate();
						break;						
				}
									
				
				return $content.is(":visible") ? "<i class='fa fa-minus-circle fa-lg'></i>" : "<i class='fa fa-plus-circle fa-lg'></i>";
			});
		});
	});	
	
	function drawDailyTransactions()
	{		
	   $('#hcDailyTransactions').highcharts({
			title: {
				text: 'Daily Transactions',
				x: -20 //center
			},
			subtitle: {
				text: 'Source: <a href="https://blockchain.info/charts/n-transactions" target="_blank">https://blockchain.info/charts/n-transactions</a>',
				x: -20
			},
			xAxis: {
				categories: ['Jan 08','Jan 09', 'Jan 10', 'Jan 11', 'Jan 12', 'Jan 13', 'Jan 14','Jan 15']
			},
			yAxis: {
				title: {
					text: 'Total Daily Transctions'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			legend: {
				enabled: false,
				layout: 'horizontal',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'Total Transacitons',
				data: [93753,87160,92912,99126,105895,98185,107868,115516]
			}]
		});		
	}

	function drawBTCCirculation()
	{
	   $('#hcCirculation').highcharts({
			title: {
				text: 'Bitcoins in circulation',
				x: -20 //center
			},
			subtitle: {
				text: 'Source: <a href="https://blockchain.info/charts/total-bitcoins" target="_blank">https://blockchain.info/charts/total-bitcoins</a>',
				x: -20
			},
			xAxis: {
				categories: ['July 2014', 'Aug 2014', 'Sept 2014', 'Oct 2014', 'Nov 2014', 'Dec 2014','Jan 2015']
			},
			yAxis: {
				title: {
					text: 'Total Bitcoins in Circulation'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			legend: {
				enabled: false,
				layout: 'horizontal',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'Total Transacitons',
				data: [13695100,13705975,13709500,13713175,13717275,13719900,13723675]
			}]
		});		
	}
	
	function drawAngelList()
	{
	   $('#hcAngelList').highcharts({
			title: {
				text: 'Companies on AngelList 2014',
				x: -20 //center
			},
			subtitle: {
				text: 'Source: <a href="http://www.angel.co" target="_blank">http://www.angel.co using keyword \"Bitcoin\"</a>',
				x: -20
			},
			xAxis: {
				categories: ['June', 'July', 'August', 'Sept', 'Oct', 'Nov','Dec']
			},
			yAxis: {
				title: {
					text: 'Total Companies'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			legend: {
				enabled: false,
				layout: 'horizontal',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'Total Businesses',
				data: [349,414,431,479,512,541,580]
			}]
		});			
	}
	
	function drawCoreDownloads()
	{
		$('#hcCoreDownloads').highcharts({
			title: {
				text: 'Bitcoin core downloads',
				x: -20 //center
			},
			subtitle: {
				text: 'Source: <a href="http://sourceforge.net/projects/bitcoin/" target="_blank">http://sourceforge.net/projects/bitcoin/</a>',
				x: -20
			},
			xAxis: {
				categories: ['Jan 09', 'Jan 10', 'Jan 11', 'Jan 12', 'Jan 13', 'Jan 14']
			},
			yAxis: {
				title: {
					text: 'Downloads'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			legend: {
				enabled: false,
				layout: 'horizontal',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'Total Transacitons',
				data: [356,397,480,313,351,430]
			}]
		});		
	}
	
	function drawWalletUsers()
	{
		$('#hcWalletUsers').highcharts({
			title: {
				text: 'Wallet Users',
				x: -20 //center
			},
			subtitle: {
				text: 'Source: <a href="https://blockchain.info/charts/my-wallet-n-users" target="_blank">https://blockchain.info/charts/my-wallet-n-users</a>',
				x: -20
			},
			xAxis: {
				categories: ['July', 'August', 'Sept', 'Oct', 'Nov','Dec','Jan']
			},
			yAxis: {
				title: {
					text: 'Number of users'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			legend: {
				enabled: false,
				layout: 'horizontal',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'Total Users',
				data: [1930905,2107985,2276636,2407862,2519771,2657865,2793048]
			}]
		});		
	}
	
	function drawATM()
	{
		$('#hcATM').highcharts({
			title: {
				text: 'ATMs installed',
				x: -20 //center
			},
			subtitle: {
				text: 'Source: <a href="http://coinatmradar.com/chart/bitcoin-atm-location-growth/" target="_blank">http://coinatmradar.com/chart/bitcoin-atm-location-growth/</a>',
				x: -20
			},
			xAxis: {
				categories: ['July', 'August', 'Sept', 'Oct', 'Nov','Dec','Jan']
			},
			yAxis: {
				title: {
					text: 'Total Bitcoins in Circulation'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			legend: {
				enabled: false,
				layout: 'horizontal',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'Total ATMs',
				data: [135,151,182,241,259,297,337]
			}]
		});
	}
	
	function drawBusinesses()
	{
		$('#hcBusinesses').highcharts({
			title: {
				text: 'Businesses accepting Bitcoin',
				x: -20 //center
			},
			subtitle: {
				text: 'Source: <a href="http://media.coindesk.com/2015/01/Slide46-630x472.jpg" target="_blank">http://media.coindesk.com/2015/01/Slide46-630x472.jpg</a>',
				x: -20
			},
			xAxis: {
				categories: ['Q1 2014', 'Q2 2014', 'Q3 2014', 'Q3 2014', 'Q4 2014']
			},
			yAxis: {
				title: {
					text: 'Businesses accepting Bitcoin'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			legend: {
				enabled: false,
				layout: 'horizontal',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'Total Businesses',
				data: [16800,12936,10360,6000]
			}]
		});
	}
	
	function drawCoreCommits()
	{
		$('#hcCoreCommits').highcharts({
			title: {
				text: 'Bitcoin Core Commits Activity',
				x: -20 //center
			},
			subtitle: {
				text: 'Source: <a href="https://github.com/bitcoin/bitcoin/graphs/commit-activity" target="_blank">https://github.com/bitcoin/bitcoin/graphs/commit-activity</a>',
				x: -20
			},
			xAxis: {
				categories: ['Nov 30','Dec 7', 'Dec 14', 'Dec 21', 'Dec 28', 'Jan 4','Jan 11']
			},
			yAxis: {
				title: {
					text: 'Total Commits'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			legend: {
				enabled: false,
				layout: 'horizontal',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'Total Commits',
				data: [30,20,40,17,24,18,9]
			}]
		});
	}
	
	function drawHashRate()
	{
		$('#hcNetworkRate').highcharts({
			title: {
				text: 'Network Hash Rate GH/s',
				x: -20 //center
			},
			subtitle: {
				text: 'Source: <a href="https://blockchain.info/charts/hash-rate" target="_blank">https://blockchain.info/charts/hash-rate</a>',
				x: -20
			},
			xAxis: {
				categories: ['Jan 09', 'Jan 10', 'Jan 11', 'Jan 12', 'Jan 13', 'Jan 14','Jan 15']
			},
			yAxis: {
				title: {
					text: 'Total Commits'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			legend: {
				enabled: false,
				layout: 'horizontal',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'Total Commits',
				data: [272736832,307081470,284858469,296980106,358784281,330062320,301646358]
			}]
		});
	}	
});