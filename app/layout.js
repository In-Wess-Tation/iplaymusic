import { useContext } from 'react'
import Footer from './components/footer, header og nav/Footer'
import FooterWrapper from './components/footer, header og nav/FooterWrapper'
import Header from './components/footer, header og nav/Header'
import PageWrapper from './components/PageWrapper'

import TokenContext from './contexts/TokenContext'

import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  const [token, setToken] = useState(null);

  return (
    <TokenContext.Provider value={{token, setToken}}>
    <html lang="en">
        <body className={`dark:bg-[#341931] bg-white dark:text-white ${poppins.className}`}>
          <PageWrapper>
            <Header />
            {children}
          </PageWrapper>
          <FooterWrapper /> 
          </body>
    </html>
    </TokenContext.Provider>
  )
}
