import '../styles/PlayList&Item.scss'

const Playlist = ({Playlistname,description}) =>{
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
                <div className='Playlist-item-container-item'>
                    1
                </div>
                <div className='Playlist-item-container-item'>
                    2
                </div>
                <div className='Playlist-item-container-item'>
                    3
                </div>
                <div className='Playlist-item-container-item'>
                    4
                </div>
                <div className='Playlist-item-container-item'>
                    5
                </div>
            </div>
        </div>
    )
}
export default Playlist