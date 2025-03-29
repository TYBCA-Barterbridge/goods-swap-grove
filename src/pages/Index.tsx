
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ItemCard from "@/components/ItemCard";
import SkillCard from "@/components/SkillCard";
import WorkshopCard from "@/components/WorkshopCard";
import CategoryBadge from "@/components/CategoryBadge";

const Index = () => {
  // Mock data for now
  const featuredItems = [
    {
      id: "1",
      title: "Vintage Record Player",
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1551506448-074afa034c05?q=80&w=1974&auto=format&fit=crop",
      location: "Brooklyn, NY",
      ownerName: "Alex Johnson",
      ownerImage: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "2",
      title: "Handcrafted Wooden Chair",
      category: "Furniture",
      image: "https://images.unsplash.com/photo-1549497538-303791108f95?q=80&w=1964&auto=format&fit=crop",
      location: "Portland, OR",
      ownerName: "Emma Wilson",
      ownerImage: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: "3",
      title: "Mountain Bike",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=2080&auto=format&fit=crop",
      location: "Denver, CO",
      ownerName: "Michael Chen",
      ownerImage: "https://randomuser.me/api/portraits/men/22.jpg",
    },
  ];

  const featuredSkills = [
    {
      id: "1",
      title: "Guitar Lessons",
      category: "Music",
      image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=1970&auto=format&fit=crop",
      location: "Online",
      ownerName: "Jason Rivera",
      ownerImage: "https://randomuser.me/api/portraits/men/42.jpg",
      rating: 4.8,
    },
    {
      id: "2",
      title: "Web Development",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop",
      location: "Online",
      ownerName: "Sarah Khan",
      ownerImage: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 4.9,
    },
    {
      id: "3",
      title: "Yoga Instruction",
      category: "Fitness",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop",
      location: "Austin, TX",
      ownerName: "Maya Patel",
      ownerImage: "https://randomuser.me/api/portraits/women/36.jpg",
      rating: 4.7,
    },
  ];

  const featuredWorkshops = [
    {
      id: "1",
      title: "Sustainable Urban Gardening",
      category: "Gardening",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2069&auto=format&fit=crop",
      date: "June 15, 2023",
      time: "2:00 PM",
      instructor: "Maria Gomez",
      instructorImage: "https://randomuser.me/api/portraits/women/68.jpg",
      participantsCount: 12,
      maxParticipants: 20,
      isVirtual: false,
    },
    {
      id: "2",
      title: "Digital Photography Basics",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
      date: "June 18, 2023",
      time: "10:00 AM",
      instructor: "Daniel Smith",
      instructorImage: "https://randomuser.me/api/portraits/men/54.jpg",
      participantsCount: 15,
      maxParticipants: 15,
      isVirtual: true,
    },
    {
      id: "3",
      title: "Artisanal Bread Making",
      category: "Cooking",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop",
      date: "June 20, 2023",
      time: "3:30 PM",
      instructor: "Robert Lin",
      instructorImage: "https://randomuser.me/api/portraits/men/75.jpg",
      participantsCount: 8,
      maxParticipants: 12,
      isVirtual: false,
    },
  ];

  const popularCategories = [
    "Electronics",
    "Furniture",
    "Books",
    "Clothing",
    "Tools",
    "Art",
    "Music",
    "Sports",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-barter-teal to-barter-purple text-white py-20 md:py-28">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Exchange Goods & Skills Without Money
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Join the BarterBridge community to trade items, share skills, 
                and participate in workshops in a sustainable, collaborative economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Link to="/register">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-barter-teal hover:bg-gray-100">
                    Join Now
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 relative animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <img 
                src="https://images.unsplash.com/photo-1556484687-30636164638b?q=80&w=2074&auto=format&fit=crop" 
                alt="People exchanging items" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Zero Fees</p>
                    <p className="text-xs text-gray-500">No money involved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How BarterBridge Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple process to exchange goods and skills without using money
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-barter-teal/10 text-barter-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create a Profile</h3>
              <p className="text-gray-600">
                Sign up and list what you have to offer – whether it's items, skills, or workshops.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-barter-purple/10 text-barter-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse & Connect</h3>
              <p className="text-gray-600">
                Discover things you need or want to learn and connect with community members.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-barter-orange/10 text-barter-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Exchange & Learn</h3>
              <p className="text-gray-600">
                Make the exchange, attend workshops, and build a reputation in the community.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Items</h2>
            <Link to="/items" className="text-barter-teal hover:underline">
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Popular Categories</h3>
            <div className="flex flex-wrap gap-2">
              {popularCategories.map((category) => (
                <CategoryBadge 
                  key={category} 
                  category={category} 
                  type="item"
                  isSelected={category === "Electronics" || category === "Furniture"}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Skills Exchange</h2>
            <Link to="/skills" className="text-barter-purple hover:underline">
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredSkills.map((skill) => (
              <SkillCard key={skill.id} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Workshops Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Upcoming Workshops</h2>
            <Link to="/workshops" className="text-barter-orange hover:underline">
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredWorkshops.map((workshop) => (
              <WorkshopCard key={workshop.id} {...workshop} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="py-16 bg-gradient-to-r from-barter-teal to-barter-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Connect with like-minded individuals, exchange goods and skills, 
            and be part of a sustainable, collaborative economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto bg-white text-barter-teal hover:bg-gray-100">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from people who have transformed the way they exchange goods and skills
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/12.jpg" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Jessica T.</h4>
                  <p className="text-sm text-gray-500">New York, NY</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I've exchanged my graphic design skills for home-cooked meals, 
                yoga lessons, and even furniture. BarterBridge has changed how 
                I think about the value of my skills!"
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Marcus J.</h4>
                  <p className="text-sm text-gray-500">Portland, OR</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The woodworking workshop I attended was incredible! I learned 
                so much and met amazing people. I've since traded some of my 
                handmade items for other things I needed."
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/48.jpg" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Leila M.</h4>
                  <p className="text-sm text-gray-500">Austin, TX</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I've decluttered my home by trading things I no longer need 
                and gained useful items and skills in return. The community here 
                is supportive and values sustainability."
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
