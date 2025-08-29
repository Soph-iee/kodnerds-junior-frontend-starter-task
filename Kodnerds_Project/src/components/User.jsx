import Profilepicture from "../assets/User.jpg";

const User = ({ author, date }) => {
  return (
    <div className="flex gap-2 items-center ">
      <div className="">
        <img
          src={Profilepicture}
          className=" w-6 h-7 rounded-full border border-gray-900"
          alt=""
        />
      </div>

      <div>
        <h1 className="font-bold uppercase text-sm">{author}</h1>
        <p className="capitalize text-xs text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default User;
