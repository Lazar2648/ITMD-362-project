ITMD-362 Final Project
Adam's Pizza - Website

OVERVIEW:
  I loosely based my design of a website I found after searching through numerous Pizza place websites. I had to simplify the page to fit project requirements. The restaurant's name is Antioch Pizza Shop, and can be found under "antiochpizzashop.com". My project is a simple single-page website for a fictional pizza place I called Adam's Pizza. All structure is in index.html, styling in style.css, and interactivity in script.js.

FILES:
  Files include index.html, style.css, script.js, images/ and README, as specified in the requirements. 

HTML AND CSS SUMMARY:
  The HTML is devided into 4 main sections. Those beiing the Intro (Welmcome text, image and "See Today's Specials" button), Today's Specials (3 Special Offer Cards with Images), Menu + Visit Us(menu preview with filters + address/hours/phone/storefront image) and Customer Feedback (simple feedback form). 
  For CSS .header, .intro-section, .menu-visit-section all use flexbox for two/three-column layouts.
  The .specials-grid uses CSS Grid for the specials card. The feedback form was styled to look like the example from class. 

JAVASCRYPT INTERACTIONS:
  1. Smooth scroll to specials: the button #see-specials-btn scrolls to the #sepcials section with scrollIntoView().
  2. Toggle special details: .special-details-btn button shows or hides the next .special-details paragraph and switch text between "View details" and "Hide details".
  3. Menu filter buttons: .menu-filter-btn buttons the filter .menu-items li elements by data-category="pizza" or "wings" or show all. The active filter also gets an .active-filter style
  4. Order now message: #order-btn sets a short message in #order-message explaining that ordering is by phone. 
  5. Customer Feedback form: The from #feedbackForm checks that the name and email are filled and that the email includes "@". If those requirements are not met then a red error message pops up under the inputs. If the form is valid then a green success message pops up instead.

  Challenges:

  The biggest challenges I faced was making sure that all the class/id names matched in all the files so that they interacted properly. Furthermore, figuring out how and where to set up Flexbox and Grid took me quite a while too. 