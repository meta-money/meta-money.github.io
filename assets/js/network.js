// Less is more

var provider;

function metamaskBSCsettings() {
        if (provider) {
            try {
                provider.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: `0x38`,
                        chainName: 'Binance Smart Chain',
                        nativeCurrency: {
                            name: 'BNB',
                            symbol: 'BNB',
                            decimals: 18,
                        },
                        rpcUrls: ['https://bsc-dataseed1.binance.org/'],
                        blockExplorerUrls: ['https://bscscan.com/'],
                    }, ],
                })
                return true
                location.reload();
            } catch (error) {
                console.error(error)
                return false
            }
        } else {
            console.error("Can't setup the BSC network on metamask because window.ethereum is undefined")
            return false
        }

        }

//reload page on network change
ethereum.on('chainChanged', () => {
  document.location.reload()
})

window.addEventListener('load', function() {
    // Checking if Web3 has been injected by the browser
    if (typeof web3 !== 'undefined') {
        // Use the browser's ethereum provider
        provider = web3.currentProvider

        //const provider2 = window['ethereum']
        const chainid = window.ethereum.chainId
        //console.log(chainid)
        if (chainid == 0x38)
        {
          console.log(chainid)
                
                document.getElementsByClassName('buttons')[0].style.visibility='hidden';
          //var x = document.getElementById("metamaskBSCsettings");
          //if (x.style.display === "none") {
          //  x.style.display = "block";
         // } else {
         //   x.style.display = "none";
         // }
        }
        else {
          // var x = document.getElementById("metamaskBSCsettings");
        //  if (x.style.display === "block") {
         //   x.style.display = "none";
            
         // } else {
         //   x.style.display = "block";
         // }
        }

    }
})