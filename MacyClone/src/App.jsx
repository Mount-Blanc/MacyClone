
import './App.css'

function App() {

  return (
    <>
     <header>
      <div className='heading-wrapper'>
        <div className='header-seperator'></div>
      <section className='search-rail'>logo
      <div className='search-container'>
        <form>
          <div>
            <input className='search-bar' placeholder='Search'/>
          </div>
        </form>
        </div>
        <div>wishlist</div>
        <div>Cart</div>
      </section>
      <section>
        <ul className='category-link'>
          <li>Women</li>
          <li>Men</li>
          <li>Kids</li>
          <li>Home</li>
          <li>Beauty</li>
          <li>Shoes</li>
          <li>Handbags</li>
          <li>Jewelry</li>
          <li>Furniture</li>
          <li>Toys</li>
          <li>Gifts</li>
          <li>Trending</li>



        </ul>
      </section>
      <div className='header-seperator'></div>
</div>
     </header>
<div className='footer-container'>
     <footer>footer
      <div className='footer-row1'>
        <div className='footer-row1-container'>
          <div className='footer-column'>
          <label>
            <ul>
              <h4>Customer Service</h4>
              <li>
                <a href=''>Contact Us</a>
              </li>
              <li>
                <a href=''>FAQs</a>
              </li> <li>
                <a href=''>Klarna</a>
              </li> <li>
                <a href=''>Order Lookup</a>
              </li> <li>
                <a href=''>Para Ayuda</a>
                <li>
                <a href=''>Returns</a>
              </li> <li>
                <a href=''>Shipping & Delivery</a>
              </li> <li>
                <a href=''>United States</a>
              </li>
              </li>
            </ul>
          </label>
          </div>
          
        </div>
      </div>
     </footer></div>
    </>
  )
}

export default App
