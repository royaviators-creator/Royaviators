declare module "*.jpeg" {
  const src: import("next/image").StaticImageData;
  export default src;
}
