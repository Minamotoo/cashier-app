import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Header />
      <div className="container-fluid d-flex justify-content-center">
        <div className="row px-3 py-3">
          <div className="col-sm-5 justify-content-center">
            <img
              className="img-fluid img-rounded"
              src="../images/restaurant/restaurant.jpg"
              alt="bbL"
            />
          </div>
          <div className="col">
            <h2>bbL's Restaurant</h2>
            <p className="text-secondary">
              Welcome to the Restaurant of bbL. <br />I hope you will enjoy here
              and if you have some question you can call me 123456789.
            </p>
            <p className="text-secondary">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </p>
          </div>
        </div>
      </div>
      <Footer company="bbL" email="chestprime@gmail.com" />
    </div>
  )
}
