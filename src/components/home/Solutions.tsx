import { useRef, useState, useEffect } from 'react'
import Tvet from "../../assets/images/tvet.jpg";
import Undergrad from "../../assets/images/undergrad.jpg";
import Postgrad from "../../assets/images/postgrad.jpg";
import Training from "../../assets/images/training.jpg";
import Bootcamp from "../../assets/images/bootcamp.jpg";
import AICurriculum from "../../assets/images/ai-curriculum.jpg";
import Mentor from "../../assets/images/mentor.jpg";
import Scholarship from "../../assets/images/scholarship.jpg";
import SmartGate from "../../assets/images/smart-gate.jpg";

interface Solution {
  title: string
  description: string
  image: string
  action: { text: string; href: string }
}

interface Section {
  title: string
  key: string
  solutions: Solution[]
  description: string
}

const solutionsData: { [key: string]: Solution[] } = {
  education: [
    {
      title: 'Robotics Bootcamp',
      description: 'Dive into automation with hands-on robotics skills.',
      image: Bootcamp,
      action: { text: 'Join Now', href: '/contact' },
    },
    {
      title: 'AI Curriculum',
      description: 'Learn machine learning and data science.',
      image: AICurriculum,
      action: { text: 'Explore Courses', href: '/academics/#programs' },
    },
    {
      title: 'Student Mentorship',
      description: 'Get guidance from industry experts.',
      image: Mentor,
      action: { text: 'Apply for Mentorship', href: '/contact' },
    },
    {
      title: 'Tech Scholarships',
      description: 'Funding for tech education.',
      image: Scholarship,
      action: { text: 'Apply Now', href: '/contact' },
    },
    {
      title: 'TVET Programs',
      description: 'Practical skills in robotics and AI.',
      image: Tvet,
      action: { text: 'Learn More', href: '/academics' },
    },
    {
      title: 'Undergraduate Programs',
      description: 'Foundation in tech and innovation.',
      image: Undergrad,
      action: { text: 'Explore Programs', href: '/academics' },
    },
    {
      title: 'Postgraduate Studies',
      description: 'Advance your tech expertise.',
      image: Postgrad,
      action: { text: 'Apply Now', href: '/academics' },
    },
    {
      title: 'Professional Training',
      description: 'Upskill in AI and robotics.',
      image: Training,
      action: { text: 'Get Trained', href: '/academics' },
    },
  ],
  manufacturing: [
    {
      title: 'Gate Barrier Tech',
      description: 'Automated access control for security.',
      image: SmartGate,
      action: { text: 'Request Demo', href: '/contact' },
    },
    {
      title: 'Smart Factory Systems',
      description: 'IoT-enabled manufacturing solutions.',
      image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=400&q=60',
      action: { text: 'Learn More', href: '/manufacturing' },
    },
  ],
  globalTech: [
    {
      title: 'Blockchain Platforms',
      description: 'Secure transaction systems.',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=400&q=60',
      action: { text: 'Discover More', href: '/contact' },
    },
    {
      title: 'AI Traffic Control',
      description: 'Optimize urban traffic flow.',
      image: 'https://images.unsplash.com/photo-1584649525122-8d6895492a5d?auto=format&fit=crop&w=400&q=60',
      action: { text: 'Learn How', href: '/contact' },
    },
    {
      title: 'Quantum Research',
      description: 'Next-gen computing solutions.',
      image: 'https://images.unsplash.com/photo-1591306208574-969f12f1ebfe?auto=format&fit=crop&w=400&q=60',
      action: { text: 'Join Research', href: '/contact' },
    },
    {
      title: 'Cybersecurity Innovations',
      description: 'Advanced data protection.',
      image: 'https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=400&q=60',
      action: { text: 'Explore Solutions', href: '/contact' },
    },
    {
      title: 'Global Tech Partnerships',
      description: 'Collaborate for innovation.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=60',
      action: { text: 'Partner With Us', href: '/contact' },
    },
  ],
}

