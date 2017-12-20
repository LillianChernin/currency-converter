const returnConvertedCurrency = (event) => {
  let id = event.target.getAttribute("id");
  let dollars = $('#USD').val();
  $.get("https://api.fixer.io/latest?base=USD", (response) => {
    let newCurrency = Math.round(response.rates[id] * dollars * 100) / 100;
    if (newCurrency >= 0 || newCurrency <= 0) {
      $('#output_amount').text(newCurrency);
      $('#output_currency').text(id);
      $('#USD').val('');
    } else {
      alert('Please only enter numbers into form.');
    }
  })
}

$('#EUR').click((event) => {
  returnConvertedCurrency(event);
})

$('#GBP').click((event) => {
  returnConvertedCurrency(event);
})

$('#CNY').click((event) => {
  returnConvertedCurrency(event);
})

$('#JPY').click((event) => {
  returnConvertedCurrency(event);
})
