import "./ListItem.scss";
import {
    PlayArrow,
    Add,
    ThumbUpAltOutlined,
    ThumbDownOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListItem({ index, item }) {

    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/" + item, {
                    headers: {
                        token:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDgxNzQ5ZTZkNWZiZmQyMTdkYmU1MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTMxNjY3MCwiZXhwIjoxNjc1NzQ4NjcwfQ.bjZ0TNFK_ItFOm8KlVbVCGNz8vyPAm5Cx3GD-faIaXQ",
                    },
                });
                // console.log(res.data);
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMovie();
    }, [item]);

    const redirectToWatch = () => {
        navigate("/watch", {
            state: {
                movie
            },
        });
    };

    return (
        // <Link to={{ pathname: '/watch', state: { name: 'ho' } }}>

        <div
            className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={redirectToWatch}
        >
            <img
                src={movie.img}
                alt=""
            />
            {isHovered && (
                <>
                    <video src={movie.trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>{movie.duration}</span>
                            <span className="limit">+{movie.limit}</span>
                            <span>{movie.year}</span>
                        </div>
                        <div className="desc">
                            {movie.desc}
                        </div>
                        <div className="genre">{movie.genre}</div>
                    </div>
                </>
            )}
        </div>
        // </Link>
    );
}