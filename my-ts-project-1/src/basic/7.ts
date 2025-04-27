export type UserType = {
    title: string;
    likes: number;
    accounts: string[];
    status: "open" | "close";
    details?: {
      createAt: Date;
      updateAt: Date;
    };
  };
  export const page1: UserType = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
      createAt: new Date("2021-01-01"),
      updateAt: new Date("2021-05-01"),
    },
  };
  
  export const page2: UserType = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
  };