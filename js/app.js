document.querySelector('#mb-menu-toggle').addEventListener('click',()=>
{
    console.log('oke')
    document.querySelector('#header-wrapper').classList.add('active')
})
document.querySelector('#mb-menu-close').addEventListener('click',()=>
{
    console.log('oke')

    document.querySelector('#header-wrapper').classList.remove('active')
})