import "../Footer/footer.css";
import Anchor from "../AnchorTag/AnchorTag";

function Footer() {
  //TODO: 
  return (
    <footer className="mt-4">
      <div id="footer">
        <div>
          <li className="heading">ABOUT</li>
          <li>
            <Anchor
              href="https://corporate.flipkart.net/corporate-home"
              target="_blank"
            >
              About Us
            </Anchor>
          </li>
          <li>
            <Anchor
              href="https://www.flipkartcareers.com/?otracker=${otracker}_navlinks"
              target="_blank"
            >
              Career
            </Anchor>
          </li>
          <li>
            <Anchor href="http://stories.flipkart.com/" target="_blank">
              {" "}
              Flipkart Stories
            </Anchor>
          </li>
          <li>
            <Anchor href="https://www.cleartrip.com/" target="_blank">
              Cleartrip
            </Anchor>
          </li>
        </div>
        <div>
          <li className="heading">GROUP COMPANIES</li>
          <li>
            <Anchor href="https://www.myntra.com/" target="_blank">
              Myntra
            </Anchor>
          </li>
          <li>
            <Anchor href="https://www.flipkartwholesale.com/" target="_blank">
              Flipkart Wholesale
            </Anchor>
          </li>
          <li>
            <Anchor href="https://www.shopsy.in/" target="_blank">
              Shopsy
            </Anchor>
          </li>
          <li>
            <Anchor href="https://www.cleartrip.com/" target="_blank">
              Cleartrip
            </Anchor>
          </li>
        </div>
        <div>
          <li className="heading">HELP</li>
          <li>
            <Anchor
              href="https://www.flipkart.com/pages/payments"
              target="_blank"
            >
              Payments
            </Anchor>
          </li>
          <li>
            <Anchor
              href="https://www.flipkart.com/pages/shipping"
              target="_blank"
            >
              Shipping
            </Anchor>
          </li>
          <li>
            <Anchor
              href="https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG"
              target="_blank"
            >
              Cancellation & Returns
            </Anchor>
          </li>
          <li>
            <Anchor
              href="https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG"
              target="_blank"
            >
              FAQs
            </Anchor>
          </li>
        </div>
        <div className="mid">
          <li className="heading">CONUSMER POLICY</li>
          <li>
            <Anchor
              href="https://www.flipkart.com/pages/returnpolicy?otracker=${otracker}_navlinks"
              target="_blank"
            >
              Terms of Use
            </Anchor>
          </li>
          <li>
            <Anchor
              href="https://www.flipkart.com/pages/returnpolicy?otracker=${otracker}_navlinks"
              target="_blank"
            >
              Security
            </Anchor>
          </li>
          <li>
            <Anchor
              href="https://www.flipkart.com/pages/privacypolicy?otracker=${otracker}_navlinks"
              target="_blank"
            >
              Privacy
            </Anchor>
          </li>
          <li>
            <Anchor
              href="https://www.flipkart.com/sitemap?otracker=${otracker}_navlinks"
              target="_blank"
            >
              Sitemap
            </Anchor>
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
            />
            <Anchor href="https://seller.flipkart.com/" target="_blank">
              &nbsp;Become a Seller
            </Anchor>
          </div>
          <div className="c4gehN">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg"
              alt="Advertise"
              width="14"
              height="14"
            />
            <Anchor href="https://brands.flipkart.com" target="_blank">
              {" "}
              &nbsp;Advertise
            </Anchor>
          </div>
          <div className="c4gehN">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
              alt="Gift Cards"
              width="13"
              height="13"
            />
            <Anchor
              href="/the-gift-card-store?otracker=${otracker}_footer_navlinks"
              target="_blank"
            >
              {" "}
              &nbsp;Gift Cards
            </Anchor>
          </div>
          <div className="c4gehN">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"
              alt="Help Center"
              width="13"
              height="13"
            />
            <Anchor
              href="/helpcentre?otracker=${otracker}_footer_navlinks"
              target="_blank"
            >
              {" "}
              &nbsp;Help Center
            </Anchor>
          </div>
          <span className="pCGSTE">
            &#169; 2007-2024
            <span>&nbsp;Flipkart.com</span>
          </span>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
            alt="Payment methods"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
