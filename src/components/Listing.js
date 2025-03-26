export default function Listing({ title, price, location, time }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md m-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-800 font-bold">{price}</p>
        <p className="text-gray-600">{location}</p>
        <p className="text-gray-500 text-sm">{time}</p>
      </div>
    );
  }