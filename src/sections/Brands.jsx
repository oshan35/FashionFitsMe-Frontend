import { LevisLogo,LacosteLogo ,adidasLogo,
    burberryLogo,
    chanelLogo,
    DolceLogo,
    Odel,
    GucciLogo,
    NikeLogo,
    LouisLogo,
    Versace,
    Aldo,
    Kelly,
    UnderArmourLogo} from "../assets/images";
    import { useNavigate } from "react-router-dom";

  const Brands = () => {

    const categories = [
        {name1: 'Levis', topic1: 'Brand', imageSrc: LevisLogo,},
        { name1: 'Lacoste', topic1: 'Brand',  imageSrc: LacosteLogo,},
        {  name1: 'Aldo', topic1: 'Brand', imageSrc:Aldo ,  },
        {  name1: 'Chanel', topic1: 'Brand',  imageSrc: chanelLogo,  },
        { name1: 'Kelly-Felder', topic1: 'Brand',  imageSrc: Kelly,},
        { name1: 'Odel', topic1: 'Brand', imageSrc: Odel},
        {  name1: 'Gucci', topic1: 'Brand',  imageSrc: GucciLogo},
        {  name1: 'Nike', topic1: 'Brand',  imageSrc: NikeLogo},
        {  name1: 'Louis', topic1: 'Brand',  imageSrc: LouisLogo},
        {  name1: 'Adidas', topic1: 'Brand',  imageSrc: adidasLogo},




      ]

      const handleButtonClick = (label1,label2, topic1,topic2) => {
        console.log('clicked button on navbar');
        navigate("/catogeries", { state: { label1,label2, topic1,topic2 } }); 
      };
      const navigate = useNavigate();

    return (
    
  <section aria-labelledby="category-heading" className="pt-4sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8">
  <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
    <h2 id="category-heading" className="text-3xl font-extrabold tracking-tight text-gray-900">
      Shop by Brand
    </h2>
    <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
      Browse all brands<span aria-hidden="true"> &rarr;</span>
    </a>
  </div>

  <div className=" flow-root">
    <div className=" space-x-10">
      <div className="box-content  relative h-150 overflow-x-auto xl:overflow-visible ">
        <div className="absolute min-w-screen-xl mt-10 py-10 px-8 flex space-x-8 sm:px-6 lg:px-8  xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
          {categories.map((category) => (
            <a
              key={category.name1}
              href={category.href}
              className="relative w-96 h-40 rounded-lg p-6  flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
              onClick={() => handleButtonClick(category.name1,category.name1, category.topic1,category.topic1)}

            >
              <span aria-hidden="true" className="absolute inset-0 ">
              <img
                src={category.imageSrc}
                alt=""
                className="w-full h-full object-center object-cover p-2"
              />
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
              />
              {/* <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span> */}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>

  <div className="mt-6 px-4 sm:hidden">
    <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
      Browse all categories<span aria-hidden="true"> &rarr;</span>
    </a>
  </div>
</section>);
};

export default Brands;
