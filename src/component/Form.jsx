import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);

    reset();
  }

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg sm:p-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* First Name */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                First Name
              </label>

              <input
                type="text"
                placeholder="Enter your first name"
                {...register("firstName", {
                  required: "First name is required",
                  minLength: {
                    value: 3,
                    message: "First name must be at least 3 characters",
                  },
                })}
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-500"
              />

              {errors.firstName && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Last Name
              </label>

              <input
                type="text"
                placeholder="Enter your last name"
                {...register("lastName", {
                  required: "Last name is required",
                  minLength: {
                    value: 3,
                    message: "Last name must be at least 3 characters",
                  },
                })}
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-500"
              />

              {errors.lastName && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-gray-300">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-500"
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Destination */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-gray-300">
                Destination
              </label>

              <select
                {...register("destination", {
                  required: "Please select a destination",
                })}
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
              >
                <option value="">Select a destination</option>
                <option value="Beach">Beach</option>
                <option value="Mountains">Mountains</option>
                <option value="City">City</option>
                <option value="Forest">Forest</option>
              </select>

              {errors.destination && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.destination.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-gray-300">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell us about your ideal vacation..."
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-500"
              />

              {errors.message && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
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