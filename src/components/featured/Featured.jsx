import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantacy">Fatacy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
        
                </select>
            </div>
        )}
        <img 
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHaVJMIHAwZZA/profile-displayphoto-shrink_800_800/0/1543646689752?e=1668643200&v=beta&t=YAkAhq4oZU4-DW4ERzIdNrcs3yWnRLEE3ix7LbytPyA" 
            alt="" 
        />
        <div className="info">
            <img 
                src="https://i.ytimg.com/vi/19THOH_dvxg/movieposter_en.jpg" 
                alt="" 
            />
            <span className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nostrum quibusdam a ducimus optio aliquam minima similique, ea reprehenderit odio sequi asperiores corporis praesentium iusto illo, vero iure consectetur consequatur?
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
