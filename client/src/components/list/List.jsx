import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import ListItem from "../listItem/ListItem";
import "./List.scss";

export default function List({ list }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMoved, setIsMoved] = useState(false);

    const handlePrevClick = () => {
        setIsMoved(true)
        if (currentIndex <= 0) return;
        setCurrentIndex(currentIndex - 1);
    };

    const handleNextClick = () => {
        setIsMoved(true)
        if (currentIndex >= 5) return;
        setCurrentIndex(currentIndex + 1);
    };

    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={() => handlePrevClick()}
                    style={{ display: !isMoved && "none" }}
                />
                <div className="container" style={{ transform: `translateX(-${currentIndex * 225}px)` }}>
                    {/* {Array(10).fill(null).map((_, i) => (
                        <ListItem index={i} key={i} currentIndex={currentIndex} />
                    ))} */}
                    {list.content.map((item, i) => (
                        <ListItem index={i} key={i} item={item} />
                    ))}
                </div>
                <ArrowForwardIosOutlined
                    className="sliderArrow right"
                    onClick={() => handleNextClick()}
                />
            </div>
        </div>
    );
}