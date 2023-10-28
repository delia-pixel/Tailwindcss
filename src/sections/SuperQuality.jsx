import Button from "../components/Button"
import { shoe8 } from "../assets/images"


const SuperQuality = () => {
  return (
     <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">We Provide You <span className="text-coral-red">Super </span></span>
          
          <br />
          <span className="text-coral-red inline-block mt-3">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
          
<p className="mt-6 lg:max-w-lg info-text"> Our dedication to detail and excellence ensures your satisfaction </p>
        <div className="mt-11">
        <Button label="View details"></Button>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
    <img src={shoe8} alt="shoe" className="object-contain"  width={570} height={522}/>
      </div>
    </section>
  )
}

export default SuperQuality
