import './globals.css'
import NavBar from './navbar/page'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar/>
      <main>{children}</main>
    </>
  )
}
