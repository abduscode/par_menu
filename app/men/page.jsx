import Link from "next/link";
import perfumes from "../data/data";

export default function Men() {
  const menPerfumes = perfumes.filter((perfume) => perfume.category === "Men");

  return (
    <div className="p-4">
      <div className="py-5 mb-4 bg-blue-600">
        <h1 className="text-3xl font-bold  text-center text-white">{"Men's"} Perfumes</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {menPerfumes.map((perfume) => (
          <div
            key={perfume.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={perfume.img}
              alt={`Image of ${perfume.name}`}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold text-center mt-2">{perfume.name}</h2>
            <p className="text-gray-700 text-center">{perfume.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
