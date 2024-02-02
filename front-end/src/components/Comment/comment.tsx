import IComment from "@/Interfaces/Comments"
// @ts-ignore
import ReactReadMoreReadLess from "react-read-more-read-less";
import Rate from "@uiw/react-rate";


export default function Comment(props:IComment) {
 const {comment, name, phone, email} = props
  return (
    <div>
        <div>
          <h3>{name}</h3>
          <p className="text-gray">September 12, 2021</p>
          <p className="text-gray">{email}</p>
          <p className="text-gray">{phone}</p>
          <Rate count={5} />
        </div>
        <div className="pb-1 border-b border-gray ...">
          <ReactReadMoreReadLess
            charLimit={200}
            readMoreText="Read more"
            readLessText="Read less"
            readMoreStyle={{
              fontWeight: "bold",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            readLessStyle={{
              fontWeight: "bold",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {comment}
          </ReactReadMoreReadLess>
        </div>
      </div>
  );
}
