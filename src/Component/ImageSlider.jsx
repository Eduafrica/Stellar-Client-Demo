import Slider from "./Helpers/Slider"

function ImageSlider({ imageArray }) {
  return (
    <div className="w-[80%] h-[80vh] border-[2px] border-white rounded-[10px] overflow-hidden relative">
        <Slider imageArray={imageArray} />
    </div>
  )
}

export default ImageSlider
