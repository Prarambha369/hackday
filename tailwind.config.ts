import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fly-across": {
          "0%": {
            transform: "translateX(0) rotate(-12deg)",
            opacity: "0.8",
          },
          "100%": {
            transform: "translateX(calc(100vw + 200px)) rotate(-5deg)",
            opacity: "1",
          },
        },
        "fly-north": {
          "0%": {
            transform: "translate(-50%, 0) scale(0)",
            opacity: "0",
          },
          "10%": {
            transform: "translate(-50%, 0) scale(1)",
            opacity: "0.6",
          },
          "100%": {
            transform: "translate(-50%, -150vh) scale(0.3)",
            opacity: "0",
          },
        },
        "fly-east": {
          "0%": {
            transform: "translate(-50%, 0) scale(0)",
            opacity: "0",
          },
          "10%": {
            transform: "translate(-50%, 0) scale(1)",
            opacity: "0.6",
          },
          "100%": {
            transform: "translate(150vw, 0) scale(0.3)",
            opacity: "0",
          },
        },
        "fly-west": {
          "0%": {
            transform: "translate(-50%, 0) scale(0)",
            opacity: "0",
          },
          "10%": {
            transform: "translate(-50%, 0) scale(1)",
            opacity: "0.6",
          },
          "100%": {
            transform: "translate(-150vw, 0) scale(0.3)",
            opacity: "0",
          },
        },
        "fly-northeast": {
          "0%": {
            transform: "translate(-50%, 0) scale(0)",
            opacity: "0",
          },
          "10%": {
            transform: "translate(-50%, 0) scale(1)",
            opacity: "0.6",
          },
          "100%": {
            transform: "translate(150vw, -150vh) scale(0.3)",
            opacity: "0",
          },
        },
        "fly-northwest": {
          "0%": {
            transform: "translate(-50%, 0) scale(0)",
            opacity: "0",
          },
          "10%": {
            transform: "translate(-50%, 0) scale(1)",
            opacity: "0.6",
          },
          "100%": {
            transform: "translate(-150vw, -150vh) scale(0.3)",
            opacity: "0",
          },
        },
        "fly-north-east-2": {
          "0%": {
            transform: "translate(-50%, 0) scale(0)",
            opacity: "0",
          },
          "10%": {
            transform: "translate(-50%, 0) scale(1)",
            opacity: "0.6",
          },
          "100%": {
            transform: "translate(100vw, -100vh) scale(0.3)",
            opacity: "0",
          },
        },
        "fly-north-west-2": {
          "0%": {
            transform: "translate(-50%, 0) scale(0)",
            opacity: "0",
          },
          "10%": {
            transform: "translate(-50%, 0) scale(1)",
            opacity: "0.6",
          },
          "100%": {
            transform: "translate(-100vw, -100vh) scale(0.3)",
            opacity: "0",
          },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px) rotate(-2deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0px) rotate(3deg)" },
          "50%": { transform: "translateY(-15px) rotate(-3deg)" },
        },
        "tilt": {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(22 87% 53% / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(22 87% 53% / 0.6)" },
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100px) rotate(-5deg)", opacity: "0" },
          "100%": { transform: "translateX(0) rotate(0deg)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100px) rotate(5deg)", opacity: "0" },
          "100%": { transform: "translateX(0) rotate(0deg)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "float": "float 4s ease-in-out infinite",
        "float-reverse": "float-reverse 5s ease-in-out infinite",
        "tilt": "tilt 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "wiggle": "wiggle 2s ease-in-out infinite",
        "slide-in-left": "slide-in-left 0.8s ease-out",
        "slide-in-right": "slide-in-right 0.8s ease-out",
        "fly-across": "fly-across 3s ease-in-out forwards",
        "fly-north": "fly-north 2.5s ease-out forwards",
        "fly-east": "fly-east 2.5s ease-out forwards",
        "fly-west": "fly-west 2.5s ease-out forwards",
        "fly-northeast": "fly-northeast 2.5s ease-out forwards",
        "fly-northwest": "fly-northwest 2.5s ease-out forwards",
        "fly-north-east-2": "fly-north-east-2 2.5s ease-out forwards",
        "fly-north-west-2": "fly-north-west-2 2.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
