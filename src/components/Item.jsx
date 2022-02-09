import "../styles/PlayList&Item.scss"
import dummy from "../assets/cover.jpeg"
import play from "../assets/play.png"
const Item = ({item}) =>{
    console.log(item)
    return(
        <div className="Playlist-item-container-item">
            <img src={item.img}  className="Playlist-item-container-item-img"/>
            <div className="Playlist-item-container-item-text">
                <span className="Playlist-item-container-item-text-top">{item.name}</span>
                <span className="Playlist-item-container-item-text-bottom">{item.description}</span>
            </div>
            <div className="animation">
                <img src={play} height='10px' width='10px' />
            </div>
        </div>
    )
}
export default Item