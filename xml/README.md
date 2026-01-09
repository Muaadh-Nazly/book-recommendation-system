# XML Directory

This directory contains XML data files used for dynamic content loading in the web application.

## 📁 Contents

### `Favorites.xml`

Contains favorite book data displayed on the Favorites page. The XML structure includes:

- **Item elements** - Each book/product item
- **Name** - Book/product name
- **Price** - Item price
- **Image** - Path to item image

## 📋 XML Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<items>
  <item>
    <name>Item Name</name>
    <price>$Price</price>
    <image>../images/image.webp</image>
  </item>
  ...
</items>
```

## 🔧 Usage

The XML file is loaded and parsed using JavaScript in `Favorites.js`:

1. **XML Loading** - Fetched via XMLHttpRequest or Fetch API
2. **Parsing** - XML content is parsed into DOM
3. **Display** - Content is dynamically inserted into HTML
4. **Styling** - CSS is applied to XML content

## ⚠️ Important Notes

### CORS Restrictions
- XML files may not load when opening HTML files directly (file:// protocol)
- Use a local web server to avoid CORS issues
- Modern browsers block local file access for security

### Server Setup
To properly load XML files:

```bash
# Start a local server
cd course\ work
python -m http.server 8000

# Access via: http://localhost:8000/html/Favorites.html
```

## 📝 XML Best Practices

- **Encoding:** UTF-8 for international characters
- **Structure:** Well-formed XML with proper nesting
- **Validation:** Ensure XML is valid before deployment
- **Paths:** Use relative paths for images

## 🔄 Future Enhancements

Potential improvements:
- [ ] XSLT transformation for styling
- [ ] XML Schema (XSD) for validation
- [ ] Multiple XML files for different data sets
- [ ] XML to JSON conversion for easier parsing
- [ ] Server-side XML generation

---

**Note:** This XML file is used to demonstrate web integration with XML data sources, a key requirement of the coursework.

