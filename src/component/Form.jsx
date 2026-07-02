const Contact = () => {
  return (
    <section className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
            Contact
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Plan Your Next Adventure
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 sm:text-base">
            Tell us about your dream destination and we'll help you find the
            perfect travel experience.
          </p>
        </div>

        {/* Form */}
        <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg sm:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Email
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Destination */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-gray-300">
                Destination
              </label>

              <select className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-blue-500">
                <option>Beach</option>
                <option>Mountains</option>
                <option>City</option>
                <option>Forest</option>
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-gray-300">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Tell us about your ideal vacation..."
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-500"
              ></textarea>
            </div>

            {/* Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full rounded-lg bg-white py-3 font-semibold text-black transition duration-300 hover:scale-[1.02] hover:bg-gray-200"
              >
                Submit Inquiry
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;