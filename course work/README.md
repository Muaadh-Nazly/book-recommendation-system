# Course Work Directory

This directory contains the main web application files for the Book Recommendation System.

## 📁 Structure

```
course work/
├── html/              # HTML pages
├── css/               # Stylesheets
├── javascript/        # JavaScript files
├── images/            # Image assets
├── videos/            # Video files
├── data.json          # Product data
└── README.md          # This file
```

## 📄 HTML Pages

All HTML pages are located in the `html/` directory:

- **Presentation.html** - Entry point, splash screen
- **Home.html** - Main navigation page
- **Signup.html** - User registration form
- **Gallery.html** - Interactive image gallery
- **ShoppingCart.html** - Product shopping page
- **Quiz.html, Quiz2.html** - Quiz pages
- **Scores.html** - Quiz results
- **Favorites.html** - Favorite books (XML-based)
- **NewsLetter.html** - Newsletter subscription
- **Comments.html** - Feedback form
- **Aboutus.html** - About page
- **[Editor].html** - Individual page editor pages

## 🎨 CSS Stylesheets

Modular CSS architecture in `css/` directory:

- **navigation.css** - Shared navigation styles (used across all pages)
- **Home.css** - Home page specific styles
- **Signup.css** - Signup form styles
- **Gallery.css** - Gallery page styles
- **Shoppingcart.css** - Shopping cart styles
- **quiz.css, Quiz2.css** - Quiz page styles
- **Favorites.css** - Favorites page styles
- **NewsLetter.css** - Newsletter page styles
- **Comments.css** - Comments form styles
- **Aboutus.css** - About page styles
- **[Editor].css** - Individual editor page styles

## ⚙️ JavaScript Files

JavaScript functionality in `javascript/` directory:

- **navigation.js** - Navigation menu functionality
- **Home.js** - Home page interactions
- **Signup.js** - Form validation and multi-step form logic
- **Gallery.js** - Gallery thumbnail interactions
- **ShoppingCart.js** - Shopping cart functionality
- **quiz.js, Quiz2.js** - Quiz logic and scoring
- **Favorites.js** - XML parsing and dynamic styling
- **NewsLetter.js** - Newsletter form validation
- **Comments.js** - Comments form handling
- **Aboutus.js** - About page scripts
- **[Editor].js** - Individual editor page scripts

## 🖼️ Images Directory

The `images/` directory contains:

- **Logo:** `ChapterLogoFix.jpg`
- **Book Covers:** Various book cover images (.webp format)
- **Product Images:** Book-related product images
- **Screenshots:** Documentation screenshots
- **Team Photos:** Individual team member photos
- **UI Elements:** Icons, buttons, backgrounds

### Image Formats
- `.webp` - Modern web format (recommended)
- `.jpg/.jpeg` - Standard format
- `.png` - For transparency needs
- `.avif` - Next-gen format

## 🎬 Videos Directory

The `videos/` directory contains:

- Video content for the home page
- Library/book-related video content
- Format: `.mp4`

## 📊 Data Files

### `data.json`
Contains product information for the shopping cart:
```json
{
  "title": "Product Name",
  "price": "Price",
  "desc": "Description",
  "rt": Rating,
  "image": "Image path"
}
```

## 🔗 File Relationships

### HTML → CSS
Each HTML page links to its corresponding CSS file:
```html
<link rel="stylesheet" href="../css/[PageName].css">
```

### HTML → JavaScript
Each HTML page includes its JavaScript file:
```html
<script src="../javascript/[PageName].js"></script>
```

### Shared Resources
- **navigation.css** - Used by all pages
- **Logo** - Displayed on all pages
- **Navigation structure** - Consistent across pages

## 🚀 Running the Application

### Method 1: Direct File Opening
1. Open `html/Presentation.html` in a web browser
2. Note: XML/JSON may not load due to CORS restrictions

### Method 2: Local Server (Recommended)
```bash
# Navigate to course work directory
cd course\ work

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if http-server installed)
npx http-server -p 8000

# Then open: http://localhost:8000/html/Presentation.html
```

## 📝 Development Notes

### File Naming Conventions
- HTML files: PascalCase (e.g., `Home.html`)
- CSS files: PascalCase matching HTML (e.g., `Home.css`)
- JavaScript files: PascalCase matching HTML (e.g., `Home.js`)
- Images: lowercase with hyphens or camelCase

### Path References
- All paths are relative to the `course work/` directory
- CSS/JS files use `../` to reference parent directory
- Images use `../images/` relative path
- Videos use `../videos/` relative path

### Best Practices
- ✅ External CSS and JavaScript files
- ✅ Semantic HTML5 elements
- ✅ Consistent naming conventions
- ✅ Modular file organization
- ✅ Comments in code for clarity

---

**Note:** This directory contains the complete frontend application. All pages are interconnected through navigation and share common resources.

