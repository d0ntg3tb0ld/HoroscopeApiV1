//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
// document.querySelector('h2').innerText = localStorage.getItem('book')

function getFetch() {
  const choice = document.getElementById('lopp').value
  // const day = document.getElementById('glee').value
  console.log(choice)
  const url = `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${choice}&day=today`
  const options = {
    method: 'POST',
    headers: {
      'X-RapidAPI-Key': '4d1db1982bmsh988a5095b96729cp1e8d69jsn3404215009d3',
      'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
    }
  };

  fetch(url,options)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      // if (!localStorage.getItem('book')) {
      //   localStorage.setItem('book', data.title)
      // } else {
      //   let book = localStorage.getItem('book') + " ; " + data.title
      //   localStorage.setItem('book', book)
      // }
      document.getElementById('glee').innerText  += data.color
      document.getElementById('gleeb').innerText += data.compatibility
      document.getElementById('gleec').innerText += data.current_date
      document.getElementById('gleed').innerText += data.date_range
      document.getElementById('gleee').innerText += data.description
      document.getElementById('gleef').innerText += data.lucky_number
      document.getElementById('gleeg').innerText += data.lucky_time
      document.getElementById('gleeh').innerText += data.mood
      //put title into local storage
      // let books = localStorage.getItem('books') + " ; " + data.title
      // localStorage.setItem('books',books)
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}