import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Download,
  CheckCircle,
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#082F14] text-[#F5F5F5]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#4B6043] bg-[#082F14]/95 backdrop-blur supports-[backdrop-filter]:bg-[#082F14]/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-[#F5B800]" />
            <span className="text-xl font-bold text-[#F5F5F5]">
              Proffyemphy <span className="text-[#F5B800]">Ideal</span> Academy
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium text-[#F5F5F5] hover:text-[#F5B800]"
            >
              About
            </Link>
            <Link
              href="#courses"
              className="text-sm font-medium text-[#F5F5F5] hover:text-[#F5B800]"
            >
              Courses
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-[#F5F5F5] hover:text-[#F5B800]"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-[#F5F5F5] hover:text-[#F5B800]"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-[#F5F5F5] hover:text-[#F5B800]"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              className="bg-[#F5B800] text-[#082F14] hover:bg-[#FFD95B]"
              asChild
            >
              <Link href="#download">Download App</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#F5F5F5]">
                    Elevate Your{" "}
                    <span className="text-[#F5B800]">Science Education</span>{" "}
                    With Proffyemphy
                  </h1>
                  <p className="max-w-[600px] text-[#E0E0E0] md:text-xl">
                    Specialized learning platform for university science
                    students. Access expert-led courses, interactive materials,
                    and a supportive community.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-[#F5B800] text-[#082F14] hover:bg-[#FFD95B]"
                    asChild
                  >
                    <Link href="#download">
                      <Download className="mr-2 h-4 w-4" />
                      Download App
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#F5B800] text-[#F5B800] hover:bg-[#4B6043]"
                    asChild
                  >
                    <Link href="#contact">
                      Contact for Admission
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto aspect- overflow-hidden rounded-xl border-2 border-[#4B6043] bg-[#0A3A1A] p-2">
                <Image
                  src="/logo.png"
                  width={550}
                  height={550}
                  alt="App Preview"
                  className="mx-auto rounded-lg"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-[#082F14]/80 backdrop-blur-sm p-4">
                  <p className="text-sm font-medium text-[#F5F5F5]">
                    "The most comprehensive science learning platform for
                    university students"
                  </p>
                  <div className="mt-2 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-[#F5B800] text-[#F5B800]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#0A3A1A]"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#4B6043] px-3 py-1 text-sm text-[#F5F5F5]">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#F5F5F5]">
                  Why Choose{" "}
                  <span className="text-[#F5B800]">
                    Proffyemphy Ideal Academy
                  </span>
                </h2>
                <p className="max-w-[900px] text-[#E0E0E0] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We specialize in providing high-quality education for
                  university science students across all disciplines
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-[#082F14] border-[#4B6043] text-[#F5F5F5]">
                <CardHeader className="pb-2">
                  <GraduationCap className="h-12 w-12 text-[#F5B800] mb-2" />
                  <CardTitle className="text-[#F5F5F5]">
                    Expert Instructors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#E0E0E0]">
                    Learn from professors and industry experts with years of
                    experience in their fields.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#082F14] border-[#4B6043] text-[#F5F5F5]">
                <CardHeader className="pb-2">
                  <BookOpen className="h-12 w-12 text-[#F5B800] mb-2" />
                  <CardTitle className="text-[#F5F5F5]">
                    Comprehensive Courses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#E0E0E0]">
                    Access detailed course materials covering all major science
                    disciplines and topics.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#082F14] border-[#4B6043] text-[#F5F5F5]">
                <CardHeader className="pb-2">
                  <Users className="h-12 w-12 text-[#F5B800] mb-2" />
                  <CardTitle className="text-[#F5F5F5]">
                    Community Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#E0E0E0]">
                    Join a community of like-minded science students for
                    collaboration and support.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#082F14] border-[#4B6043] text-[#F5F5F5]">
                <CardHeader className="pb-2">
                  <Award className="h-12 w-12 text-[#F5B800] mb-2" />
                  <CardTitle className="text-[#F5F5F5]">
                    Recognized Certification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#E0E0E0]">
                    Earn certificates that are recognized by universities and
                    employers in the science field.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#4B6043] px-3 py-1 text-sm text-[#F5F5F5]">
                  Our Courses
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#F5F5F5]">
                  Specialized{" "}
                  <span className="text-[#F5B800]">Science Courses</span> for
                  University Students
                </h2>
                <p className="max-w-[900px] text-[#E0E0E0] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our wide range of courses designed specifically for
                  university science students
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-[#082F14] border-[#4B6043] text-[#F5F5F5] overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20240502160218/Physics.webp"
                    width={500}
                    height={300}
                    alt="Physics Course"
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="inline-block rounded-full bg-[#F5DEB3] px-3 py-1 text-xs text-[#082F14] font-medium">
                    Physics
                  </div>
                  <CardTitle className="text-[#F5F5F5] mt-2">
                    Advanced Quantum Mechanics
                  </CardTitle>
                  <CardDescription className="text-[#E0E0E0]">
                    Explore the fascinating world of quantum physics and its
                    applications
                  </CardDescription>
                </CardHeader>
                <CardFooter className="border-t border-[#4B6043] pt-4">
                  <Button
                    className="w-full bg-[#F5B800] text-[#082F14] hover:bg-[#FFD95B]"
                    asChild
                  >
                    <Link href="#download">Explore in App</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-[#082F14] border-[#4B6043] text-[#F5F5F5] overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="https://www.cambridgeonlineeducation.com/cdn/shop/products/chemistry_5863f74a-2d43-46d7-9149-738345f4019f_1024x1024.jpg?v=1591254829"
                    width={500}
                    height={300}
                    alt="Chemistry Course"
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="inline-block rounded-full bg-[#A5D6A7] px-3 py-1 text-xs text-[#082F14] font-medium">
                    Chemistry
                  </div>
                  <CardTitle className="text-[#F5F5F5] mt-2">
                    Organic Chemistry Masterclass
                  </CardTitle>
                  <CardDescription className="text-[#E0E0E0]">
                    Master the principles and reactions of organic chemistry
                  </CardDescription>
                </CardHeader>
                <CardFooter className="border-t border-[#4B6043] pt-4">
                  <Button
                    className="w-full bg-[#F5B800] text-[#082F14] hover:bg-[#FFD95B]"
                    asChild
                  >
                    <Link href="#download">Explore in App</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-[#082F14] border-[#4B6043] text-[#F5F5F5] overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20231110153856/Biology-copy.webp"
                    width={500}
                    height={300}
                    alt="Biology Course"
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="inline-block rounded-full bg-[#F5DEB3] px-3 py-1 text-xs text-[#082F14] font-medium">
                    Biology
                  </div>
                  <CardTitle className="text-[#F5F5F5] mt-2">
                    Molecular Biology & Genetics
                  </CardTitle>
                  <CardDescription className="text-[#E0E0E0]">
                    Understand the molecular basis of genetics and cellular
                    function
                  </CardDescription>
                </CardHeader>
                <CardFooter className="border-t border-[#4B6043] pt-4">
                  <Button
                    className="w-full bg-[#F5B800] text-[#082F14] hover:bg-[#FFD95B]"
                    asChild
                  >
                    <Link href="#download">Explore in App</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Button
                variant="outline"
                className="border-[#F5B800] text-[#F5B800] hover:bg-[#4B6043]"
                asChild
              >
                <Link href="#download">
                  View All Courses in App
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section
          id="download"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#0A3A1A]"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#4B6043] px-3 py-1 text-sm text-[#F5F5F5]">
                    Mobile App
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#F5F5F5]">
                    Download Our{" "}
                    <span className="text-[#F5B800]">Mobile App</span>
                  </h2>
                  <p className="max-w-[600px] text-[#E0E0E0] md:text-xl">
                    Access all our courses, materials, and community features on
                    the go with our mobile application.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button
                      size="lg"
                      className="bg-[#F5B800] text-[#082F14] hover:bg-[#FFD95B]"
                      asChild
                    >
                      <a href="/proffyemphy.apk">
                        <Download className="mr-2 h-4 w-4" />
                        Download APK (Android)
                      </a>
                    </Button>
                    {/* <Button
                      size="lg"
                      variant="outline"
                      className="border-[#F5B800] text-[#F5B800] hover:bg-[#4B6043]"
                      asChild
                    >
                      <Link href="#ios-download">
                        <Download className="mr-2 h-4 w-4" />
                        Download IPA (iOS)
                      </Link>
                    </Button> */}
                  </div>
                  <p className="text-sm text-[#E0E0E0]">
                    * For iOS users: You may need to follow additional
                    installation instructions after downloading the IPA file.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-[#4B6043] bg-[#082F14] p-4">
                    <h3 className="text-lg font-medium text-[#F5B800]">
                      Offline Access
                    </h3>
                    <p className="text-sm text-[#E0E0E0]">
                      Download courses for offline studying
                    </p>
                  </div>
                  <div className="rounded-lg border border-[#4B6043] bg-[#082F14] p-4">
                    <h3 className="text-lg font-medium text-[#F5B800]">
                      Interactive Quizzes
                    </h3>
                    <p className="text-sm text-[#E0E0E0]">
                      Test your knowledge on the go
                    </p>
                  </div>
                  <div className="rounded-lg border border-[#4B6043] bg-[#082F14] p-4">
                    <h3 className="text-lg font-medium text-[#F5B800]">
                      Live Sessions
                    </h3>
                    <p className="text-sm text-[#E0E0E0]">
                      Join live classes from anywhere
                    </p>
                  </div>
                  <div className="rounded-lg border border-[#4B6043] bg-[#082F14] p-4">
                    <h3 className="text-lg font-medium text-[#F5B800]">
                      Progress Tracking
                    </h3>
                    <p className="text-sm text-[#E0E0E0]">
                      Monitor your learning journey
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto">
                <div className="relative mx-auto w-[280px] h-[560px] rounded-[3rem] border-[14px] border-[#4B6043] bg-[#082F14] shadow-xl">
                  <div className="absolute top-0 inset-x-0 h-[32px] bg-[#4B6043] rounded-t-[1.5rem]"></div>
                  <div className="h-full w-full overflow-hidden rounded-[2rem] bg-[#082F14]">
                    <Image
                      src="/app-screenshot.png"
                      width={500}
                      height={1000}
                      alt="App Screenshot"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -right-12 top-1/4 rotate-12 rounded-xl bg-[#F5B800] p-4 text-[#082F14] shadow-lg">
                  <p className="text-sm font-bold">New courses added weekly!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#4B6043] px-3 py-1 text-sm text-[#F5F5F5]">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#F5F5F5]">
                  Affordable{" "}
                  <span className="text-[#F5B800]">Subscription Plans</span>
                </h2>
                <p className="max-w-[900px] text-[#E0E0E0] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that best fits your educational needs and
                  budget
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
              <Card className="bg-[#082F14] border-[#4B6043] text-[#F5F5F5]">
                <CardHeader>
                  <CardTitle className="text-[#F5F5F5]">Online</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-[#F5B800]">
                      ₦9.99
                    </span>
                    <span className="text-[#E0E0E0]">/semester</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#A5D6A7]" />
                      <span>Access to basic courses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#A5D6A7]" />
                      <span>Community forum access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#A5D6A7]" />
                      <span>Monthly webinars</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#A5D6A7]" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-[#F5B800] text-[#082F14] hover:bg-[#FFD95B]"
                    asChild
                  >
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-[#082F14] border-[#F5B800] text-[#F5F5F5] relative">
                <div className="absolute -top-4 inset-x-0 mx-auto w-fit rounded-full bg-[#F5B800] px-3 py-1 text-xs font-medium text-[#082F14]">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle className="text-[#F5F5F5]">Physical</CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-[#F5B800]">
                      ₦19.99
                    </span>
                    <span className="text-[#E0E0E0]">/semester</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#A5D6A7]" />
                      <span>Access to all courses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#A5D6A7]" />
                      <span>Community forum access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#A5D6A7]" />
                      <span>Weekly live Q&A sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#A5D6A7]" />
                      <span>Priority email support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#A5D6A7]" />
                      <span>Downloadable resources</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-[#F5B800] text-[#082F14] hover:bg-[#FFD95B]"
                    asChild
                  >
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-[#082F14] border-[#4B6043] text-[#F5F5F5]">
                <CardHeader>
                  <CardTitle className="text-[#F5F5F5]">
                    Physical + Online
                  </CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-[#F5B800]">
                      ₦29.99
                    </span>
                    <span className="text-[#E0E0E0]">/semester</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#A5D6A7]" />
                      <span>Access to all courses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#A5D6A7]" />
                      <span>Community forum access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#A5D6A7]" />
                      <span>Daily live sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#A5D6A7]" />
                      <span>24/7 priority support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#A5D6A7]" />
                      <span>Downloadable resources</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#A5D6A7]" />
                      <span>1-on-1 mentoring sessions</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-[#F5B800] text-[#082F14] hover:bg-[#FFD95B]"
                    asChild
                  >
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="text-center mt-8">
              <p className="text-[#E0E0E0] text-sm">
                All plans include access to our mobile app.{" "}
                <Link
                  href="#contact"
                  className="text-[#F5B800] underline underline-offset-2"
                >
                  Contact us
                </Link>{" "}
                for custom institutional pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#0A3A1A]"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#4B6043] px-3 py-1 text-sm text-[#F5F5F5]">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#F5F5F5]">
                  What Our <span className="text-[#F5B800]">Students Say</span>
                </h2>
                <p className="max-w-[900px] text-[#E0E0E0] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from science students across different universities
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-3">
              <Card className="bg-[#082F14] border-[#4B6043] text-[#F5F5F5]">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Student"
                      className="rounded-full border-2 border-[#F5B800]"
                    />
                    <div>
                      <CardTitle className="text-base text-[#F5F5F5]">
                        Michael Chen
                      </CardTitle>
                      <CardDescription className="text-[#E0E0E0]">
                        Physics Major, Stanford University
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-[#F5B800] text-[#F5B800]"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-[#E0E0E0]">
                    "Proffyemphy has been a game-changer for my quantum physics
                    studies. The instructors break down complex concepts in a
                    way that's easy to understand, and the practice problems
                    have helped me ace my exams."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#082F14] border-[#4B6043] text-[#F5F5F5]">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Student"
                      className="rounded-full border-2 border-[#F5B800]"
                    />
                    <div>
                      <CardTitle className="text-base text-[#F5F5F5]">
                        Sophia Rodriguez
                      </CardTitle>
                      <CardDescription className="text-[#E0E0E0]">
                        Chemistry Major, MIT
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-[#F5B800] text-[#F5B800]"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-[#E0E0E0]">
                    "The organic chemistry course on Proffyemphy helped me
                    understand reaction mechanisms that I was struggling with in
                    class. The 3D visualizations and step-by-step explanations
                    made all the difference."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#082F14] border-[#4B6043] text-[#F5F5F5]">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Student"
                      className="rounded-full border-2 border-[#F5B800]"
                    />
                    <div>
                      <CardTitle className="text-base text-[#F5F5F5]">
                        James Okonkwo
                      </CardTitle>
                      <CardDescription className="text-[#E0E0E0]">
                        Biology Major, Oxford University
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-[#F5B800] text-[#F5B800]"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-[#E0E0E0]">
                    "The molecular biology course is exceptional. The animations
                    of cellular processes and genetic mechanisms helped me
                    visualize concepts that textbooks couldn't explain clearly.
                    Highly recommended!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#4B6043] px-3 py-1 text-sm text-[#F5F5F5]">
                    Contact Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#F5F5F5]">
                    Ready to{" "}
                    <span className="text-[#F5B800]">Join Proffyemphy</span>?
                  </h2>
                  <p className="max-w-[600px] text-[#E0E0E0] md:text-xl">
                    Contact our admissions team to learn more about our courses
                    and how to enroll.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[#F5B800]" />
                    <span className="text-[#F5F5F5]">
                      admissions@proffyemphy.edu
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-[#F5B800]" />
                    <span className="text-[#F5F5F5]">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#F5B800]" />
                    <span className="text-[#F5F5F5]">
                      123 Science Avenue, Academic City, CA 94305
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <Link
                    href="#"
                    className="rounded-full bg-[#4B6043] p-2 text-[#F5F5F5] hover:bg-[#F5B800] hover:text-[#082F14]"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="rounded-full bg-[#4B6043] p-2 text-[#F5F5F5] hover:bg-[#F5B800] hover:text-[#082F14]"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="rounded-full bg-[#4B6043] p-2 text-[#F5F5F5] hover:bg-[#F5B800] hover:text-[#082F14]"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="rounded-full bg-[#4B6043] p-2 text-[#F5F5F5] hover:bg-[#F5B800] hover:text-[#082F14]"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg border border-[#4B6043] bg-[#082F14] p-6">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium text-[#F5F5F5]"
                      >
                        First name
                      </label>
                      <Input
                        id="first-name"
                        className="bg-[#0A3A1A] border-[#4B6043] text-[#F5F5F5] focus-visible:ring-[#F5B800]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium text-[#F5F5F5]"
                      >
                        Last name
                      </label>
                      <Input
                        id="last-name"
                        className="bg-[#0A3A1A] border-[#4B6043] text-[#F5F5F5] focus-visible:ring-[#F5B800]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-[#F5F5F5]"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-[#0A3A1A] border-[#4B6043] text-[#F5F5F5] focus-visible:ring-[#F5B800]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="university"
                      className="text-sm font-medium text-[#F5F5F5]"
                    >
                      University
                    </label>
                    <Input
                      id="university"
                      className="bg-[#0A3A1A] border-[#4B6043] text-[#F5F5F5] focus-visible:ring-[#F5B800]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-[#F5F5F5]"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      className="min-h-[120px] bg-[#0A3A1A] border-[#4B6043] text-[#F5F5F5] focus-visible:ring-[#F5B800]"
                    />
                  </div>
                  <Button className="w-full bg-[#F5B800] text-[#082F14] hover:bg-[#FFD95B]">
                    Send Message
                  </Button>
                  <p className="text-xs text-[#E0E0E0] text-center">
                    By submitting this form, you agree to our{" "}
                    <Link
                      href="#"
                      className="text-[#F5B800] underline underline-offset-2"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0A3A1A] border-t border-[#4B6043]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#F5F5F5]">
                  Ready to <span className="text-[#F5B800]">Excel</span> in Your
                  Science Studies?
                </h2>
                <p className="max-w-[600px] text-[#E0E0E0] md:text-xl/relaxed">
                  Download our app today and join thousands of science students
                  already benefiting from Proffyemphy Ideal Academy.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-[#F5B800] text-[#082F14] hover:bg-[#FFD95B]"
                  asChild
                >
                  <Link href="#download">
                    <Download className="mr-2 h-4 w-4" />
                    Download App
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#F5B800] text-[#F5B800] hover:bg-[#4B6043]"
                  asChild
                >
                  <Link href="#contact">Contact for Admission</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#4B6043] bg-[#082F14]">
        <div className="container flex flex-col py-10 md:flex-row md:py-8">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-[#F5B800]" />
              <span className="text-xl font-bold text-[#F5F5F5]">
                Proffyemphy <span className="text-[#F5B800]">Ideal</span>{" "}
                Academy
              </span>
            </div>
            <p className="text-sm text-[#E0E0E0] max-w-xs">
              Specialized education for university science students. Excellence
              in learning, excellence in science.
            </p>
            <div className="mt-4 flex gap-4">
              <Link href="#" className="text-[#E0E0E0] hover:text-[#F5B800]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-[#E0E0E0] hover:text-[#F5B800]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-[#E0E0E0] hover:text-[#F5B800]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#E0E0E0] hover:text-[#F5B800]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:w-2/3">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-[#F5B800]">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-sm text-[#E0E0E0] hover:text-[#F5B800]"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#courses"
                    className="text-sm text-[#E0E0E0] hover:text-[#F5B800]"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-sm text-[#E0E0E0] hover:text-[#F5B800]"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-sm text-[#E0E0E0] hover:text-[#F5B800]"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-sm text-[#E0E0E0] hover:text-[#F5B800]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-[#F5B800]">Courses</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-[#E0E0E0] hover:text-[#F5B800]"
                  >
                    Physics
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-[#E0E0E0] hover:text-[#F5B800]"
                  >
                    Chemistry
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-[#E0E0E0] hover:text-[#F5B800]"
                  >
                    Biology
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-[#E0E0E0] hover:text-[#F5B800]"
                  >
                    Mathematics
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-[#E0E0E0] hover:text-[#F5B800]"
                  >
                    Computer Science
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-[#F5B800]">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-[#E0E0E0] hover:text-[#F5B800]"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-[#E0E0E0] hover:text-[#F5B800]"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-[#E0E0E0] hover:text-[#F5B800]"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#4B6043] py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-xs text-[#E0E0E0]">
              &copy; {new Date().getFullYear()} Proffyemphy Ideal Academy. All
              rights reserved.
            </p>
            <p className="text-center text-xs text-[#E0E0E0]">
              Designed with 💚 for science students worldwide
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
