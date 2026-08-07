const totalCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategories.length}`);
totalCategories.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const countCategory = item.querySelectorAll('ul li').length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${countCategory}`);
})