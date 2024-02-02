import Image from "next/image";
import IProduct from "@/Interfaces/Product"
import classNames from "classnames";

interface IProps {
  product: IProduct;
}

export default function ProductListItem({product}:IProps) {
 const {title, price, category, isAvailable} = product
  return (
    <div className="p-5 h-fit w-72 mx-auto relative   cursor-pointer productWrapper">
      <Image
        src="/room.jpeg"
        alt="room"
        width={200}
        height={300}
        className="product"
      />
      <Image
        className="absolute top-5 right-5 cursor-pointer"
        src="/heart-svgrepo-com.svg"
        alt="room"
        width={30}
        height={30}
      />
      <div className="absolute top-5 left-4.2 bg-blue-800 text-white p-2 hidden productDetailsLabel">
        Shop by Room
      </div>
      <div className="absolute left-10 font-bold underline productDetails">
        Product Details
      </div>
      <div className="flex justify-between">
        <div>{title}</div>
        <div>{price}</div>
      </div>
      <div>{category}</div>
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center">
          <div className={classNames({
                      "circleGreen": isAvailable,
                      "circleRed": !isAvailable,
                    })}></div>
          <div>{isAvailable ?'Available Now': 'Not Available'}</div>
        </div>
        <div className="flex justify-start items-center">
          <div className="pr-1">Compare</div>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
}
