
const form = document.getElementById('form');
const searchResult = document.getElementById('search_result')
const searchType = document.getElementById('searchType')
const searchTerm = document.getElementById('searchTerm')
const searchValue = document.getElementById('searchValue')

const load = async(url) => {
  const response = await fetch(url) 
  return response.json();
}

const append = (tickets) => {
  tickets.forEach(function(ticket){
    const ticketsHTML = document.createElement("div")
    ticketsHTML.innerHTML = ticket['assignee_id']
    document.body.appendChild(ticketsHTML)
  })
}

const search = function(data, searchTerm, searchValue){
  return data.filter(entity => {
    if(entity instanceof Array){
      return search(entity, searchTerm, searchValue)
    }
   return entity[searchTerm] === searchValue
  })
}
// nested arrays

form.addEventListener('submit', async function(e) {
  e.preventDefault();
  const tickets = await load('./tickets.json')
  console.log(tickets)
  // const tickets = await load('./tickets.json')
  const result = search(tickets, 'tags', 'New York')
  console.log(result)
});