var provider;function metamaskBSCsettings(){if(!provider)return console.error("Can't setup the BSC network on metamask because window.ethereum is undefined"),!1;try{return provider.request({method:"wallet_addEthereumChain",params:[{chainId:"0x38",chainName:"Binance Smart Chain",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed1.binance.org/"],blockExplorerUrls:["https://bscscan.com/"]},]}),!0}catch(a){return console.error(a),!1}}ethereum.on("chainChanged",()=>{document.location.reload()}),window.addEventListener("load",function(){if("undefined"!=typeof web3){provider=web3.currentProvider;let a=window.ethereum.chainId;56==a&&(console.log(a),document.getElementsByClassName("buttons")[0].style.visibility="hidden")}})
