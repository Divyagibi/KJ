# Keerikattu Jewellery Storefront

A high-end editorial digital gallery boutique for **Keerikattu Jewellery**, featuring pure sterling silver, exclusive rose gold, and premium coverings.

## Technologies Used
- **HTML5** (Semantic structure)
- **Tailwind CSS** (Utility-first styling, via CDN)
- **Vanilla CSS** (Custom transitions, layout overrides, editorial animations)
- **Vanilla JS** (Scroll-based parallax, dynamic header blur transitions, and navigation control)
- **Python** (Local development web server)

## Project Structure
```text
keerikkattu/
├── index.html                  # Main website landing page
├── README.md                   # Documentation and instructions
├── assets/
│   ├── css/
│   │   └── style.css           # Custom styles, animations, and gradients
│   ├── js/
│   │   └── main.js            # Scroll effects, parallax, and slider control
│   └── images/                 # Downloaded high-resolution offline images
│       ├── hero.jpg
│       ├── sterling_silver.jpg
│       ├── rose_gold.jpg
│       ├── gold_plated.jpg
│       ├── workshop.jpg
│       ├── product_cuff.jpg
│       ├── product_drops.jpg
│       └── product_aura.jpg
```

## Running the Website Locally

Since Python is installed on your computer, you can run the website using a local web server:

1. Open **PowerShell** or **Command Prompt** in the project directory (`c:\Users\user\Desktop\keerikkattu`).
2. Start Python's built-in HTTP server:
   ```bash
   python -m http.server 8000
   ```
3. Open your web browser and navigate to:
   ```
   http://localhost:8000
   ```

## Key Features & Visual Details
- **Editorial Typography**: Pairing high-contrast Playfair Display headings with Inter body text.
- **Micro-Animations**: Smooth text slide-up on entry, custom hover scaling on product cards, and a subtle parallax scroll on the main hero banner.
- **Dynamic Header**: The top navigation bar is transparent on load and dynamically fades in a glassmorphic blur when scrolling down.
