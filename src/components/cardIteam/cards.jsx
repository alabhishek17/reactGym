function Cards({img,name,body,target,equip}){
    return(
        <div>
            <div>
<img src={img} alt="" />
<h1>{name}</h1>
<p>{body}</p>
<p>{target}</p>
<p>{equip}</p>
            </div>
        </div>
    )
}
export default Cards;