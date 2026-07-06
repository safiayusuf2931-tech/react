import { Link } from "react-router-dom";

function About() {
  const chefs = [
    {
      id: 1,
      name: "Chef Ahmed Ali",
      role: "Executive Chef",
      experience: "15+ Years",
      specialty: "International Cuisine",
      bio: "Expert in global dishes, luxury plating and fine dining experience.",
      image:
        "https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg",
    },
    {
      id: 2,
      name: "Chef Fatima Noor",
      role: "Pastry Chef",
      experience: "10+ Years",
      specialty: "Desserts & Baking",
      bio: "Specialist in cakes, pastries, and modern bakery creations.",
      image:
        "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg",
    },
    {
      id: 3,
      name: "Chef Mohamed Hassan",
      role: "Grill Chef",
      experience: "12+ Years",
      specialty: "BBQ & Grill",
      bio: "Master of grilled meats, BBQ techniques and smoky flavors.",
      image:
        "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg",
    },
    {
      id: 4,
      name: "Chef Amina Yusuf",
      role: "Pizza Chef",
      experience: "8+ Years",
      specialty: "Italian Cuisine",
      bio: "Expert in authentic Italian pizza and pasta dishes.",
      image:
        "https://images.pexels.com/photos/3771106/pexels-photo-3771106.jpeg",
    },
  ];

  return (
    <div className="pt-32 bg-white">

      {/* HERO */}
      <section className="text-center px-6">
        <h1 className="text-5xl font-bold">
          About <span className="text-red-600">Our Restaurant</span>
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We serve fresh food, made with love, by professional chefs.
          Our goal is to give you the best dining experience in the city.
        </p>
      </section>

      {/* IMAGE + STORY */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mt-16 px-6 items-center">

        <img
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-gray-600 mt-4 leading-7">
            Our restaurant started with a small dream — to serve high quality
            food made with fresh ingredients. Today we are proud to serve
            thousands of happy customers every month with passion and care.
          </p>

          <p className="text-gray-600 mt-3 leading-7">
            We believe food is not just eating — it is an experience. That is
            why every dish is prepared with attention, love, and creativity.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mt-20 px-6">

        <div className="bg-red-600 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-3">
            To serve delicious, fresh, and healthy food with excellent service
            and unforgettable dining experience.
          </p>
        </div>

        <div className="bg-black text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p className="mt-3">
            To become the most loved restaurant brand known for quality food
            and customer satisfaction.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 mt-20 text-center px-6">

        <div className="shadow-lg p-6 rounded-xl">
          <h2 className="text-4xl font-bold text-red-600">5K+</h2>
          <p className="text-gray-600">Happy Customers</p>
        </div>

        <div className="shadow-lg p-6 rounded-xl">
          <h2 className="text-4xl font-bold text-red-600">15+</h2>
          <p className="text-gray-600">Years Experience</p>
        </div>

        <div className="shadow-lg p-6 rounded-xl">
          <h2 className="text-4xl font-bold text-red-600">200+</h2>
          <p className="text-gray-600">Food Items</p>
        </div>

        <div className="shadow-lg p-6 rounded-xl">
          <h2 className="text-4xl font-bold text-red-600">25+</h2>
          <p className="text-gray-600">Professional Chefs</p>
        </div>

      </section>

      {/* CHEFS */}
      <section className="max-w-6xl mx-auto mt-20 px-6">

        <h2 className="text-4xl font-bold text-center">
          Meet Our Professional Chefs
        </h2>

        <p className="text-center text-gray-600 mt-3">
          Experienced chefs bringing you the best taste in every dish
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">

          {chefs.map((chef) => (
            <div
              key={chef.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden"
            >
              <img
                src={chef.image}
                className="h-56 w-full object-cover"
              />

              <div className="p-4">
                <h2 className="font-bold">{chef.name}</h2>
                <p className="text-red-600">{chef.role}</p>
                <p className="text-sm text-gray-600 mt-2">
                  {chef.bio}
                </p>

                <p className="text-sm mt-2">
                  ⭐ {chef.experience}
                </p>

                <Link to={`/chef/${chef.id}`}>
                  <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* FOOTER SPACE */}
      <div className="mt-20"></div>

    </div>
  );
}

export default About;