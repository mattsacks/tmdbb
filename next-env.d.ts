/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.svg" {
  const content: string;
  export default content;
}
