coin = 
{
    fetchListings : function()
    {
        fetch("https://crypto-ranking-data.p.rapidapi.com/market/list/1/2", {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-host": "crypto-ranking-data.p.rapidapi.com",
		"x-rapidapi-key": "30b15af647mshf7cbfaa918eb175p18d913jsn4189a1fab911"
	    }
        })
        .then(response => response.json())
        .then(data => this.displayListings(data))
        .catch(err => {
	    console.error(err);
        })
    },
    displayListings : function(data){
        for(let i=0;i<data.length;i++){
            var ul = document.querySelector(".list-group");
            ul.innerHTML('');
            const {name,symbol,totalSupply,maxSupply,ath,atl,logo} = data[i];
            
        }
    }

}

coin.fetchListings();