/// <reference types="vite/client" />

// Declare the figma:asset module so TypeScript doesn't error on the import in Hero.tsx
declare module "figma:asset/*" {
  const src: string;
  export default src;
}
