const buttonVariants = {
  base: "group inline-flex items-center gap-3 rounded-full p-btn-pad-2 transition-all duration-300",
  variants: {
    primary: "text-button-on-primary bg-button-primary",
    secondary:
      "text-button-on-secondary border border-button-secondary-border bg-button-secondary",
  },
  iconVariants: {
    primaryFill: "fill-button-on-primary",
    primaryStroke: "stroke-button-on-primary",
    secondaryFill: "fill-button-on-secondary",
    secondaryStroke: "stroke-button-on-secondary",
  },
};

export default buttonVariants;
