// first we shall create elements 
let names=['Ali', 'Gamal', 'Mohsen','Ahmed'];
let ages=['10 years old', '10 years old','10 years old','10 years old'];

let container= document.createElement('div');
document.body.appendChild(container);
function element(names,ages){
    
    // element
    let card =document.createElement('div');
    let title =document.createElement('h2');
    let age =document.createElement('p');
    let img =document.createElement('img');

    // content
    let head =document.createTextNode(names);
    let ageContent= document.createTextNode(ages);
    img.src ='img/Every-Kid-Healthy.jpg';

    // style
    container.style.textAlign="center";
    card.style.color="#fff";
    card.style.background="#444";
    card.style.padding="10px";
    card.style.margin="2px";
    card.style.display="inline-block";
    card.style.width="200px";
    img.style.width="100%";

    // appendchild
    title.appendChild(head);
    age.appendChild(ageContent);
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    container.appendChild(card);
}
for(let i= 0; i< 4; i++)
{
    element(names[i], ages[i]);
}

