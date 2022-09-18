import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined/>
        Home
      </div>
      <video className="video" 
      autoPlay 
      progress
      controls
      src="https://media.istockphoto.com/videos/slow-motion-of-african-american-man-enjoying-film-in-cinema-laughing-video-id1175703938"
      />
    </div>
  )
}
