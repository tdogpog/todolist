export function headerUpdate(){
    const headerSpan=document.querySelector('.taskContainerHeader span');

    const sidebarItems=document.querySelectorAll('.sidebarItem');

    sidebarItems.forEach(item =>{
        item.addEventListener('click',function(){

            const sidebarText=this.textContent.trim();

            headerSpan.textContent=sidebarText;
        });
    });

}