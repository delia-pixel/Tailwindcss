import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"><span className="text-coral-red">Special </span> Offer</span>
          
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
          
<p className="mt-6 lg:max-w-lg info-text"> Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional. </p>
        <div className="mt-11 flex gap-4 flex-wrap">
          <Button label="Shop now" iconUrl={arrowRight}></Button>
        <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"></Button>
          
        </div>
      </div>
   </section>
  )
}

export default SpecialOffer
