
import type { Config } from "tailwindcss";

export default {
  darkMode: ['class'],
  content: ['./index.html','./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0B0B0F',           // page background
        primary: '#f9dec9',        // headings, hero glow, card backgrounds (light)
        secondary: '#6e74af',      // body text, subtle accents
        ink: '#0B0B0F',            // text on light surfaces
        accent: '#4CC9F0',         // accent color
        // accent gradient endpoints
        accentA: '#4CC9F0',
        accentB: '#A084E8',
        // Legacy colors for compatibility
        background: '#0B0B0F',
        foreground: '#f9dec9',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        // Legacy font families for compatibility
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: { content: '1440px' },
      boxShadow: {
        card: '0 8px 30px rgba(0,0,0,0.35)',
        glow: '0 0 0 1px rgba(249,222,201,0.35), 0 10px 40px rgba(160,132,232,0.25)',
        // Legacy shadows for compatibility
        "modern": "0 4px 20px rgba(0, 0, 0, 0.25)",
        "glow": "0 0 20px rgba(76, 201, 240, 0.3), 0 0 40px rgba(76, 201, 240, 0.1)",
      },
      backgroundImage: {
        'accent-grad': 'linear-gradient(135deg, #4CC9F0 0%, #A084E8 100%)',
        'cream-grad': 'linear-gradient(180deg, rgba(249,222,201,0.15), rgba(249,222,201,0.02))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glow-primary': 'radial-gradient(circle at center, rgba(249,222,201,0.4), transparent 70%)',
        'glow-secondary': 'radial-gradient(circle at center, rgba(110,116,175,0.4), transparent 70%)',
        'mesh-gradient': 'linear-gradient(45deg, #f9dec9 0%, #6e74af 25%, #4CC9F0 50%, #A084E8 75%, #f9dec9 100%)',
      },
      backdropBlur: { xs: '2px' },
      transitionTimingFunction: { 'out-smooth': 'cubic-bezier(0.16,1,0.3,1)' },
      keyframes: {
        floaty: { '0%': {transform:'translateY(0)'}, '50%':{transform:'translateY(-8px)'}, '100%':{transform:'translateY(0)'} },
        pulseSoft: { '0%,100%': {opacity:.8}, '50%': {opacity:1} },
        // Legacy keyframes for compatibility
        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.6",
            boxShadow: "0 0 5px rgba(76, 201, 240, 0.5), 0 0 10px rgba(76, 201, 240, 0.3)"
          },
          "50%": {
            opacity: "1",
            boxShadow: "0 0 20px rgba(76, 201, 240, 0.8), 0 0 30px rgba(76, 201, 240, 0.6)"
          }
        },
        "logo-blink": {
          "0%, 90%": { opacity: "1" },
          "95%, 100%": { opacity: "0.3" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        "morph": {
          "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" }
        },
        "stagger": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "data-flow": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" }
        },
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        pulseSoft: 'pulseSoft 3.2s ease-in-out infinite',
        // Legacy animations for compatibility
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "logo-blink": "logo-blink 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "morph": "morph 8s ease-in-out infinite",
        "stagger": "stagger 0.6s ease-out",
        "count-up": "count-up 0.8s ease-out",
        "data-flow": "data-flow 3s ease-in-out infinite",
        'scroll-x': 'scroll-x 40s linear infinite',
      },
      transitionDuration: {
        "2000": "2000ms",
        "3000": "3000ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
