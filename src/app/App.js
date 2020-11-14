import './App.css'
import Header from '../components/Header'
import BodyComponent from '../components/BodyComponent'
import Footer from '../components/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <BodyComponent />
      <Footer company='bbL' email='chestprime@gmail.com' />
    </div>
  )
}
