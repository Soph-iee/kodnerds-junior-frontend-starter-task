import { FaEye, FaStar, FaMessage, FaArrowRight } from "react-icons/fa6";

const CardDetails = ({ views, likes, comments, }) => {
  return (
    <div className="flex flex-col gap-2">
      <a
        className="capitalize flex items-center gap-2 text-blue-500 font-medium"
        href="/"
      >
        read more <FaArrowRight />
      </a>
      <div className="flex gap-4 text-sm text-gray-800 items-center">
        <span className="flex items-center gap-1">
          <FaEye /> {views}
        </span>
        <span className="flex items-center gap-1">
          <FaMessage /> {comments}
        </span>
        <span className="flex items-center gap-1">
          <FaStar />
          {likes}
        </span>
      </div>
    </div>
  );
};

export default CardDetails;
