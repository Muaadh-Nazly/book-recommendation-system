# Book Recommendation System - CHAPTER

## 📋 Project Overview

A comprehensive **web-based AI recommendation system** for books, built with HTML, CSS, and JavaScript. The application provides an interactive platform for book enthusiasts to discover personalized book recommendations, browse galleries, take quizzes, and purchase book-related products.

**Project Name:** CHAPTER
**Team Members:** Lakshan, Yasini, Praveen, Muaadh

## ✨ Key Features

### Core Functionality
- ✅ **Presentation Page** - Splash screen with 5-second countdown
- ✅ **Main/Home Page** - Navigation hub with embedded video
- ✅ **Sign-up Form** - Multi-step form with user preferences and JavaScript validation
- ✅ **Gallery Page** - Interactive image gallery with thumbnail navigation
- ✅ **Shopping Cart** - Book-related products with JSON data integration
- ✅ **Favorites Page** - XML-based favorite books display with dynamic styling
- ✅ **Quiz System** - Interactive JavaScript quiz with scoring
- ✅ **Newsletter Sign-up** - Subscription form with validation
- ✅ **Comments/Feedback** - User feedback form with rating system
- ✅ **About Us** - Team information and page editor details

### Technical Highlights
- **JavaScript Validation** - Custom validation (no HTML5 validation)
- **XML Integration** - Dynamic content loading from XML files
- **JSON Data** - Product information stored in JSON format
- **Responsive Design** - CSS-based responsive layouts
- **External Stylesheets** - Consistent styling across all pages
- **Interactive Elements** - Hover effects, color changers, font size controls
- **Accessibility** - WCAG compliance considerations

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Data Formats:** XML, JSON
- **Styling:** External CSS with modular architecture
- **Validation:** Custom JavaScript validation
- **Accessibility:** WAVE, Color Contrast Checker

## 📁 Project Structure

```
CM 1605 Web Technology/
├── course work/
│   ├── html/                          # HTML pages
│   │   ├── Presentation.html         # Splash screen
│   │   ├── Home.html                  # Main page
│   │   ├── Signup.html                # User registration
│   │   ├── Gallery.html               # Image gallery
│   │   ├── ShoppingCart.html          # Product shopping
│   │   ├── Quiz.html, Quiz2.html     # Quiz pages
│   │   ├── Scores.html                # Quiz results
│   │   ├── Favorites.html             # Favorite books (XML)
│   │   ├── NewsLetter.html            # Newsletter signup
│   │   ├── Comments.html              # Feedback form
│   │   ├── Aboutus.html               # About page
│   │   └── [Editor pages].html        # Individual editor pages
│   ├── css/                           # Stylesheets
│   │   ├── navigation.css             # Main navigation styles
│   │   ├── Home.css                   # Home page styles
│   │   ├── Signup.css                 # Signup form styles
│   │   ├── Gallery.css                # Gallery styles
│   │   ├── Shoppingcart.css           # Shopping cart styles
│   │   ├── quiz.css, Quiz2.css       # Quiz styles
│   │   ├── Favorites.css              # Favorites page styles
│   │   ├── NewsLetter.css             # Newsletter styles
│   │   ├── Comments.css               # Comments form styles
│   │   ├── Aboutus.css                # About page styles
│   │   └── [Editor].css               # Individual editor styles
│   ├── javascript/                    # JavaScript files
│   │   ├── navigation.js              # Navigation functionality
│   │   ├── Home.js                    # Home page scripts
│   │   ├── Signup.js                  # Form validation
│   │   ├── Gallery.js                 # Gallery interactions
│   │   ├── ShoppingCart.js            # Shopping cart logic
│   │   ├── quiz.js, Quiz2.js          # Quiz functionality
│   │   ├── Favorites.js               # XML parsing & styling
│   │   ├── NewsLetter.js              # Newsletter validation
│   │   ├── Comments.js                # Comments form handling
│   │   ├── Aboutus.js                 # About page scripts
│   │   └── [Editor].js                # Individual editor scripts
│   ├── images/                        # Image assets
│   │   ├── ChapterLogoFix.jpg         # Logo
│   │   ├── [Book covers].webp         # Book images
│   │   ├── [Product images].webp      # Product images
│   │   └── [Screenshots].png           # Documentation images
│   ├── videos/                        # Video assets
│   │   └── [Library video].mp4        # Home page video
│   └── data.json                      # Product data
├── xml/
│   └── Favorites.xml                  # Favorite books data
├── CM1605 CourseworkSpecification.pdf # Project specification
└── README.md                          # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for XML/JSON loading)
- Text editor or IDE (VS Code, Sublime Text, etc.)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd book-recommendation-system
   ```

