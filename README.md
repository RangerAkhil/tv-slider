# PrimeVideoSliderTV

A fully customizable, TV remote-friendly Swiper slider component for React applications. Ideal for video streaming platforms like Prime Video, allowing smooth navigation using arrow keys.

## Features
✅ **Customizable categories** with dynamic items  
✅ **Smooth keyboard navigation** for TV remote support  
✅ **Adjustable slide settings** (visible slides, spacing)  
✅ **Callbacks for focus & slide changes**  
✅ **Built-in Swiper.js integration**  

---

## Installation

```sh
npm install swiper
```

---

## Usage

### Basic Example
```jsx
import PrimeVideoSliderTV from "./PrimeVideoSliderTV";

const App = () => {
    return <PrimeVideoSliderTV />;
};

export default App;
```

### Custom Categories & Props
```jsx
const categories = [
    { title: "New Releases", items: Array(8).fill(0) },
    { title: "Sci-Fi Movies", items: Array(12).fill(0) },
];

<PrimeVideoSliderTV
    categories={categories}
    slidesPerView={6}
    slidesOffsetBefore={40}
    slidesOffsetAfter={40}
    onFocusChange={(focus) => console.log("Focus changed to:", focus)}
    onSlideChange={(index) => console.log("Slide moved to:", index)}
/>
```

---

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `categories` | Array | Predefined categories | List of categories with items |
| `slidesPerView` | Number | `5` | Number of visible slides |
| `slidesOffsetBefore` | Number | `50` | Spacing before slides |
| `slidesOffsetAfter` | Number | `50` | Spacing after slides |
| `onFocusChange` | Function | `() => {}` | Callback when focus changes |
| `onSlideChange` | Function | `() => {}` | Callback when slide position changes |

---

## Keyboard Controls
- **Arrow Right (→):** Move focus to next slide
- **Arrow Left (←):** Move focus to previous slide
- **Arrow Down (↓):** Move focus to the next category
- **Arrow Up (↑):** Move focus to the previous category

---

## Dependencies
- [Swiper.js](https://swiperjs.com/)

---

## License
MIT License. Feel free to modify and use this component in your projects.

---

## Author
Developed by [Akhil](https://github.com/RangerAkhil) 🚀

