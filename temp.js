var myHeaders = new Headers();
myHeaders.append("apikey", "unz9cn1ujfUzbBCEiF4jBpThuwuR2pv7");
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

        let w = Number(y.slice(y.search("result") + 'result" '.length + 1, y.length - 3))
        console.log(`:${w+1}:`)
    } catch(error) {
        console.log('error', error);
    }
}

getText(file);
