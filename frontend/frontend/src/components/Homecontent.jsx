import React from 'react'

const Homecontent = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Welcome to Edusphere</h1>
        <p className="mt-4 text-lg">
          Your Gateway to Future-Ready Education
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full">
          Get Started
        </button>
      </header>

      {/* Why Choose Edusphere */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Edusphere?
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
            <div className="px-6 py-4">
              <h3 className="font-bold text-xl mb-2">Personalized Learning Journeys</h3>
              <p className="text-gray-700 text-base">
                Every learner is unique. Edusphere adapts to your learning style, pace, and interests, offering personalized pathways that help you achieve your goals.
              </p>
            </div>
          </div>

          <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
            <div className="px-6 py-4">
              <h3 className="font-bold text-xl mb-2">Interactive Learning Tools</h3>
              <p className="text-gray-700 text-base">
                Engage with our interactive content, from virtual labs and simulations to collaborative projects. Our tools are designed to make learning both effective and enjoyable.
              </p>
            </div>
          </div>

          <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
            <div className="px-6 py-4">
              <h3 className="font-bold text-xl mb-2">Expert-Led Courses</h3>
              <p className="text-gray-700 text-base">
                Learn from industry leaders and academic experts. Our courses are crafted to ensure that you gain the knowledge and skills needed to excel in the real world.
              </p>
            </div>
          </div>

          <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
            <div className="px-6 py-4">
              <h3 className="font-bold text-xl mb-2">Global Community</h3>
              <p className="text-gray-700 text-base">
                Join a vibrant community of learners and educators from around the world. Share insights, collaborate on projects, and grow together in a supportive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Explore Our Features</h2>
          <div className="flex flex-wrap justify-center">
            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">Dashboard</h3>
                <p className="text-gray-700 text-base">
                  Track your progress, manage courses, and access resources all in one place.
                </p>
              </div>
            </div>

            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">Course Catalog</h3>
                <p className="text-gray-700 text-base">
                  Browse our extensive library of courses, covering a wide range of subjects and skill levels.
                </p>
              </div>
            </div>

            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">Certification</h3>
                <p className="text-gray-700 text-base">
                  Earn recognized certificates to showcase your achievements and enhance your career prospects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
        <p className="text-lg mb-8">
          Whether you’re a student eager to learn, an educator seeking innovative teaching tools, or an institution looking to modernize, Edusphere is here to support you.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full">
          Join Edusphere
        </button>
      </section>
    </div>
  );
}

export default Homecontent