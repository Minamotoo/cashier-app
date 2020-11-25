import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function NotFound() {
  return (
    <div>
      <Header />
      <div className="container col-md-8 text-center">
        <h1>404 Not Found</h1>
        <h5 className="mb-10">The page is no longer exist.</h5>
      </div>
      <Footer />
    </div>
  )
}
