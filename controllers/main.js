import full from './full.js';
let mangload=[];
let content=document.querySelector(".tab-content");
let load=(i)=>{
    mangload=[];
    content.innerHTML='';
    switch(i)
    {
        case 1:{
            mangload=full.filter((item)=>{
                  return  item.type=='topclothes'
            })
            mangload.forEach((item,i)=>{
                content.innerHTML+=`<div>
                <img src="${item.imgSrc_png}">
                </div>`
            })
            break;
           
        }
        case 2:{
            mangload=full.filter((item)=>{
                  return  item.type=='botclothes'
            })
            mangload.forEach((item,i)=>{
                content.innerHTML+=`<div>
                <img src="${item.imgSrc_png}">
                </div>`
            })
            break;
        }
        case 3:{
            mangload=full.filter((item)=>{
                  return  item.type=='shoes'
            })
            mangload.forEach((item,i)=>{
                content.innerHTML+=`<div>
                <img src="${item.imgSrc_png}">
                </div>`
            })
            break;
        }
        case 4:{
            mangload=full.filter((item)=>{
                  return  item.type=='handbags'
            })
            mangload.forEach((item,i)=>{
                content.innerHTML+=`<div>
                <img src="${item.imgSrc_png}">
                </div>`
            })
            break;
        }
        case 5:{
            mangload=full.filter((item)=>{
                  return  item.type=='necklaces'
            })
            mangload.forEach((item,i)=>{
                content.innerHTML+=`<div>
                <img src="${item.imgSrc_png}">
                </div>`
            })
            break;
        }
        case 6:{
            mangload=full.filter((item)=>{
                return  item.type=='hairstyle'
          })
          mangload.forEach((item,i)=>{
              content.innerHTML+=`<div>
              <img src="${item.imgSrc_png}">
              </div>`
          })
          break;
        }
        case 7:{
            mangload=full.filter((item)=>{
                return  item.type=='background'
          })
          mangload.forEach((item,i)=>{
              content.innerHTML+=`<div class="backLoad">
              <img src="${item.imgSrc_png}">
              </div>`
          })
          break;
        }

    }
}
window.load=load;