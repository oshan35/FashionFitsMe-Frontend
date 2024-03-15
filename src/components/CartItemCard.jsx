import { tommyFigure } from "../assets/images";


const CartItemCard = ({itemName,itemPrice,color,size,quantity }) => {

    const totalPrice=itemPrice*quantity;
  return (
//     <div class="flex border-l border-r border-b border-t border-gray-200 bg-blue-50 w-auto h-auto mb-2">
//             <div class="h-40 w-30 ">

//                  <img class="p-1 h-full  " src={tommyFigure} alt="Avatar of Jonathan Reinink" />
//             </div>
//   <div class="    rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col  leading-normal">
//     <div class="mb-5">
//       <div class="text-gray-900 font-bold text-xl mb-2">{itemName}</div>
//       <p class="text-gray-700 text-base">{itemPrice}</p>
//     </div>
//     <div class="flex gap-10 mt-5" >
//         <div class="text-gray-900  text-xl mb-2">{color}</div>
//         <div class=" flex text-gray-900  gap-3 text-xl mb-2">

//             <div class=" text-gray-900   text-xl mb-2">Size</div>
//             <div class=" text-gray-900  font-bold text-l mb-2">{size}</div>

//         </div>
//     <div class=" flex text-gray-900  gap-3 text-xl mb-2">

//         <div class=" text-gray-900   text-xl mb-2">Quantity
//     </div>

//         <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 h-9 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//         <option selected>{quantity}</option>
        
//         </select>
//     </div>

   
   


//     </div>
//   </div>
// </div>
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

export default CartItemCard;
