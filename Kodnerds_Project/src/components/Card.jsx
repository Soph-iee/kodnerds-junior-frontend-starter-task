import User from "./User";
import CardDetails from "./CardDetails";

const Card = ({ views, likes, comments, title, description, author, date,image, }) => {
  return (
    <section className=" flex items-center justify-center text-sm py-6">
      <div className=" max-w-80  bg-green-500 border border-gray-200 rounded-xl">
        <div className="card-img ">
          <img className="rounded-t-xl " src={image} alt="" />
        </div>
        <main className="card_details p-6 flex flex-col gap-2">
          <User author={author} date={date} />
          <header className="font-bold">{title}</header>
          <p className="">{description}</p>
          <CardDetails views={views} likes={likes} comments={comments} />
        </main>
      </div>
    </section>
  );
};

export default Card;
