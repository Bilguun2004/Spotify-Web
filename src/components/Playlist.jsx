import '../styles/PlayList&Item.scss'
import Item from './Item'
const obj = [
    {
      name: "Playlist",
      desctiption: "desc desc desc desc desc desc",
      img: "https://i.pinimg.com/564x/38/8f/c2/388fc206b6a47d1624f94c077d18f1a5.jpg",
    }
    ,
    {
      name: "Playlistasdasd",
      desctiption: "desc desc desc desc desc desc",
      img: "https://i.pinimg.com/564x/38/8f/c2/388fc206b6a47d1624f94c077d18f1a5.jpg",
    }
    ,
    {
      name: "Playlisasdt",
      desctiption: "desc asdasfddesc desc desc desc desc",
      img: "https://i.pinimg.com/564x/38/8f/c2/388fc206b6a47d1624f94c077d18f1a5.jpg",
    }
    ,
    {
      name: "Playlffdgdfist",
      desctiption: "desc desc dsdfsdesc desc desc desc",
      img: "https://i.pinimg.com/564x/38/8f/c2/388fc206b6a47d1624f94c077d18f1a5.jpg",
    }
    ,
    {
      name: "Playlijghjghjesc desc ddfgdfgesc desc desc desc",
      img: "https://i.pinimg.com/564x/38/8f/c2/388fc206b6a47d1624f94c077d18f1a5.jpg",
    }
    ,
    {
      name: "Plaghjghjlist",
      desctiption: "desc desc desghjghjc desc desc desc",
      img: "https://i.pinimg.com/564x/38/8f/c2/388fc206b6a47d1624f94c077d18f1a5.jpg",
    }
    ,
    {
      name: "Playsdfsdfst",
      desctiption: "desc ddfgdfgesc desc desc desc desc",
      img: "https://i.pinimg.com/564x/38/8f/c2/388fc206b6a47d1624f94c077d18f1a5.jpg",
    }
    ,
    {
      name: "Playlfghfghst",
      desctiption: "desc dessdhfgh desc desc desc desc",
      img: "https://i.pinimg.com/564x/38/8f/c2/388fc206b6a47d1624f94c077d18f1a5.jpg",
    }
    ,
    {
      name: "Playlidfgertsc descdfgdfgdesc desc desc desc",
      img: "https://i.pinimg.com/564x/38/8f/c2/388fc206b6a47d1624f94c077d18f1a5.jpg",
    }
    ,
    {
      name: "Playl5345ist",
      desctiption: "desc desc desdfg desc desc desc",
      img: "https://i.pinimg.com/564x/38/8f/c2/388fc206b6a47d1624f94c077d18f1a5.jpg",
    }
    ,
    {
      name: "Playlist",
      desctiption: "desc desc desc desc desc desc",
      img: "https://i.pinimg.com/564x/38/8f/c2/388fc206b6a47d1624f94c077d18f1a5.jpg",
    }
    ,
    {
      name: "Playlist",
      desctiption: "desc desc desc desc desc desc",
      img: "https://i.pinimg.com/564x/38/8f/c2/388fc206b6a47d1624f94c077d18f1a5.jpg",
    }
    ,
  
    
  ];
const Playlist = ({Playlistname,description,data}) =>{
    return(
        <div className="Playlist-container">
            <div className='Playlist-top'>
                <div className='Playlist-top-big-cont'>
                   <span className='Playlist-top-big'>{Playlistname}</span>
                   <span className='Playlist-top-big-bottom'>{description}</span>
                </div>
                
                <span className='Playlist-top-small'>SEE ALL</span>
            </div>
            <div className='Playlist-item-container'>
                {
                    data ? data.map(e=>{
                       return  <Item item={e} />
                    }) : ''
                    
                }
            </div>
        </div>
    )
}
export default Playlist