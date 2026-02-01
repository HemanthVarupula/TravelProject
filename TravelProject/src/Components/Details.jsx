import { useParams } from "react-router-dom";
import data from "./Data";

const Details = () => {
  const { id } = useParams();

  const place = data.find((item) => item.id === Number(id));

  if (!place) return <h1>Not Found</h1>;

  return (
    <div className="p-10">
      {/* <marquee direction="right">
  <span className="text-2xl text-red-600">
    For More Details and Booking contact 9015618458
  </span>
</marquee> */}
      <h1 className="text-center text-2xl text-rose-600 underline shadow-2xs">For More Details and Booking contact 9015618458</h1>
      <h1 className="text-3xl m-1.5">{place.name}</h1>

      <img src={place.img} className="h-[300px] mt-5" />

      <p className="mt-5 text-xl m-1.5">Price: ₹{place.Price}</p>
      <h2 className="text-3xl text-red-500 m-1.5"> startpoint :  {place.startpoint}</h2>
      <h2> Duration {place.avgduration}</h2>
      <p className="mt-3">{place.descrption}</p>
      {/* <h1 className="text-2xl animate-marquee">For More Details and Bokking contact 9015618458</h1> */}
    </div>
  );
};

export default Details;
