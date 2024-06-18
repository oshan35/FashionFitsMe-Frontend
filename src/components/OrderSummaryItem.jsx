import { tommyFigure } from "../assets/images";


const OrderSummarItem = ({itemName,itemPrice,color,size,quantity }) => {

    const totalPrice=itemPrice*quantity;
  return (

<div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
    <div className="pb-4 md:pb-8 w-full md:w-40">
        <img className="w-full hidden md:block" src={tommyFigure} alt="dress" />
        <img className="w-full md:hidden" src={tommyFigure} alt="dress" />
    </div>
    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
        <div className="w-full flex flex-col justify-start items-start space-y-8">
            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{itemName}</h3>
            <div className="flex justify-start items-start flex-col space-y-2">
                <p className="text-sm leading-none text-gray-800">
                    <span className="text-gray-300">Style: </span> Italic Minimal Design
                </p>
                <p className="text-sm leading-none text-gray-800">
                    <span className="text-gray-300">Size: </span> {size}
                </p>
                <p className="text-sm leading-none text-gray-800">
                    <span className="text-gray-300">Color: </span> {color}
                </p>
            </div>
        </div>
        <div className="flex justify-between space-x-8 items-start w-full">
            <p className="text-base xl:text-lg leading-6">
            {itemPrice}<span className="text-red-300 line-through"> {itemPrice} </span>
            </p>
            <p className="text-base xl:text-lg leading-6 text-gray-800">{quantity}</p>
            <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">{totalPrice}</p>
        </div>
    </div>
</div>
  );
};

export default OrderSummarItem;
