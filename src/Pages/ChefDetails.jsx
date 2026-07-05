import { useParams, useNavigate } from "react-router-dom";

function ChefDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const chefs = [
    {
      id: 1,
      name: "Chef Ahmed Ali",
      role: "Executive Chef",
      experience: "15+ Years",
      specialty: "International Cuisine",
      bio: "Chef Ahmed is a master in international dishes with over 15 years of experience. He focuses on fine dining, luxury presentation, and rich flavors.",
      image:
        "https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg",
    },
    {
      id: 2,
      name: "Chef Mike Nur",
      role: "Pastry Chef",
      experience: "10+ Years",
      specialty: "Desserts & Baking",
      bio: "Chef Fatima specializes in cakes, pastries, and bakery items. Her desserts are loved by thousands of customers.",
      image:
        "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg",
    },
    {
      id: 3,
      name: "Chef Mohamed Hassan",
      role: "Grill Chef",
      experience: "12+ Years",
      specialty: "BBQ & Grill",
      bio: "Chef Mohamed is known for his perfect BBQ and grilled dishes with smoky and rich taste.",
      image:
        "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg",
    },
    {
      id: 4,
      name: "Chef Amina Yusuf",
      role: "Pizza Chef",
      experience: "8+ Years",
      specialty: "Italian Cuisine",
      bio: "Chef Amina makes authentic Italian pizza and pasta with original recipes and fresh ingredients.",
      image:
        "https://images.pexels.com/photos/3771106/pexels-photo-3771106.jpeg",
    },
  ];

  const chef = chefs.find((c) => c.id === Number(id));

  if (!chef) {
    return (
      <div className="pt-40 text-center text-xl">
        Chef not found
      </div>
    );
  }

  return (
    <div className="pt-32 min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white shadow-2xl rounded-2xl max-w-2xl w-full overflow-hidden">

        {/* IMAGE */}
        <img
          src={chef.image}
          className="w-full h-80 object-cover"
        />

        {/* INFO */}
        <div className="p-6">

          <h1 className="text-3xl font-bold">
            {chef.name}
          </h1>

          <p className="text-red-600 font-semibold mt-2">
            {chef.role}
          </p>

          <p className="text-gray-600 mt-3 leading-7">
            {chef.bio}
          </p>

          <div className="mt-4 space-y-2 text-gray-700">
            <p><b>Experience:</b> {chef.experience}</p>
            <p><b>Specialty:</b> {chef.specialty}</p>
          </div>

          {/* BACK BUTTON */}
          <button
            onClick={() => navigate(-1)}
            className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800"
          >
            ← Back to About
          </button>

        </div>

      </div>

    </div>
  );
}

export default ChefDetails;