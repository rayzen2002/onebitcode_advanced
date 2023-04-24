function renderArticle(articleData){
    const article = document.createElement('article')
    article.id = `article-${articleData.id}`
    
    const title = document.createElement('h3')
    title.textContent = articleData.title

    const content = document.createElement('div')
    content.innerHTML = articleData.content

    const author = document.createElement('div')
    author.textContent = articleData.author

    article.append(title,author,content)
    document.querySelector('#articles').append(article)
}

async function fetchArticles(){
const artciles = await fetch('http://localhost:3000/articles').then(res => res.json())
artciles.forEach(renderArticle)

}

document.addEventListener('DOMContentLoaded', ()=>{
    fetchArticles()
})

const form = document.querySelector('form')
form.addEventListener('submit' , async (ev)=>{
    ev.preventDefault()
    const articleData = {
        title: document.querySelector('#title').value,
        author: document.querySelector('#author').value,
        content: document.querySelector('#content').value
    }
    const response = await fetch('http://localhost:3000/articles',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',

        },
        body: JSON.stringify(articleData)

    })

    const savedArticle = await response.json()
    form.reset()
    renderArticle(savedArticle)
})