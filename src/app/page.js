import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Palette, Target, Facebook, Twitter, Linkedin } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b  backdrop-blur ">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <FileText className="h-6 w-6" />
              <span className="hidden font-bold ml-5 sm:inline-block">SkillfulCV</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/">Home</Link>
              <Link href="/features">Features</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>
          <Button className="ml-auto" >
            <Link href="/CVform">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your Path to a Standout CV Begins Here
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Create a CV that highlights your strengths and lands you opportunities.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/CVform">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 items-center md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-white rounded-full dark:bg-gray-900">
                  <FileText className="h-10 w-10 text-blue-500" />
                </div>
                <h2 className="text-xl font-bold">Easy to Use</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Effortlessly create a professional CV without any design skills needed.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-white rounded-full dark:bg-gray-900">
                  <Palette className="h-10 w-10 text-blue-500" />
                </div>
                <h2 className="text-xl font-bold">Customizable Templates</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Choose from a variety of templates that suit your unique style and industry.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-white rounded-full dark:bg-gray-900">
                  <Target className="h-10 w-10 text-blue-500" />
                </div>
                <h2 className="text-xl font-bold">ATS-Optimized</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Get a CV that passes applicant tracking systems to reach hiring managers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-gray-300">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p>SkillfulCV is a trusted CV builder designed to help users create standout resumes.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="mb-4">support@skillfulcv.com</p>
              <div className="flex space-x-4">
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-sm text-center">
            © {new Date().getFullYear()} SkillfulCV. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}