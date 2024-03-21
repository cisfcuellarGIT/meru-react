/* Components */
import { Providers } from "@/lib/providers"
import Link from 'next/link'
import ImportProducts from '@/components/ImportProducts'
import Notifications from '@/components/Notifications'
import { inter, workSans } from '@/lib/helpers/fonts'

// tailwind global
import './globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
  <html lang="en">
    <body className="bg-gray-200">
      <header className="bg-blue-500 text-white py-4">
        <nav className="flex justify-between items-center container mx-auto">
          <h1 className="text-2xl font-bold">Meru Company</h1>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-200">Juan Cuellar</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container mx-auto py-8">
        <Notifications />
        <ImportProducts />
        <main>{props.children}</main>
      </div>
    </body>
  </html>
</Providers>

  );
}
