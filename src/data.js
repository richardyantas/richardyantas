export const noExpandable = `nav-button.png`;
export const expandable = `nav-button_right-arrow.png`;
export const expanded = `nav-button_bottom-arrow.png`;

export const MENU = [
  {
    id: "1",
    name: "Home",
    children: [],
    url:
      "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2",
  },
  {
    id: "2",
    name: "Projects",
    children: [
      {
        id: "3",
        name: "project1",
        children: [],
        // children: [
        //   {
        //     name: "project11",
        //     children: [],
        //     status: noExpandable,
        //     url:
        //       "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2",
        //   },
        // ],
        url:
          "https://notion-api.splitbee.io/v1/page/c8161c2503784801ba280b228dbdc8f9",
      },
      {
        name: "project2",
        id: "4",
        children: [],
        url:
          "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2",
      },
    ],
  },
  {
    name: "Posts",
    id: "6",
    children: [
      {
        name: "Cloud Computing",
        children: [],
        url:
          "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2",
      },
      {
        name: "Cloud Computing",
        children: [],
        url:
          "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2",
      },
      {
        name: "Cloud Computing",
        children: [],
        url:
          "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2",
      },
      {
        name: "Cloud Computing",
        children: [],
        url:
          "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2",
      },
    ],
    status: expandable,
  },
  {
    name: "Categories",
    children: [
      {
        name: "Statistics",
        children: [],
        url:
          "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2",
      },
      {
        name: "Economy",
        children: [],
        url:
          "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2",
      },
      {
        name: "Sociology",
        children: [],
        url:
          "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2",
      },
      {
        name: "Biology",
        children: [],
        url:
          "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2",
      },
      {
        name: "Robotics",
        children: [],
        url:
          "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2",
      },
    ],
  },
  {
    name: "Papers",
    children: [],
    url:
      "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2",
  },
  {
    name: "About",
    children: [],
    url:
      "https://notion-api.splitbee.io/v1/page/ed98a1529f1241a69a03fb0df7abbeb2",
  },
];
