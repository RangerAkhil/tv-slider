import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const PrimeVideoSliderTV = ({
    categories = [
        { title: "Trending Now", items: Array(10).fill(0) },
        { title: "Popular Shows", items: Array(10).fill(0) },
        { title: "Action Movies", items: Array(10).fill(0) },
    ],
    slidesPerView = 5,
    slidesOffsetBefore = 50,
    slidesOffsetAfter = 50,
    onFocusChange = () => {},
    onSlideChange = () => {},
}) => {
    const [focused, setFocused] = useState({ row: 0, col: 0 });
    const swiperRefs = useRef([]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const { row, col } = focused;
            const rowCount = categories.length;
            const colCount = categories[row]?.items.length || 0;
            const swiper = swiperRefs.current[row];

            if (!swiper) return;

            const visibleSlides = Math.floor(swiper.width / swiper.slides[0].offsetWidth);
            const middleIndex = Math.floor(visibleSlides / 2);
            const lastVisibleIndex = swiper.activeIndex + visibleSlides;

            switch (e.key) {
                case "ArrowRight":
                    if (col < colCount - 1) {
                        const newCol = col + 1;
                        setFocused({ row, col: newCol });
                        onFocusChange({ row, col: newCol });

                        if (newCol >= middleIndex && lastVisibleIndex + 1 < colCount) {
                            swiper.slideTo(newCol - middleIndex);
                            onSlideChange(newCol - middleIndex);
                        }
                    }
                    break;

                case "ArrowLeft":
                    if (col > 0) {
                        const newCol = col - 1;
                        setFocused({ row, col: newCol });
                        onFocusChange({ row, col: newCol });

                        if (newCol < swiper.activeIndex + middleIndex) {
                            swiper.slideTo(newCol - middleIndex);
                            onSlideChange(newCol - middleIndex);
                        }
                    }
                    break;

                case "ArrowDown":
                    if (row < rowCount - 1) {
                        setFocused({ row: row + 1, col: 0 });
                        onFocusChange({ row: row + 1, col: 0 });
                    }
                    break;

                case "ArrowUp":
                    if (row > 0) {
                        setFocused({ row: row - 1, col: 0 });
                        onFocusChange({ row: row - 1, col: 0 });
                    }
                    break;

                default:
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [focused, onFocusChange, onSlideChange]);

    return (
        <div className="w-full p-4 bg-black text-white">
            {categories.map((category, rowIndex) => (
                <div key={category.title} className="mb-6">
                    <h2 className="text-xl font-bold mb-2">{category.title}</h2>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={slidesPerView}
                        slidesOffsetBefore={slidesOffsetBefore}
                        slidesOffsetAfter={slidesOffsetAfter}
                        onSwiper={(swiper) => (swiperRefs.current[rowIndex] = swiper)}
                        className="overflow-hidden"
                    >
                        {category.items.map((_, colIndex) => (
                            <SwiperSlide key={colIndex}>
                                <div
                                    tabIndex={0}
                                    className={`h-32 w-48 flex items-center justify-center border-2 transition-all duration-200 ${
                                        focused.row === rowIndex && focused.col === colIndex
                                            ? "border-red-500 scale-110"
                                            : "border-gray-700"
                                    }`}
                                >
                                    Item {colIndex + 1}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ))}
        </div>
    );
};

export default PrimeVideoSliderTV;
