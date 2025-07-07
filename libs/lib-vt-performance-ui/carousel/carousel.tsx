import Carousel from "react-spring-3d-carousel";
import {useState, useEffect} from "react";
import {config} from "react-spring";

type Card = {
    key: number,
    content: JSX.Element
}

type PropsType = { cards: Card[]; offset: number; showArrows: boolean; width?: string; height?: string; margin?: string; }

export default function CarouselSlider(props: PropsType) {
    const table = props.cards.map((element, index) => {
        return {...element, onClick: () => setGoToSlide(index)};
    });

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(false);
    const [goToSlide, setGoToSlide] = useState(0);
    const [cards] = useState(table);

    useEffect(() => {
        setOffsetRadius(props.offset);
        setShowArrows(props.showArrows);
    }, [props.offset, props.showArrows]);

    return (
        <div
            style={{width: props.width, height: props.height, margin: props.margin}}
            className="mb-[15px] mt-[-30px] sm:mb-0 sm:mt-0 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]"
        >
            <Carousel
                slides={cards}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrows}
                animationConfig={config.gentle}
            />
        </div>
    );
}