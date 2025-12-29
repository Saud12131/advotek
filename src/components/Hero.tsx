export default function Hero() {
  return (
    <section className="bg-blue-50 px-8 py-24 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Digital Health Records,
        <span className="text-blue-600"> Made Simple</span>
      </h2>

      <p className="max-w-2xl mx-auto text-gray-600 mb-10">
        Securely manage patient prescriptions and medical history across doctors and hospitals.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          For Doctors
        </button>
        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100">
          For Patients
        </button>
      </div>
    </section>
  );
}
