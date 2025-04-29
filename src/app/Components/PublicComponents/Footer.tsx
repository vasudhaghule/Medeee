import Link from "next/link"
import { Twitter, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Image from "next/image";
import Logo from "../../../../public/assets/Logo.svg";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
          <Link href="/">
              {" "}
              <Image src={Logo.src} width={100} height={100} className="mb-6" alt="Logo" />
            </Link>
            <p className="text-sm text-gray-600 max-w-sm">
              Kalshi is a CFTC-regulated exchange where you can trade event contracts. We&apos;re building the world&apos;s first
              event trading platform.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Markets
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Forecasts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Trading
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-gray-600">
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:text-gray-900">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Cookie Policy
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Risk Disclosure
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p>© 2024 Kalshi Inc. All rights reserved.</p>
            <p className="text-xs">
              Trading on Kalshi involves risk and may not be appropriate for all. Members risk losing their cost to
              enter any transaction, including fees.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