2. **Open the project**
   - Option 1: Open `course work/html/Presentation.html` directly in a browser
   - Option 2: Use a local server (recommended for XML/JSON):
     ```bash
     # Using Python 3
     cd "course work"
     python -m http.server 8000

     # Then navigate to: http://localhost:8000/html/Presentation.html
     ```

3. **Start the application**
   - Open `Presentation.html` in your browser
   - The splash screen will automatically redirect to `Home.html` after 5 seconds

## 📄 Page Descriptions

### Presentation Page
- Splash screen with project logo and team names
- 5-second countdown timer
- Automatic redirect to main page

### Home Page
- Main navigation hub with button-style links
- Embedded video related to books/libraries
- Hover effects on navigation buttons
- Consistent header with logo

### Sign-up Page
- Multi-step form (Personal Details → Preferences)
- JavaScript validation for all required fields
- User preferences: genres, language, price range
- Success alert with personalized message

### Gallery Page
- 5 thumbnail images
- Large image display area
- Dynamic description updates
- Interactive thumbnail selection (onMouseOver or radio buttons)

### Shopping Cart
- Product listing from JSON data
- Book-related accessories and products
- Product details, prices, and images
- Shopping functionality

### Quiz Pages
- Interactive JavaScript quiz
- Multiple choice questions
- Score calculation and display
- Progress tracking

### Favorites Page
- XML-based book list display
- Dynamic background and text color changer
- CSS styling for XML content
- Pull-down menu controls

### Newsletter Page
- Subscription form
- JavaScript validation (name, email)
- Email format validation
- Success confirmation popup

### Comments Page
- Feedback form with rating system
- User details input
- Rating selection (radio buttons or select)
- Form reset functionality
- JavaScript validation

### About Us Page
- Team member information
- Page editor details
- Project information

## 🎨 Design Features

### Navigation
- Button-style links with hover effects
- Consistent navigation across all pages
- Logo/title on every page
- Page editor links at bottom

### Styling
- External CSS for consistency
- Modular CSS architecture
- Responsive design considerations
- Color scheme and typography

### Interactivity
- JavaScript form validation
- Dynamic content loading
- Interactive galleries
- Color and font size controls
- Hover effects and transitions

## 🔒 Validation Rules

All forms use **JavaScript validation** (not HTML5):

### Sign-up Form
- **Personal Details:** Name, Username, Occupation, Email, Age, Gender (all required)
- **Preferences:** At least one genre, language selection, price range
- **Items Count:** Number of items to display

### Newsletter Form
- **Name:** Required field
- **Email:** Required and valid email format

### Comments Form
- **Name:** Required
- **Email:** Required
- **Rating:** Required selection

## 📊 Data Files

### `data.json`
Contains product information for the shopping cart:
- Product titles
- Prices
- Descriptions
- Ratings
- Image paths

### `Favorites.xml`
Contains favorite book data:
- Book names
- Prices
- Image paths
- Structured XML format

## 🧪 Testing

### Browser Compatibility
Tested on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Validation Testing
- All JavaScript validations tested
- Form submission prevention on invalid input
- Success alerts verified
- XML/JSON loading tested

### Accessibility
- Color contrast checked (snook.ca)
- WAVE accessibility evaluation
- Form labels and structure
- Image alt text

## 🏗️ Architecture

### File Organization
- **Separation of Concerns:** HTML, CSS, JavaScript in separate files
- **Modular CSS:** Individual stylesheets per page
- **Shared Resources:** Common navigation and logo
- **Data Separation:** XML and JSON for dynamic content

### Code Structure
- **HTML:** Semantic markup
- **CSS:** External stylesheets with consistent naming
- **JavaScript:** Event-driven, modular functions
- **Validation:** Custom JavaScript (no HTML5)

## 🎯 Features by Team Member

### Student 1 Tasks
- Presentation page with countdown
- Sign-up form with preferences
- Gallery page with thumbnails
- Page editor page

### Student 2 Tasks
- Main page design and navigation
- External CSS stylesheet creation
- Comments/feedback form
- JavaScript quiz
- Video integration

### Student 3 Tasks
- Shopping cart page
- Font size changer
- About Us page
- Additional interactivity

### Student 4 Tasks
- Favorites page (XML integration)
- Background/text color changer
- Newsletter sign-up form
- Pull-down menu controls
