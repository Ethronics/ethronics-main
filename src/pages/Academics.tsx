import React, { useState, useRef, useEffect, JSX } from "react";
import { GraduationCap, Book, Users, Building2, Globe, BookOpen, Clock, ChevronLeft, ChevronRight, Beaker, Brain, Star, Award, MapPin, Briefcase } from "lucide-react";

// Hero Component
interface Slide {
  title: JSX.Element | string;
  description: string;
  image: string;
}

interface HeroButton {
  text: string;
  href: string;
  primary?: boolean;
}

interface HeroProps {
  slides: Slide[];
  buttons?: HeroButton[];
  className?: string;
}

const Hero = ({ slides, buttons = [], className = "" }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const handleSlideClick = () => setIsPaused(!isPaused);

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      onClick={handleSlideClick}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-gray-900/80 to-blue-900/90" />
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-12">{slides[currentSlide].title}</h1>
        <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">{slides[currentSlide].description}</p>
        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`px-8 py-3 text-lg font-medium rounded-lg transition-colors ${
                  button.primary
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {button.text}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronRight className="h-6 w-6 rotate-90 text-white" />
      </div>
    </div>
  );
};

// Programs Data
const programs = [
  {
    level: "TVET",
    icon: <Book className="w-8 h-8" />,
    description: "Practical, skills-based training for technical careers",
    programs: [
      {
        name: "Industrial Automation",
        duration: "1-2 years",
        description: "Hands-on training in automation systems",
        highlights: ["PLC Programming", "Robotics Basics", "Electrical Systems"],
      },
    ],
  },
  {
    level: "Undergraduate",
    icon: <GraduationCap className="w-8 h-8" />,
    description: "Four-year programs building tech foundations",
    programs: [
      {
        name: "Computer Science & Engineering",
        duration: "4 years",
        description: "Software, AI, and systems development",
        highlights: ["AI & Machine Learning", "Software Engineering", "Network Security"],
      },
    ],
  },
  {
    level: "Masters",
    icon: <Brain className="w-8 h-8" />,
    description: "Advanced specialization in technology",
    programs: [
      {
        name: "MSc in Artificial Intelligence",
        duration: "2 years",
        description: "Cutting-edge AI and data science",
        highlights: ["Deep Learning", "NLP", "AI Ethics"],
      },
    ],
  },
  {
    level: "PhD",
    icon: <Beaker className="w-8 h-8" />,
    description: "Research driving tech innovation",
    programs: [
      {
        name: "PhD in Robotics & AI",
        duration: "4 years",
        description: "Advanced robotics and AI research",
        highlights: ["Autonomous Systems", "Human-Robot Interaction", "AI Algorithms"],
      },
    ],
  },
];

// Academics Component
export function Academics() {
  const scrollRefs = useRef<Array<React.RefObject<HTMLDivElement | null>>>(
    programs.map(() => React.createRef<HTMLDivElement>())
  );

  const scroll = (index: number, direction: "left" | "right") => {
    const container = scrollRefs.current[index].current;
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const heroSlides: Slide[] = [
    {
      title: (
        <>
          Pioneering
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Ethiopia's Tech Future
          </span>
        </>
      ),
      description:
        "We’re on the cusp of launching a transformative educational experience in Ethiopia, blending global expertise with local innovation. Accreditation is in progress—be among the first to shape the future.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: "Where Innovation Meets Opportunity",
      description:
        "Imagine a place where cutting-edge technology education empowers Ethiopia’s next generation of leaders. That’s our vision, and we’re building it now—join us as we turn ambition into action.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
  ];

  const heroButtons: HeroButton[] = [
    { text: "Join Waitlist", href: "#waitlist", primary: true },
    { text: "Explore Programs", href: "#programs" },
  ];

  return (
    <div className="pt-16">
      <Hero slides={heroSlides} buttons={heroButtons} />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At the heart of Ethiopia’s technological renaissance, we’re crafting an institution that doesn’t just educate but inspires. Here’s why we stand out as your gateway to a world-class tech education:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award className="h-6 w-6" />, title: "Excellence in Education", description: "Our curriculum is designed by global experts to meet international standards while addressing Ethiopia’s unique needs, ensuring you’re ready for a dynamic future." },
              { icon: <MapPin className="h-6 w-6" />, title: "Strategic Location", description: "Located in the vibrant hub of Addis Ababa, our future campus will connect you to Ethiopia’s growing tech ecosystem and beyond." },
              { icon: <Globe className="h-6 w-6" />, title: "Global Perspective", description: "Through partnerships with leading universities and industries worldwide, we bring a global outlook to your education, preparing you for opportunities anywhere." },
              { icon: <Briefcase className="h-6 w-6" />, title: "Career Readiness", description: "From practical TVET training to advanced PhD research, our programs are tailored to equip you with skills that employers and innovators demand." },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">{item.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Vision for Ethiopia’s Tech Future
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We envision a future where Ethiopia leads Africa’s technological revolution, powered by a generation of skilled innovators, engineers, and researchers. Our institution is being built from the ground up to make this vision a reality. As we await government accreditation, we’re laying the foundation for a transformative educational experience that bridges local challenges with global solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                From practical TVET programs that empower technicians to PhD research that pushes the boundaries of AI and robotics, our comprehensive approach ensures every student finds their path to success. Join us as we pioneer a new era of education in Ethiopia—one that’s inclusive, innovative, and impactful.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Our Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent flex items-end p-6">
                <p className="text-white text-lg font-semibold">Empowering Ethiopia’s Next Innovators</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Our Programs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Whether you’re starting with hands-on technical training or pursuing advanced research, our programs are designed to meet you where you are and take you where you want to go. Discover the possibilities awaiting you once we launch.
            </p>
          </div>
          {programs.map((level, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">{level.icon}</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">{level.level} Programs</h3>
                <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{level.description}</p>
              </div>
              <div className="relative">
                <button
                  onClick={() => scroll(index, "left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 z-10 md:-left-12"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div
                  ref={scrollRefs.current[index]}
                  className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-4 scrollbar-hide"
                >
                  {level.programs.map((program, pIndex) => (
                    <div
                      key={pIndex}
                      className="snap-start flex-shrink-0 w-[300px] bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                    >
                      <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-500" />
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{program.name}</h4>
                        <div className="flex items-center text-sm text-purple-600 dark:text-purple-400 mb-3">
                          <Clock className="w-4 h-4 mr-2" />
                          {program.duration}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Key Highlights</h5>
                          <ul className="space-y-2">
                            {program.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                                <Star className="w-3 h-3 mr-2 text-purple-500" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button className="mt-4 w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                          Learn More
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => scroll(index, "right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 z-10 md:-right-12"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Admissions Process Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Admissions Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We’re preparing to welcome our first cohort of students as soon as accreditation is complete. Here’s how you can join us on this exciting journey:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "Step 1: Join the Waitlist",
                description: "Sign up now to secure your spot and receive updates on our launch and application process. Be the first to know when we open admissions.",
              },
              {
                step: "Step 2: Prepare Your Application",
                description: "Once we’re accredited, you’ll submit your academic records, a statement of purpose, and any required references. We’ll guide you every step of the way.",
              },
              {
                step: "Step 3: Start Your Journey",
                description: "Upon acceptance, you’ll join a pioneering community dedicated to advancing Ethiopia’s technological landscape. Get ready to innovate!",
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full mb-4 mx-auto">
                  <span className="text-lg font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">{item.step}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty & Research Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Faculty & Research
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our faculty and research initiatives are poised to set new benchmarks in technological education and innovation. Here’s what you can expect when we launch:
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">World-Class Faculty</h3>
              <p className="text-md text-gray-600 dark:text-gray-300 mb-6">
                We’re assembling a team of distinguished educators and industry leaders from Ethiopia and around the world. Our faculty will bring a wealth of experience in fields like artificial intelligence, robotics, and industrial automation, ensuring you learn from the best minds in technology.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Cutting-Edge Research</h3>
              <p className="text-md text-gray-600 dark:text-gray-300">
                From smart manufacturing to autonomous systems, our research programs will tackle pressing challenges in Ethiopia and beyond. As a student, you’ll have opportunities to contribute to groundbreaking projects that shape the future of technology.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Faculty & Research"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent flex items-end p-6">
                <p className="text-white text-lg font-semibold">Research That Transforms Lives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Partnerships
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Collaboration is at the core of our mission. We’re forging connections with leading organizations to bring you unparalleled opportunities:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Global Universities", description: "We’re partnering with top institutions worldwide to offer exchange programs, joint research, and a curriculum that meets international standards." },
              { title: "Tech Industry Leaders", description: "Collaborations with innovative companies will provide internships, real-world projects, and pathways to employment upon graduation." },
              { title: "Local Innovators", description: "By working with Ethiopia’s tech pioneers, we ensure our programs address local needs while fostering a vibrant innovation ecosystem." },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Shape Ethiopia’s Technological Destiny?
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto">
            We’re building more than an institution—we’re creating a movement. Accreditation is underway, and soon, we’ll open our doors to students ready to lead Ethiopia into a new era of innovation. Don’t miss your chance to be part of this historic beginning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Join Waitlist
            </button>
            <button className="px-8 py-4 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}