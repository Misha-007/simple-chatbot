import Review from "../components/Review";
export const steps = [
  {
    id: "1",
    message:
      "Thank you for visiting Chicken-nini. How may I help you? These are our Selection options:",
    trigger: "order",
  },
  {
    id: "order",
    options: [
      { value: "Burger", label: "Burger🍔", trigger: "Burger" },
      { value: "Pasta", label: "Pasta🍝", trigger: "Pasta" },
      { value: "Chicken", label: "Chicken🍗", trigger: "Chicken" },
    ],
  },
  {
    id: "Burger",
    message:
      "Burger is a great choice! would you like sundae or fries with it?",
    trigger: "snack",
  },
  {
    id: "Pasta",
    message: "Pasta is a great choice! would you like sundae or fries with it?",
    trigger: "snack",
  },
  {
    id: "Chicken",
    message: "Chicken is a great choice! would you like sundae with that?",
    trigger: "addOn",
  },
  {
    id: "snack",
    options: [
      { value: "Sundae", label: "Sundae", trigger: "drinks-prompt" },
      { value: "Fries", label: "Fries", trigger: "addOn-prompt" },
    ],
  },
  {
    id: "addOn-prompt",
    message: "Would you like to add Sundae with That??",
    trigger: "addOn",
  },
  {
    id: "addOn",
    options: [
      { value: "Sundae", label: "Yes", trigger: "drinks-prompt" },
      { value: "None", label: "No", trigger: "drinks-prompt" },
    ],
  },
  {
    id: "drinks-prompt",
    message: "Would you like soft drinks or iced tea?",
    trigger: "drinks",
  },
  {
    id: "drinks",
    options: [
      {
        value: "Soft Drinks",
        label: "Soft Drinks",
        trigger: "size-prompt",
      },
      { value: "Iced Tea", label: "Iced Tea", trigger: "size-prompt" },
    ],
  },
  {
    id: "size-prompt",
    message: "What size would you like?",
    trigger: "size",
  },
  {
    id: "size",
    options: [
      { value: "Regular", label: "Regular", trigger: "2" },
      { value: "Medium", label: "Medium", trigger: "2" },
      { value: "Large", label: "Large", trigger: "2" },
    ],
  },
  {
    id: "2",
    component: <Review />,
    asMessage: true,
    trigger: "addOn2-prompt",
  },
  {
    id: "addOn2-prompt",
    message: "Would you like to add Pie with That??",
    trigger: "addOn2",
  },
  {
    id: "addOn2",
    options: [
      { value: "Pie", label: "Yes", trigger: "3" },
      { value: "None", label: "No", trigger: "3" },
    ],
  },
  {
    id: "3",
    component: <Review />,
    asMessage: true,
    trigger: "update",
  },
  {
    id: "update",
    message: "Would you like to update your order?",
    trigger: "update-question",
  },
  {
    id: "update-question",
    options: [
      { value: "yes", label: "Yes", trigger: "update-yes" },
      { value: "no", label: "No", trigger: "end-message" },
    ],
  },
  {
    id: "update-yes",
    message: "What part would you like to update?",
    trigger: "update-fields",
  },
  {
    id: "update-fields",
    options: [
      { value: "order", label: "Order", trigger: "update-order-prompt" },
      { value: "snack", label: "Snack", trigger: "update-snack-prompt" },
      { value: "drinks", label: "Drinks", trigger: "update-drinks-prompt" },
      { value: "size", label: "Size", trigger: "update-size-prompt" },
      { value: "addOn", label: "Add On", trigger: "update-addOn-prompt" },
      { value: "addOn2", label: "Pie", trigger: "update-addOn2-prompt" },
    ],
  },
  {
    id: "update-order-prompt",
    message: "What would you like to change your order to?",
    trigger: "update-order",
  },
  {
    id: "update-order",
    update: "order",
    trigger: "3",
  },
  {
    id: "update-snack-prompt",
    message: "What would you like to change your snack to?",
    trigger: "update-snack",
  },
 
  {
    id: "update-snack",
    update: "snack",
    trigger: "3",
  },
  {
    id: "update-drinks-prompt",
    message: "What would you like to change your drinks to?",
    trigger: "update-drinks",
  },
  {
    id: "update-drinks",
    update: "drinks",
    trigger: "3",
  },
  {
    id: "update-size-prompt",
    message: "What would you like to change your size to?",
    trigger: "update-size",
  },
  {
    id: "update-size",
    update: "size",
    trigger: "3",
  },
  {
    id: "update-addOn-prompt",
    message: "Would you like to add Sundae with That??",
    trigger: "update-addOn",
  },
  {
    id: "update-addOn",
    update: "addOn",
    trigger: "3",
  },
  {
    id: "update-addOn2-prompt",
    message: "Would you like to add Pie with That??",
    trigger: "update-addOn2",
  },
  {
    id: "update-addOn2",
    update: "addOn2",
    trigger: "3",
  },
  {
    id: "end-message",
    message: "Thanks! Your order will be ready shortly! :)",
    end: true,
  },
];
