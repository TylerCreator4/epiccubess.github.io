import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Oblivity</title>
        <meta property="og:title" content="Oblivity" />
      </Helmet>
      <section className="home-hero">
        <div className="home-menu">
          <div id="mobile-menu" className="home-mobile-navigation">
            <img
              alt="pastedImage"
              src="/pastedimage-no9b-1500h.png"
              className="home-logo"
            />
            <div className="home-links">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div id="close-mobile-menu" className="home-close-mobile-menu">
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-desktop-navigation">
            <nav className="home-centered">
              <div className="home-left">
                <a
                  href="https://ixviixvi.github.io/dashboard/login"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <img
                    alt="pastedImage"
                    src="/photo_2023-10-30_14-28-56-removebg-preview-200h.png"
                    className="home-logo1"
                  />
                </a>
                <div className="home-links1">
                  <a
                    href="https://ixviixvi.github.io/dashboard/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1 Link"
                  >
                    Forums
                  </a>
                  <a
                    href="https://discord.gg/mVDmd3M9EW"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2 Link"
                  >
                    Discord
                  </a>
                  <a
                    href="mailto:GavinStrikescontact@proton.me?subject=Oblivity"
                    className="home-link3 Link"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="home-right">
                <a
                  href="https://ixviixvi.github.io/dashboard/login"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-sign-in Link"
                >
                  Sign in
                </a>
                <a
                  href="https://discord.gg/mVDmd3M9EW"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link4"
                >
                  <div className="home-get-started">
                    <span className="home-text03">Apply</span>
                  </div>
                </a>
                <div id="open-mobile-menu" className="home-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-yxbd.svg"
                    className="home-mobile-menu-button"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <div className="home-container2">
              <Script
                html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></Script>
            </div>
          </div>
        </div>
        <header className="home-header">
          <h1 className="home-text04">Introducing Oblivity</h1>
          <p className="home-text05">
            Oblivity is a private Roblox script executor offering an extensive
            range of functions that cater to a diverse array of user needs, all
            within a remarkably lightweight framework. Oblivity Started with 1
            developer and has maintained stable updates since beta testing.
          </p>
          <a
            href="https://discord.gg/mVDmd3M9EW"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link5"
          >
            <div className="home-get-started1">
              <span className="home-text06">Apply</span>
            </div>
          </a>
        </header>
        <div className="home-dashboard-preview">
          <div className="home-outline">
            <img
              alt="pastedImage"
              src="/gui-1000h.jpg"
              loading="lazy"
              className="home-image"
            />
          </div>
        </div>
      </section>
      <section className="home-features">
        <div className="home-title">
          <span className="home-text07">Why we stand out</span>
        </div>
        <div className="home-cards">
          <div className="home-container3">
            <div className="home-schedule card">
              <img
                alt="pastedImage"
                src="/pastedimage-fii6m-200h.png"
                className="home-icon02"
              />
              <span className="home-text08">Update Times</span>
              <span className="home-text09">
                Oblivity assures that you will experience consistently fast
                update times, eliminating concerns about delays and ensuring a
                seamless user experience.
              </span>
            </div>
            <div className="home-publish card">
              <img
                alt="pastedImage"
                src="/pastedimage-mimg-200h.png"
                className="home-icon03"
              />
              <span className="home-text10">Transparency</span>
              <span className="home-text11">
                Oblivity prides itself on its commitment to transparency. In the
                event of any unforeseen occurrences, we will promptly
                communicate with our users, ensuring timely and clear
                notifications.
              </span>
            </div>
          </div>
          <div className="home-container4">
            <div className="home-analyze card">
              <img
                alt="pastedImage"
                src="/pastedimage-l6p-200h.png"
                className="home-icon04"
              />
              <span className="home-text12">Downtime</span>
              <span className="home-text13">
                Oblivity demonstrates exceptional problem identification
                capabilities, swiftly diagnosing and addressing issues with
                remarkable efficiency.
              </span>
            </div>
            <div className="home-get-leads card">
              <img
                alt="pastedImage"
                src="/pastedimage-vyi5-200h.png"
                className="home-icon05"
              />
              <span className="home-text14">Lead on updates</span>
              <span className="home-text15">
                Oblivity provides you with the opportunity to stay ahead of new
                updates and actively contribute feedback before their official
                release, fostering a collaborative and proactive user engagement
                process.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-banners"></section>
      <section className="home-pricing">
        <div className="home-centered-container">
          <div className="home-heading">
            <span className="home-text16 title">
              Fair, no ridiculous prices
            </span>
            <span className="home-text17">
              <span>We want fair pricing, unlike other products.</span>
              <br></br>
              <br></br>
              <span>
                * you must have been approved for your oblivity application to
                get the product.
              </span>
              <br></br>
            </span>
            <div className="home-selection">
              <span className="home-text23">Free</span>
              <span className="home-text24">
                <span>Monthly</span>
                <br></br>
              </span>
              <span className="home-text27">Yearly</span>
            </div>
          </div>
          <div className="home-cards1">
            <div className="home-card">
              <span className="home-text28">Free</span>
              <span className="home-text29">
                Avail yourself of our complimentary plan, offering a selection
                of features tailored to suit various needs while maintaining a
                cost-effective approach.
              </span>
              <div className="home-get-started2 template-button">
                <span className="home-text30">Download</span>
              </div>
              <span className="home-text31">What&apos;s included</span>
              <div className="home-bullet-points">
                <div className="home-point">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text32">
                    <span>Aimbot</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-point01">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon08"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text35">Triggerbot</span>
                </div>
              </div>
            </div>
            <div className="home-card1">
              <span className="home-text36">
                <span>Monthly</span>
                <br></br>
              </span>
              <span className="home-text39">
                Access the complete array of features within Oblivity for a
                modest monthly fee of $5, providing you with a comprehensive and
                cost-effective solution.
              </span>
              <div className="home-get-started3 template-button">
                <span className="home-text40">
                  <span>Purchase</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text43">What&apos;s included</span>
              <div className="home-bullet-points1">
                <div className="home-point02">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text44">Script execution</span>
                </div>
                <div className="home-point03">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon12"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text45">HWID Changer</span>
                </div>
                <div className="home-point04">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon14"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text46">
                    Internal &amp; External UI
                  </span>
                </div>
                <div className="home-point05">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon16"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text47">Aimbot &amp; Trigger Bot</span>
                </div>
              </div>
            </div>
            <div className="home-card2">
              <span className="home-text48">Yearly</span>
              <span className="home-text49">
                Enjoy all the identical features available in our monthly
                subscription plan, but with the added benefit of long-term cost
                efficiency. For just $32 per year, you can secure access to the
                same amount of features, making it a highly cost-effective
              </span>
              <div className="home-get-started4 template-button">
                <span className="home-text50">
                  <span>Purchase</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text53">What&apos;s included</span>
              <div className="home-bullet-points2">
                <div className="home-point06">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon18"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text54">Script execution</span>
                </div>
                <div className="home-point07">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon20"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text55">HWID Changer</span>
                </div>
                <div className="home-point08">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon22"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text56">
                    Internal &amp; External UI
                  </span>
                </div>
                <div className="home-point09">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon24"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text57">
                    <span>Aimbot &amp; Trigger Bot</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-top">
          <div className="home-left1">
            <div className="home-contact">
              <span className="home-text60">Contact</span>
              <a
                href="mailto:use@active-app.com?subject=Support"
                className="home-link6"
              >
                <span className="home-text61">
                  GavinStrikescontact@proton.me
                </span>
                <br></br>
              </a>
            </div>
          </div>
          <div className="home-right1">
            <div className="home-category"></div>
          </div>
        </div>
        <div className="home-bottom">
          <img
            alt="pastedImage"
            src="/photo_2023-10-30_14-28-56-removebg-preview-200h.png"
            className="home-branding"
          />
          <span className="home-text63">
            Copyright © Oblivity Software LLC (2022 - 2023)
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Home
