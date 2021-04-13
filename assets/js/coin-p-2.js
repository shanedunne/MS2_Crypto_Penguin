const coinURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=2&sparkline=true&price_change_percentage=24h';

async function getData(){
    const response = await fetch(coinURL);
    const data = await response.json();
    console.log(data);

    for (let i = 0; i < data.length; i++) { 
        let coinRank = data[i].market_cap_rank;
        console.log(coinRank);
    };

    for (let i = 0; i < data.length; i++) { 
        let coinImage = data[i].image;
        console.log(coinImage);
    };

    for (let i = 0; i < data.length; i++) { 
        let coinName = data[i].name;
        console.log(coinName);
    };

    for (let i = 0; i < data.length; i++) { 
        let coinSymbol = data[i].symbol;
        console.log(coinSymbol);
    };

    for (let i = 0; i < data.length; i++) { 
        let coinPrice = data[i].current_price;
        console.log(coinPrice);
    };

    for (let i = 0; i < data.length; i++) { 
        let coinPercentChange = data[i].price_change_percentage_24h;
        console.log(coinPercentChange);
    };

    for (let i = 0; i < data.length; i++) { 
        let coinVolume = data[i].total_volume;
        console.log(coinVolume);
    };

    for (let i = 0; i < data.length; i++) { 
        let coinMarketCap = data[i].market_cap;
        console.log(coinMarketCap);
    };

    for (let i = 0; i < data.length; i++) { 
        let coinSparkline = data[i].sparkline_in_7d;
        console.log(coinSparkline);
    };

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    

    
    // Write your code here
    function buildTable() {
        let coinData = `
        <table>
          <thead>
            <tr>
              <th class='rank-head'>Rank</th>
              <th class='image-head'></th>
              <th class='name-head'>Name</th>
              <th class='symbol-head'>Symbol</th>
              <th class='price-head'>Price</th>
              <th class='percent-head'>24h Change</th>
              <th class='volume-head'>24h Volume</th>
              <th class='market-cap-head'>Market Cap</th>
              <th class='chart-head'>7 Day Line</th>
            </tr>
          </thead>
          <tbody>
    `;
    
        for (let coins of data) {
            let rowHTML = `
            <tr class="coins-table">
              <td>${coins.market_cap_rank}</td>
              <td><img src='${coins.image}'></td>
              <td>${coins.name}</td>
              <td class='symbol'>${coins.symbol}</td>
              <td>${formatter.format(coins.current_price)}</td>
              <td>${coins.price_change_percentage_24h.toFixed(2)+ '%'}</td>
              <td>${formatter.format(coins.total_volume)}</td>
              <td>${formatter.format(coins.market_cap)}</td>
              <td>${coins.sparkline_in_7d}</td>
            </tr>`;
            coinData += rowHTML}
            
            coinData += `
          </tbody>
        </table>`;
        
        
        
        return coinData;
    }
    console.log(buildTable());
    
    let table = buildTable();
    document.getElementById('coins-table').innerHTML = table; 

    
    
    
    
    
  
};

getData();

