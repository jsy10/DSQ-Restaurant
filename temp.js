var myHeaders = new Headers();
myHeaders.append("apikey", "zDyUy0wGWn163GrCx856NgUx1r7GpVFd");
let file =  "https://api.apilayer.com/fixer/convert?to=gbp&from=eur&amount=54.9"

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

// let koura = fetch("https://api.apilayer.com/fixer/convert?to=gbp&from=eur&amount=50", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


async function getText(file) {
    try {
        console.log("koures")
        let x = await fetch(file, requestOptions)
        let y = await x.text();

        let w = y.slice(y.search("result") + 'result" '.length + 1, y.length - 3)
        
    } catch(error) {
        console.log('error', error);
    }
}

getText(file);
