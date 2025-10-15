import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const LandingPage = () => {
    
    const navigate = useNavigate()
      const handleGetStarted = () => {
        console.log('clicked')
    navigate("/home"); 
  };
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Top bar with dark mode toggle */}
      <header className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
        <h1 className="text-2xl font-bold text-yellow-600">CredMantra</h1>
        <button className="bg-gray-100 px-3 py-2 rounded-xl shadow-md hover:bg-yellow-50">
          Toggle Mode
        </button>
      </header>

      {/* Hero Section */}
      <section className="bg-yellow-500 py-20 text-center text-white relative overflow-hidden rounded-b-3xl shadow-lg">
        <motion.div
          className="max-w-5xl mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">CredMantra</h1>
          <p className="text-xl font-light mb-8 max-w-2xl mx-auto drop-shadow-md">
            Empowering Fair & Data-Driven Credit Decisions for Everyone
          </p>
          <motion.button
            whileHover={{ scale: 1.08 }}
            onClick={handleGetStarted}
            className="bg-white text-yellow-600 font-bold px-8 py-4 rounded-full hover:bg-yellow-100 shadow-lg flex items-center justify-center mx-auto transition-all text-lg"
          >
            Get Started <ArrowRight className="ml-2" size={24} />
          </motion.button>
        </motion.div>
        <motion.img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
          alt="Finance Technology"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-extrabold mb-4 text-yellow-600">Purpose & Goal</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            CredMantra is an AI/ML-powered credit evaluation platform built to help financial partners assess beneficiary creditworthiness with transparency. It uses a blend of historical loan data and real-world consumption behavior to produce a fair, explainable score.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <CheckCircle className="text-yellow-500 mr-2" /> Transparent and explainable scoring.
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-yellow-500 mr-2" /> Same-day approval for high-score borrowers.
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-yellow-500 mr-2" /> 50% faster loan processing for repeat borrowers.
            </li>
          </ul>
        </div>
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
          alt="Credit Lending"
          className="rounded-2xl shadow-xl"
        />
      </section>

      {/* Algorithm Transparency */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-6 text-yellow-600">Our Evaluation Algorithm</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
            CredMantra uses a dual-mode evaluation approach combining historical repayment patterns with behavioral and income proxies such as electricity usage, mobile recharges, and utility bill analysis. Even with incomplete history, our <span className="font-semibold text-yellow-600">Cold Start Model</span> ensures fair scoring using adaptive datasets.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "History Model",
                desc: "Evaluates borrowers with past loans using repayment patterns, utilization ratios, and repeat borrowing data.",
                img: "https://images.unsplash.com/photo-1515168833906-d4c7c1bce221?auto=format&fit=crop&w=400&q=80",
              },
              {
                title: "Cold Start Model",
                desc: "Scores new borrowers using income proxies, consumption data, and demographic insights.",
                img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
              },
              {
                title: "Composite Credit Score",
                desc: "Generates a blended score combining repayment reliability and financial behavior.",
                img: "https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?auto=format&fit=crop&w=400&q=80",
              },
            ].map((algo, i) => (
              <div
                key={i}
                className="rounded-2xl shadow-md hover:shadow-xl transition bg-white text-left p-6 border-t-4 border-yellow-400"
              >
                <img
                  src={algo.img}
                  alt={algo.title}
                  className="rounded-lg mb-4 w-full h-40 object-cover"
                />
                <h3 className="font-semibold text-lg mb-2 text-yellow-600">
                  {algo.title}
                </h3>
                <p className="text-gray-700 text-sm">{algo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-yellow-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-8 text-yellow-600">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Accurate & Fair Scoring",
              "Automated Digital Lending",
              "Transparent Evaluation Reports",
              "Adaptive to Incomplete Data",
              "Compliance Ready",
              "Trusted by Financial Institutions",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-lg p-6 rounded-2xl border-t-4 border-yellow-400"
              >
                <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
     {/* FAQs */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-yellow-500">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "How is my credit score calculated?",
              a: "Your score is derived from both your repayment history and behavioral data such as utility bill payments and energy usage.",
            },
            {
              q: "Can I apply if I have no credit history?",
              a: "Yes! Our Cold Start Model allows fair evaluation even for first-time borrowers using reliable consumption data.",
            },
            {
              q: "Is my data secure?",
              a: "Absolutely. CredMantra follows industry-standard encryption and anonymization practices for all data.",
            },
          ].map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-yellow-600">{faq.q}</h3>
              <p className="text-gray-700 mt-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-8 text-yellow-600">From Our Blog</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "5 Ways AI is Transforming Inclusive Lending",
                img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
              },
              {
                title: "How CredMantra Ensures Fairness in Credit Scoring",
                img: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?auto=format&fit=crop&w=400&q=80",
              },
              {
                title: "Digital Lending: The Future of Microfinance",
                img: "https://images.unsplash.com/photo-1444653389962-8149286c578a?auto=format&fit=crop&w=400&q=80",
              },
            ].map((blog, i) => (
              <div
                key={i}
                className="rounded-xl shadow-md hover:shadow-xl transition bg-gray-50 p-6 text-left"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="rounded-lg mb-4 h-40 w-full object-cover"
                />
                <h3 className="font-semibold text-lg mb-2 text-yellow-600">
                  {blog.title}
                </h3>
                <button className="border border-yellow-400 text-yellow-600 px-4 py-2 rounded-lg hover:bg-yellow-100 transition">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          <div>
            <h3 className="font-bold text-lg mb-3 text-yellow-400">CredMantra</h3>
            <p className="text-sm text-gray-300">
              AI-driven, transparent, and inclusive credit evaluation platform designed for fair access to finance.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Our Algorithm</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3 text-yellow-400">Contact Us</h3>
            <p>Email: support@credmantra.ai</p>
            <p>Phone: +91 98765 43210</p>
            <p className="text-sm text-gray-400 mt-2">
              © 2025 CredMantra. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
