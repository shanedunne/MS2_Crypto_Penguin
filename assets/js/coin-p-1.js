// Page Selection
let page = 1;

function nextPage() {
    if (page >= 1) {
      page++;
      changePage(page);
      getData();
    }
};

function prevPage() {
    if (page > 1) {
      page--;
      changePage(page)
      getData();
    }
};

function changePage(page) {
  var prevPageSelector = document.getElementById('prevPageSelector');
  var nextPageSelector = document.getElementById('nextPageSelector');


  if (page == 1) {
    prevPageSelector.style.visibility = "hidden";
  } else {
    prevPageSelector.style.visibility = "visible";
  }

  if (page >= 10) {
    nextPageSelector.style.visibility = "hidden";
  } else {
    nextPageSelector.style.visibility = "visible";
  }
}


// Currency Formatter - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


// Global Cryptocurrency Data
async function getGlobalData(){
    const response = await fetch('https://api.coingecko.com/api/v3/global');
    const globalData = await response.json();


    var totalMarketCap = globalData.data.total_market_cap.usd
    var totalVolume = globalData.data.total_volume.usd;
    var totalCoins = globalData.data.active_cryptocurrencies;
    var ethDominance = globalData.data.market_cap_percentage.eth
    var btcDominance = globalData.data.market_cap_percentage.btc


    
    console.log(globalData);

    document.getElementById('totalMarketCap').innerText = formatter.format(totalMarketCap);
    document.getElementById('totalVolume').innerText = formatter.format(totalVolume);
    document.getElementById('totalCoins').innerText = totalCoins;
    document.getElementById('btcDominance').innerText = btcDominance.toFixed(2);
    document.getElementById('ethDominance').innerText = ethDominance.toFixed(2);


};
getGlobalData();




//CoinGecko API for coin data

async function getData(){
    const coinURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=true&price_change_percentage=24h`;
    const response = await fetch(coinURL);
    const data = await response.json();


    for (let i = 0; i < data.length; i++) { 
        let coinRank = data[i].market_cap_rank;
        let coinImage = data[i].image;
        let coinName = data[i].name;
        let coinSymbol = data[i].symbol;
        let coinPrice = data[i].current_price;
        let coinPercentChange = data[i].price_change_percentage_24h;
        let coinVolume = data[i].total_volume;
        let coinMarketCap = data[i].market_cap;
    };

    
    function buildTable() {
        let coinData = `
        <table id='myTable'>
          <thead>
            <tr>
              <th class='rank-head' onClick="sortTableByRank()">Rank</th>
              <th class='image-head'></th>
              <th class='name-head'>Name</th>
              <th class='symbol-head'>Symbol</th>
              <th class='price-head'>Price</th>
              <th class='percent-head' onclick="sortTableByPercent()">24h Change</th>
              <th class='volume-head'>24h Volume</th>
              <th class='market-cap-head'>Market Cap</th>
            </tr>
          </thead>
          <tbody>
    `;
    
        for (let coins of data) {
            let rowHTML = `
            <tr class="coins-table">
              <td>${coins.market_cap_rank}</td>
              <td><img src='${coins.image}' alt='token image'></td>
              <td class='coin-name'>${coins.name}</td>
              <td class='symbol'>${coins.symbol}</td>
              <td>${formatter.format(coins.current_price)}</td>
              <td class='coin-percent'>${coins.price_change_percentage_24h.toFixed(2) + '%'}</td>
              <td class='coin-volume'>${formatter.format(coins.total_volume).replace('.00', "")}</td>
              <td class='coin-market-cap'>${formatter.format(coins.market_cap).replace('.00', "")}</td>
            </tr>`;
            coinData += rowHTML}
            
            coinData += `
          </tbody>
        </table>`;
        
        
        
        return coinData;
    }
    
    let table = buildTable();
    document.getElementById('coins-table').innerHTML = table; 


    function showModal() {
        document.getElementById("modal-title").innerHTML = $(this).html();
        document.getElementById("modal-symbol").innerHTML = $(this).next().html();
        document.getElementById("modal-price").innerHTML = $(this).next().next().html();
        document.getElementById("modal-percent-change").innerHTML = $(this).next().next().next().html();
        document.getElementById("modal-volume").innerHTML = $(this).next().next().next().next().html();
        document.getElementById("modal-market-cap").innerHTML = $(this).next().next().next().next().next().html();
        document.getElementById("modal-image").src = $(this).prev().children().attr('src');

        $("#myModal").modal('show')
    }

    // change colour of 24h % change column based on positive or negative number
    function changePercentColor(value, element) {
        if (value >= 0) {
            element.style.color = '#00CC00';
        }else {
            if(value < 0) {
                element.style.color = '#FF8F8F'
            }
        }
    }
    
    let percentColor = document.getElementsByClassName('coin-percent');
    let coinNameModal = document.getElementsByClassName('coin-name');
    for (i = 0; i < coinNameModal.length; i++) {
        coinNameModal[i].addEventListener('click', showModal);
        changePercentColor(data[i].price_change_percentage_24h, percentColor[i])
        
    }


};

getData();

// Search function - https://www.w3schools.com/howto/howto_js_filter_table.asp 
function searchFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-bar");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

// Sort by rank
function sortTableByRank(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchingcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = 'desc';
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];
      if (dir == 'desc') {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == 'asc') {
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchingcount++;
    }else {
      if (switchingcount == 0 && dir == 'desc') {
        dir = 'asc';
        switching = true;
      }
    }
  }
}


// Sort by 24h percent change
function sortTableByPercent(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchingcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = 'desc';
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[5];
      y = rows[i + 1].getElementsByTagName("td")[5];
      if (dir == 'desc') {
        if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == 'asc') {
        if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchingcount++;
    }else {
      if (switchingcount == 0 && dir == 'desc') {
        dir = 'asc';
        switching = true;
      }
    }
  }
}




