export default function Features() {
  const features = [
    {
      title: "Fast Prescriptions",
      desc: "Create prescriptions in under 20 seconds.",
    },
    {
      title: "Unified Records",
      desc: "One patient profile across all doctors.",
    },
    {
      title: "Secure & Private",
      desc: "Patient-controlled access with encryption.",
    },
  ];

  return (
    <section id="features" className="px-8 py-20">
      <h3 className="text-3xl font-bold text-center mb-12">
        Why MediVault?
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="border p-6 rounded-xl hover:shadow-lg transition"
          >
            <h4 className="text-xl font-semibold text-blue-600 mb-3">
              {f.title}
            </h4>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