const sections: Section[] = [
  {
    title: 'Education',
    key: 'education',
    solutions: solutionsData.education,
    description: 'Empowering Ethiopia’s youth with cutting-edge skills in robotics, AI, and technology to lead globally.',
  },
  {
    title: 'Research & Development',
    key: 'globalTech',
    solutions: solutionsData.globalTech,
    description: 'Developing scalable technologies from Ethiopia to address global challenges.',
  },
  {
    title: 'Manufacturing',
    key: 'manufacturing',
    solutions: solutionsData.manufacturing,
    description: 'Revolutionizing production with smart, IoT-driven solutions for Ethiopia’s industrial future.',
  }
]

const Solutions: React.FC = () => {
  const SolutionCard = ({ solution }: { solution: Solution }) => (
    <div className="w-72 flex-shrink-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 snap-start">
      <img
        src={solution.image}
        alt={solution.title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-6">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {solution.title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {solution.description}
        </p>
        <a
          href={solution.action.href}
          className="inline-block px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all text-sm font-medium"
        >
          {solution.action.text}
        </a>
      </div>
    </div>
  )

  const Section = ({ section }: { section: Section }) => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [visibleIndex, setVisibleIndex] = useState(0)

    const cardWidth = 288 // w-72 (72 * 4px = 288px)
    const cardsPerView = 1 // Assuming 1 card visible at a time on mobile

    const scrollToIndex = (index: number) => {
      if (scrollRef.current) {
        const newScrollLeft = index * cardWidth
        scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
        setScrollLeft(newScrollLeft)
        setVisibleIndex(index)
      }
    }

    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft
        const newIndex = Math.round(scrollPosition / cardWidth)
        setVisibleIndex(newIndex)
        setScrollLeft(scrollPosition)
      }
    }

    const scrollLeftHandler = () => {
      const newIndex = Math.max(visibleIndex - 1, 0)
      scrollToIndex(newIndex)
    }

    const scrollRightHandler = () => {
      const newIndex = Math.min(visibleIndex + 1, section.solutions.length - cardsPerView)
      scrollToIndex(newIndex)
    }

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
      setIsDragging(true)
      setStartX(e.touches[0].pageX - scrollLeft)
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
      if (!isDragging) return
      const x = e.touches[0].pageX
      const walk = (x - startX) * 2
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = scrollLeft - walk
      }
    }

    const handleTouchEnd = () => {
      setIsDragging(false)
      if (scrollRef.current) {
        setScrollLeft(scrollRef.current.scrollLeft)
        handleScroll()
      }
    }

    useEffect(() => {
      const scrollElement = scrollRef.current
      if (scrollElement) {
        scrollElement.addEventListener('scroll', handleScroll)
        return () => scrollElement.removeEventListener('scroll', handleScroll)
      }
    }, [])

    const progressWidth = ((visibleIndex + cardsPerView) / section.solutions.length) * 100

    return (
      <div className="mb-12">
        <div className="px-4 sm:px-6 lg:px-8 mb-6">
          <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
            {section.title}
          </h3>
          <div className="flex justify-between items-center">
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl">
              {section.description}
            </p>
            <div className="flex gap-2">
              <button
                onClick={scrollLeftHandler}
                disabled={visibleIndex === 0}
                className="p-2 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 disabled:opacity-50"
                aria-label="Previous solution"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={scrollRightHandler}
                disabled={visibleIndex >= section.solutions.length - cardsPerView}
                className="p-2 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 disabled:opacity-50"
                aria-label="Next solution"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-4 sm:px-6 lg:px-8 no-scrollbar"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {section.solutions.map((solution, index) => (
            <SolutionCard key={index} solution={solution} />
          ))}
        </div>
        <div className="flex justify-center mt-4 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md h-1 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-600 transition-all duration-300"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-clip-text text-transparent bg-purple-600">
              Solutions
            </span>{' '}
            We’re Building
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ethronics is pioneering transformative solutions across education, manufacturing, and global technology, rooted in Ethiopian innovation for worldwide impact.
          </p>
        </div>
        {sections.map((section) => (
          <Section key={section.key} section={section} />
        ))}
      </div>
    </section>
  )
}

export default Solutions