import "../styles/Main.scss"
import Playlist from "./Playlist"
const Main = () =>{
    return(
        <div className="Main-container">
            <Playlist Playlistname={'Spotify Playlists'} description={'Description Description Description Description'}/>
            <Playlist Playlistname={'Spotify Playlists'} description={'Description Description Description Description'}/>
            <Playlist Playlistname={'Spotify Playlists'} description={'Description Description Description Description'}/>
        </div>
    )
}

export default Main