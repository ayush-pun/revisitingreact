import { Link } from "react-router-dom";

const SavedTrips = ({ savedTrips, setSavedTrips }) => {
  function handleRemove(id) {
    setSavedTrips((prevTrips) =>
      prevTrips.filter((trip) => trip.id !== id)
    );
  }

  return (
    <section className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
            Wishlist
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Your Saved Trips
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Manage your favorite destinations before booking your next
            unforgettable adventure.
          </p>
        </div>

        {/* Empty State */}
        {savedTrips.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 py-20 text-center">
            <h2 className="text-3xl font-semibold">
              No Saved Trips
            </h2>

            <p className="mt-4 text-gray-400">
              Start exploring destinations and save your favorites.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
            >
              Explore Trips
            </Link>
          </div>
        ) : (
          <>
            {/* Count */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                Saved Destinations
              </h2>

              <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">
                {savedTrips.length} Trip
                {savedTrips.length > 1 ? "s" : ""}
              </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="min-w-full">
                <thead className="bg-white/10">
                  <tr>
                    <th className="px-6 py-4 text-left">Image</th>
                    <th className="px-6 py-4 text-left">Destination</th>
                    <th className="px-6 py-4 text-left">Category</th>
                    <th className="px-6 py-4 text-left">Price</th>
                    <th className="px-6 py-4 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {savedTrips.map((trip) => (
                    <tr
                      key={trip.id}
                      className="border-t border-white/10 hover:bg-white/5"
                    >
                      <td className="px-6 py-4">
                        <img
                          src={trip.image}
                          alt={trip.title}
                          className="h-20 w-28 rounded-lg object-cover"
                        />
                      </td>

                      <td className="px-6 py-4 font-medium">
                        {trip.title}
                      </td>

                      <td className="px-6 py-4">
                        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                          {trip.category}
                        </span>
                      </td>

                      <td className="px-6 py-4 font-semibold">
                        ${trip.price}
                      </td>

                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => handleRemove(trip.id)}
                          className="rounded-lg bg-red-600 px-4 py-2 font-medium transition hover:bg-red-700"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SavedTrips;