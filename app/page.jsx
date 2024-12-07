import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#CA9A35] text-white py-16 text-center px-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to 33ml parfums</h1>
        <p className="text-lg mb-6">
          Discover our exclusive collection of fragrances for every occasion.
        </p>
      </div>

      {/* Categories Section */}
      <div className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Men’s Collection Card */}
          <div className="relative group bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/images/men_cover.jpg"
              alt="Men's Perfume"
              className="w-fit h-fit object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">{"Men's"} Collection</h3>
              <p className="text-gray-600 mb-4">
                Sophisticated scents for the modern man.
              </p>
              <Link
                href="/men"
                className="bg-[#BB8F4F] text-white font-semibold px-4 py-2 rounded shadow hover:bg-[#CA9A35] transition"
              >
                See More...
              </Link>
            </div>
          </div>

          {/* Women’s Collection Card */}
          <div className="relative group bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/images/women_cover.jpg"
              alt="Women's Perfume"
              className="w-full h-fit object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">{"Women's"} Collection</h3>
              <p className="text-gray-600 mb-4">
                Timeless elegance and captivating fragrances.
              </p>
              <Link
                href="/women"
                className="bg-[#BB8F4F] text-white font-semibold px-4 py-2 rounded shadow hover:bg-[#CA9A35] transition"
              >
                See More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
