export default async function Home() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="w-full md:w-2/3 max-w-2xl mx-auto">
          <p className="text-teal-600 font-semibold mb-3">Connecting You to</p>
          <h1 className="text-4xl font-semibold mb-4 text-slate-900">Trusted Lawyers</h1>
          <p className="text-slate-500 mb-6">Verified advocates and legal experts all over world</p>

          <div className="flex bg-white shadow rounded-lg overflow-hidden">
            <input className="flex-1 px-4 py-3 outline-none" placeholder="Your Needs" />
            <select className="px-4 py-3 border-l border-gray-100">
              <option>Your Area</option>
              <option>Ahmednagar</option>
            </select>
            <button className="bg-teal-600 text-white px-6">Get Connected</button>
          </div>

          <div className="flex gap-4 mt-6">
            <div className="bg-white rounded-xl shadow p-5 text-center flex-1">
              <div className="text-2xl mb-3">🛠️</div>
              <h4 className="font-medium mb-2">Legal Advice</h4>
              <p className="text-sm text-slate-500">Get help from verified lawyers for civil and property matters.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-5 text-center flex-1">
              <div className="text-2xl mb-3">⚖️</div>
              <h4 className="font-medium mb-2">Litigation Support</h4>
              <p className="text-sm text-slate-500">Experienced litigators for civil and criminal matters.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-5 text-center flex-1">
              <div className="text-2xl mb-3">🏛️</div>
              <h4 className="font-medium mb-2">Family & Property</h4>
              <p className="text-sm text-slate-500">Advice and representation for family and property disputes.</p>
            </div>
          </div>
        </div>

      </section>

      <section className="py-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Why Choose Advotek?</h2>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="bg-white rounded-xl shadow p-6 flex-1">
              <div className="text-2xl">✅</div>
              <h4 className="font-medium mt-3">Verified Lawyers</h4>
              <p className="text-sm text-slate-500">Certified advocates and legal specialists in the area.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex-1">
              <div className="text-2xl">⏱️</div>
              <h4 className="font-medium mt-3">Quick Response</h4>
              <p className="text-sm text-slate-500">Fast connection to professionals when you need them most.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex-1">
              <div className="text-2xl">🤝</div>
              <h4 className="font-medium mt-3">Local Experts</h4>
              <p className="text-sm text-slate-500">Local experts who understand your community and needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="professionals" className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-center text-xl font-semibold">Top Rated Lawyers in Ahmednagar</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center gap-4">
                <div className="w-18 h-18 bg-teal-50 rounded-lg" style={{width:72,height:72}} />
                <div>
                  <div className="font-semibold">Adv. Rajesh Kulkarni</div>
                  <div className="text-sm text-slate-500">Civil / Property / Divorce</div>
                </div>
                <div className="ml-auto bg-teal-600 text-white px-3 py-1 rounded">Verified</div>
              </div>
              <p className="text-sm text-slate-500 mt-4">Experienced legal practitioner serving local clients.</p>
              <button className="w-full bg-teal-600 text-white py-2 rounded mt-4">Get Connected</button>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center gap-4">
                <div className="w-18 h-18 bg-teal-50 rounded-lg" style={{width:72,height:72}} />
                <div>
                  <div className="font-semibold">Adv. Chetan Deshmukh</div>
                  <div className="text-sm text-slate-500">Tax & Corporate Law</div>
                </div>
                <div className="ml-auto bg-teal-600 text-white px-3 py-1 rounded">Verified</div>
              </div>
              <p className="text-sm text-slate-500 mt-4">Representative for corporate and tax-related legal matters.</p>
              <button className="w-full bg-teal-600 text-white py-2 rounded mt-4">Get Connected</button>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center gap-4">
                <div className="w-18 h-18 bg-teal-50 rounded-lg" style={{width:72,height:72}} />
                <div>
                  <div className="font-semibold">Adv. Anjali Patil</div>
                  <div className="text-sm text-slate-500">General Practice</div>
                </div>
                <div className="ml-auto bg-teal-600 text-white px-3 py-1 rounded">Verified</div>
              </div>
              <p className="text-sm text-slate-500 mt-4">General practice lawyer handling a wide range of legal needs.</p>
              <button className="w-full bg-teal-600 text-white py-2 rounded mt-4">Get Connected</button>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">All information kept confidential.</p>
        </div>
      </section>
    </main>
  );
}
