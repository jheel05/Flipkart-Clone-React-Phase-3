
import '../Footer/footer.css';

function Footer() {
    return (
    <footer className='mt-4'>
      <div id="footer">
        <div>
          <li className="heading">ABOUT</li>
          <li>
            <a
              href="https://corporate.flipkart.net/corporate-home"
              target="_blank"
              >About Us</a
            >
          </li>
          <li>
            <a
              href="https://www.flipkartcareers.com/?otracker=${otracker}_navlinks"
              target="_blank"
              >Career</a
            >
          </li>
          <li>
            <a href="http://stories.flipkart.com/" target="_blank"
              >Flipkart Stories</a
            >
          </li>
          <li>
            <a href="https://www.cleartrip.com/" target="_blank">Cleartrip</a>
          </li>
        </div>
        <div>
          <li className="heading">GROUP COMPANIES</li>
          <li>
            <a href="https://www.myntra.com/" target="_blank">Myntra</a>
          </li>
          <li>
            <a href="https://www.flipkartwholesale.com/" target="_blank"
              >Flipkart Wholesale</a
            >
          </li>
          <li><a href="https://www.shopsy.in/" target="_blank">shopsy</a></li>
          <li>
            <a href="https://www.cleartrip.com/" target="_blank">Cleartrip</a>
          </li>
        </div>
        <div>
          <li className="heading">HELP</li>
          <li>
            <a href="https://www.flipkart.com/pages/payments" target="_blank"
              >Payments</a
            >
          </li>
          <li>
            <a href="https://www.flipkart.com/pages/shipping" target="_blank"
              >Shipping</a
            >
          </li>
          <li>
            <a
              href="https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG"
              target="_blank"
              >FAQs</a
            >
          </li>
          <li>
            <a
              href="https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG"
              target="_blank"
              >Cancellation and Returns</a
            >
          </li>
        </div>
        <div className="mid">
          <li className="heading">CONUSMER POLICY</li>
          <li>
            <a
              href="https://www.flipkart.com/pages/terms?otracker=${otracker}_navlinks"
              target="_blank"
              >Terms of Use</a
            >
          </li>
          <li>
            <a
              href="https://www.flipkart.com/pages/paymentsecurity?otracker=${otracker}_navlinks"
              target="_blank"
              >Security</a
            >
          </li>
          <li>
            <a
              href="https://www.flipkart.com/pages/privacypolicy?otracker=${otracker}_navlinks"
              target="_blank"
              >Privacy</a
            >
          </li>
          <li>
            <a
              href="https://www.flipkart.com/sitemap?otracker=${otracker}_navlinks"
              target="_blank"
              >Site Map</a
            >
          </li>
        </div>

        <div>
          <li className="heading">Registered Office Address:</li>
          <li>Flipkart Internet Private Limited,</li>
          <li>Buildings Alyssa, Begonia &</li>
          <li>Clove Embassy Tech Village,</li>
          <li>Outer Ring Road, Devarabeesanahalli Village,</li>
          <li>Bengaluru, 560103, Karnataka, India</li>
        </div>
      </div>
      <div>
        <div className="bottom-footer">
          <div className="c4gehN">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
              alt="Become a Seller"
              width="13"
              height="12"
            /><a
              href="https://seller.flipkart.com/"
              aria-label="Become a Seller"
              target="_blank"
              ><span>&nbsp;Become a Seller</span></a
            >
          </div>
          <div className="c4gehN">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg"
              alt="Advertise"
              width="14"
              height="14"
            /><a
              href="https://brands.flipkart.com"
              aria-label="Advertise"
              target="_blank"
              ><span>&nbsp;Advertise</span></a
            >
          </div>
          <div className="c4gehN">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
              alt="Gift Cards"
              width="13"
              height="13"
            /><a
              href="/the-gift-card-store?otracker=${otracker}_footer_navlinks"
              aria-label="Gift Cards"
              target="_blank"
              ><span>&nbsp;Gift Cards</span></a
            >
          </div>
          <div className="c4gehN">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"
              alt="Help Center"
              width="13"
              height="13"
            /><a
              href="/helpcentre?otracker=${otracker}_footer_navlinks"
              aria-label="Help Center"
              target="_blank"
              ><span>&nbsp;Help Center</span></a
            >
          </div>
          <span className="pCGSTE"
            >&#169; 2007-2024
            <span>&nbsp;Flipkart.com</span></span
          ><img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
            alt="Payment methods"
          />
        </div>
      </div>
    </footer>
    );
}

export default Footer;
