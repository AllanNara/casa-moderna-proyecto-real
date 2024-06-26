import data from "./utils/whyChooseInfo.js"

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col my-12">
      <p className="text-center text-gray-500 text-xl">¿Por qué elegirnos?</p>
      <h2 className="text-center text-5xl lg:text-[3.55rem] font-bold text-gray-600 mt-4 mb-12 lg:w-[53rem] leading-[4.4rem] mx-auto">Construyendo sueños, superando expectativas</h2>
      <div className="grid grid-cols-2 xl:flex xl:flex-row lg:justify-evenly">
        {data.map((doc, i) => {
          return (
            <div key={i} className="my-4 mx-4">
              
              <img src={`images/sobre-nosotros/${doc.imagen}`} alt={doc.title} className="m-auto xl:mb-8 h-32 lg:h-24"/>

              
              <h5 className="text-gray-600 text-center font-semibold lg:text-[1.75rem] leading-8">{doc.title}</h5>
              <p className="text-gray-700 lg:text-[1.25rem] leading-[1.5rem] text-center xl:mt-4 xl:w-64">{doc.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default WhyChooseUs

