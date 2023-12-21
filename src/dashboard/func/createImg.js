const create_img_on_Event_page = (src,parent)=>{
    const div = document.createElement('div');
    div.classList = `relative p-4 border-b-[2px] border-blue-600`;
    const img  = document.createElement('img');
    img.alt = 'img'
    img.src = src;
    div.appendChild(img);
    parent.appendChild(div);
}
export {create_img_on_Event_page};