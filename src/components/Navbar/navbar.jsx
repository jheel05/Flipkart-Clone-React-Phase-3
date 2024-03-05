import '../Navbar/navbar.css';

function Navbar() {
  return (
    <div className=''> 
      <nav className="topnav">
        <div className="wrap">
          <img
            className="logo nav nav-title"
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus_mobile-39120d.svg"
            alt="Flipkart Logo"
          />
          <div className="nav">
            <div className="search nav-title">
              <button className="search-btn">
                <svg width="24" height="24" className="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>Search Icon</title>
                  <path
                    d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                    stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M16 16L21 21" stroke="#717478" strokeWidth="1.4" strokeLinecap="round"
                    strokeLinejoin="round">
                  </path>
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search for Products, Brands and More"
                id="search"
                
                // onInput="debouncedSearch(event)"
                className="input-srch"
              />
            </div>
            <ul id="searchResults"></ul>
            <script src="assets/JS/searchbox.js"></script>
          </div>
          <div className="dropdown nav">
            <a className="link" href="otplogin.html">
              <button className="dropbtn">
                <img
                  className="dropbtnimg"
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                />
                &nbsp; Login
              </button>
            </a>
            <div className="dropdown-content">
              <a href="#" title="Sign Up" className="sublinks border-b border-gray-300">
                <span>New customer?</span><span className="sign-up text-blue-700 float-right font-bold"> Sign Up</span></a>
              <a href="assets/Pages/form.html" className="sublinks">
                <img
                  className="li-img"
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                  alt="My Profile"
                  width="24"
                  height="24"
                />
                My Profile
              </a>
              <a href="#" className="sublinks">
                <img
                  className="li-img"
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg"
                  alt="Flipkart Plus Zone"
                  width="24"
                  height="24"
                />
                Flipkart Plus Zone
              </a>
              <a href="#" className="sublinks">
                <img
                  className="li-img"
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg"
                  alt="Orders"
                  width="24"
                  height="24"
                />
                Orders
              </a>
              <a href="#" className="sublinks">
                <img
                  className="li-img"
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/rewards-fbd212.svg"
                  alt="Rewards"
                  width="24"
                  height="24"
                />
                Rewards
              </a>
              <a href="#" className="sublinks">
                <img
                  className="li-img"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                  alt="Wishlist"
                  width="24"
                  height="24"
                />
                Wishlist
              </a>
              <a href="#" className="sublinks">
                <img
                  className="li-img"
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg"
                  alt="Gift Cards"
                  width="24"
                  height="24"
                />
                Gift Cards
              </a>
            </div>
          </div>
          <div className='nav '>
            <div className="Cart">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                alt="Cart"
              />
              <span>&nbsp;Cart</span>
            </div>
          </div>
          <div className='nav'>
          <div className="Seller">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
                alt="Store"
              />
              <span>&nbsp;Become a Seller</span>
            </div>
          </div>
          <div className="dropdown nav">
            <div className="dropbtn2" aria-hidden="true">
              <a
                title="Dropdown with more help links"
                aria-haspopup="true"
                href="#"
              >
                <img
                  className="-dOa_b"
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
                  width="24"
                  height="24"
                  alt="Dropdown with more help links"
                />
              </a>
            </div>
            <div className="dropdown-content right-0">
              <a href="#" className="sublinks">
                <img
                  className="li-img"
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg"
                  alt="24x7 Customer Care"
                  width="24"
                  height="24"
                />
                Notification
              </a>
              <a href="#" className="sublinks">
                <img
                  className="li-img"
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/helpcenter-7d90c0.svg"
                  alt="Ad-free Experience"
                  width="24"
                  height="24"
                />
                24x7 Customer Care
              </a>
              <a href="#" className="sublinks">
                <img
                  className="li-img"
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-298691.svg"
                  alt="Return Order"
                  width="24"
                  height="24"
                />
                Advertise
              </a>
              <a href="#" className="sublinks">
                <img
                  className="li-img"
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/downloadApp-2ea657.svg"
                  alt="Save For Later"
                  width="24"
                  height="24"
                />
                Download App
              </a>
            </div>
          </div>

          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
