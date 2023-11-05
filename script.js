// кнопка About
// По клику на about, у вас внизу появляется контейнер с заголовком 
const btnAbout = document.querySelector('.btnAbout')
const posts = document.querySelector('.posts')

btnAbout.addEventListener('click',function(){
    if(posts.style.display === 'block') {
        posts.style.display = 'none';
    } else {
        posts.style.display = 'block'
    }    
})

// извлечение постов JSONPlaceHolder
// По клику fetch подтягиваем данные из jsonplaceholder.typicode.com/posts ( тащим все посты)

async function fetchPosts() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const postsData = await response.json()
        console.log(postsData);
        // на всякий, для дальнейшего использования
        // return await response.json() 
    } catch (e) {
        console.log(e.message, "Запрос на posts - не выполнен");
    }
}
fetchPosts()