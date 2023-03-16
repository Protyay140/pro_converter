const func = (have, want, amount) => {


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7ce9508df2msha6f774af068aee1p1edca4jsnca97108553b9',
      'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
    }
  };

  fetch('https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=' + have + '&want=' + want + '&amount='+ amount, options)
    .then(response => response.json())
    .then((response) => {
      console.log(response)
      
      product.innerHTML = `<button style = "border=radius:100px," ><strong>${response.old_amount} ${response.old_currency} = ${response.new_amount} ${response.new_currency} </strong> </button>`
      
    })
    .catch(err => console.error(err));
}


submit.addEventListener('click', (e) => {
  e.preventDefault();
  func(have.value,want.value,amount.value);
});