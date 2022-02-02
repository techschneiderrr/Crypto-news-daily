coin = 
{
    fetchListings : function()
    {
        fetch("https://crypto-ranking-data.p.rapidapi.com/market/list/1/100", {
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
            const {name,symbol,totalSupply,cmcRank,ath,atl,logo} = data[i];
            const list = document.createElement("li");
            list.classList.add("list-group-item");
            list.insertAdjacentHTML(`afterbegin`,`<div class="outer-flex">
            <div class="logo">
                <img src="${logo}" width="">
            </div>
            <div class="inner-flex">
                <div class="cols-flex">
                    <p><b>Name :</b> ${name}</p>
                    <p><b>Symbol :</b> ${symbol}</p>
                </div>
                <div class="cols-flex extra">
                    <p><b>Total Supply :</b> ${parseFloat(totalSupply).toFixed(3)} $</p>
                    <p><b>Rank :</b> ${cmcRank}</p>
                </div>
                <div class="cols-flex">
                    <p><b>All time high :</b> ${parseFloat(ath.toFixed(3))} $</p>
                    <p><b>All time low :</b> ${parseFloat(atl.toFixed(3))} $</p>
                </div>
            </div>
        </div>`);
            document.querySelector(".list-group").appendChild(list);
        }
    }

}
coin.fetchListings();