export default function HowItWorks() {
  const steps = [
    "Doctor creates prescription",
    "Saved in patient profile",
    "Accessible with patient consent",
  ];

  return (
    <section id="how" className="bg-blue-50 px-8 py-20">
      <h3 className="text-3xl font-bold text-center mb-12">
        How It Works
      </h3>

      <div className="grid md:grid-cols-3 gap-8 text-center">
        {steps.map((step, i) => (
          <div key={i}>
            <div className="text-4xl font-bold text-blue-600 mb-4">
              {i + 1}
            </div>
            <p className="font-medium">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
