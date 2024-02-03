const USERS = ["men", "women"];

export const DATA = [
  {
    id: "3242234",
    name: "Jane",
    uri: `https://randomuser.me/api/portraits/${
      USERS[Math.floor(Math.random() * 2)]
    }/${Math.floor(Math.random() * 60)}.jpg`,
  },
  {
    id: "3242232",
    name: "Shane",
    uri: `https://randomuser.me/api/portraits/${
      USERS[Math.floor(Math.random() * 2)]
    }/${Math.floor(Math.random() * 60)}.jpg`,
  },
  {
    id: "3242231",
    name: "Carlos",
    uri: `https://randomuser.me/api/portraits/${
      USERS[Math.floor(Math.random() * 2)]
    }/${Math.floor(Math.random() * 60)}.jpg`,
  },
  {
    id: "3242236",
    name: "Braith",
    uri: `https://randomuser.me/api/portraits/${
      USERS[Math.floor(Math.random() * 2)]
    }/${Math.floor(Math.random() * 60)}.jpg`,
  },
  {
    id: "32422324",
    name: "Atkins",
    uri: `https://randomuser.me/api/portraits/${
      USERS[Math.floor(Math.random() * 2)]
    }/${Math.floor(Math.random() * 60)}.jpg`,
  },
  {
    id: "32422345",
    name: "Somer",
    uri: `https://randomuser.me/api/portraits/${
      USERS[Math.floor(Math.random() * 2)]
    }/${Math.floor(Math.random() * 60)}.jpg`,
  },
  {
    id: "324223767",
    name: "Nandu",
    uri: `https://randomuser.me/api/portraits/${
      USERS[Math.floor(Math.random() * 2)]
    }/${Math.floor(Math.random() * 60)}.jpg`,
  },
  {
    id: "3242786",
    name: "Smith",
    uri: `https://randomuser.me/api/portraits/${
      USERS[Math.floor(Math.random() * 2)]
    }/${Math.floor(Math.random() * 60)}.jpg`,
  },
  {
    id: "32422787",
    name: "Betty",
    uri: `https://randomuser.me/api/portraits/${
      USERS[Math.floor(Math.random() * 2)]
    }/${Math.floor(Math.random() * 60)}.jpg`,
  },
  {
    id: "32422456",
    name: "Nate",
    uri: `https://randomuser.me/api/portraits/${
      USERS[Math.floor(Math.random() * 2)]
    }/${Math.floor(Math.random() * 60)}.jpg`,
  },
  {
    id: "32422775",
    name: "XCK",
    uri: `https://randomuser.me/api/portraits/${
      USERS[Math.floor(Math.random() * 2)]
    }/${Math.floor(Math.random() * 60)}.jpg`,
  },
  {
    id: "32422434",
    name: "Panni",
    uri: `https://randomuser.me/api/portraits/${
      USERS[Math.floor(Math.random() * 2)]
    }/${Math.floor(Math.random() * 60)}.jpg`,
  },
];

export const LOCATIONS = [
  {
    key: "1",
    location: "Santoris, Greece",
    numberOfDays: 9,
    image:
      "https://images.unsplash.com/photo-1664688023019-d4ab2703a7cb?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#0c212d",
  },
  {
    key: "2",
    location: "Costa De Papagayo, Spain",
    numberOfDays: 10,
    image: "https://images.unsplash.com/photo-1595932233821-6c38c11bfcd6?q=80&w=2961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#f8eace",
  },
  {
    key: "3",
    location: "Mexico City, Mexico",
    numberOfDays: 12,
    image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwZGVzdGlvbmF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D",
    color: "#e4e5ea"
  },
  {
    key: "4",
    location: "Paris, France",
    numberOfDays: 11,
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDA%3D",
    color: "#1caa8a",
  },
  {
    key: "5",
    location: "Miami, USA",
    numberOfDays: 15,
    image: "https://images.unsplash.com/photo-1611839699701-5cd5f18c25a4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvbGlkYXklMjBsb2NhdGlvbnN8ZW58MHx8MHx8fDA%3D",
    color: "#f37fce",
  },
  {
    key: "6",
    location: "Puerto Rico, USA",
    numberOfDays: 7,
    image: "https://images.unsplash.com/photo-1625642471723-12744e6e4211?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHVlcnRvJTIwcmljb3xlbnwwfHwwfHx8MA%3D%3D",
    color: "#ba9ace",
  }
];
