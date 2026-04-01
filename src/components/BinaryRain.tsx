import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

/* 
===== BINARY RAIN BACKGROUND =====
A Matrix-style falling binary (0s and 1s) animation for section backgrounds.
Used in About, Projects, Skills, Certifications, and Contact sections.

TO CUSTOMIZE:
- Speed: Change interval value in setInterval (line 48)
- Opacity: Change opacity-10 in className (line 65)
- Color: Change fillStyle color (line 33)
- Density: Change fontSize value (line 19)
*/

export function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to full window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Binary characters: only 0s and 1s
    const binary = "01";
    
    // Font size controls density of rain
    // Smaller = more columns, denser effect
    const fontSize = 14;
    
    // Calculate number of columns based on canvas width
    const columns = canvas.width / fontSize;
    
    // Array to track position of each column's drop
    const drops: number[] = [];

    // Initialize drops at random positions above the screen
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100; // Start above viewport
    }

    // Main drawing function
    function draw() {
      if (!ctx || !canvas) return;
      
      // Create fade trail effect - different for light/dark mode
      // Lower alpha value = longer trails
      if (theme === 'dark') {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      } else {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color based on theme
      // Dark mode: Kali Linux green, Light mode: darker blue-green
      ctx.fillStyle = theme === 'dark' ? '#00ff41' : '#3b82f6';
      ctx.font = fontSize + 'px monospace';

      // Draw each column
      for (let i = 0; i < drops.length; i++) {
        // Pick random binary character (0 or 1)
        const text = binary[Math.floor(Math.random() * binary.length)];
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top when it reaches bottom
        // Math.random() > 0.975 adds randomness (97.5% chance to reset)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move drop down
        drops[i]++;
      }
    }

    // Animation speed: lower = faster, higher = slower
    const interval = setInterval(draw, 35);

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      // fixed: stays in place while scrolling
      // opacity-10: very subtle (10% opacity)
      // pointer-events-none: clicks pass through
      // z-0: behind content
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-10 z-0"
    />
  );
}

/* 
===== CUSTOMIZATION GUIDE =====

CHANGE SPEED:
- Line 80: Change interval value
  - Lower = Faster (e.g., 25)
  - Higher = Slower (e.g., 50)
  - Current: 35

CHANGE VISIBILITY:
- Line 107: Change opacity-10
  - opacity-5: Very subtle
  - opacity-10: Subtle (current)
  - opacity-20: More visible
  - opacity-30: Very visible

CHANGE COLOR:
- Line 68: Change fillStyle color
  - '#00ff41': Kali green (current)
  - '#00ffff': Cyan
  - '#ffffff': White
  - Any hex color

CHANGE DENSITY:
- Line 32: Change fontSize
  - Smaller font = More columns = Denser
  - Larger font = Fewer columns = Sparse
  - Current: 14

CHANGE TRAIL LENGTH:
- Line 65: Change alpha in rgba(0, 0, 0, 0.05)
  - Lower alpha (0.02) = Longer trails
  - Higher alpha (0.1) = Shorter trails
  - Current: 0.05

ADD CYAN BINARY (Alternate colors):
Replace line 68 with:
  ctx.fillStyle = Math.random() > 0.5 ? '#00ff41' : '#00ffff';
This will randomly use green OR cyan for each character
*/