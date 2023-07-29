import blog0IMG from "@/assets/images/blog/magnetar.jpg?format=jpg&height=370&width=550&quality=70";
import blog1IMG from "@/assets/images/blog/eclipse.jpg?format=jpg&height=370&width=550&quality=70";
import blog2IMG from "@/assets/images/blog/water.jpg?format=jpg&height=370&width=550&quality=70";
import blog3IMG from "@/assets/images/blog/moon.jpg?format=jpg&height=370&width=550&quality=70";
import blog4IMG from "@/assets/images/blog/robot.jpg?format=jpgheight=370&width=550&&quality=70";

import blog0IMGSecondary from "@/assets/images/blog/space-dust.jpg?format=jpg&height=205&width=276&quality=70";
import blog1IMGSecondary from "@/assets/images/blog/black-hole2.jpg?format=jpg&height=205&width=276&quality=70";
import blog2IMGSecondary from "@/assets/images/blog/video-gaming.jpg?format=jpg&height=205&width=276&quality=70";
import blog3IMGSecondary from "@/assets/images/blog/earth-from-moon.jpg?format=jpg&height=205&width=276&quality=70";
import blog4IMGSecondary from "@/assets/images/blog/ai.jpg?format=jpg&height=205&width=276&quality=70";
export const tempBlogState = {
  data() {
    return {
      blogs: [
        {
          id: 0,
          title: "The terrifying power of neutron starts",
          author: "Admin",
          category: "Space",
          date: new Date().getFullYear(),
          img: blog0IMG,
          contentData: {
            order: ["p", "p", "i", "q", "p"],
            paragraphs: {
              count: 4,
              0: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
              1: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
              2: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
              3: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
            },
            quotes: [
              "The time it takes to die less than the time it takes to live",
            ],
            images: [blog0IMGSecondary],
          },
        },
        {
          id: 1,
          title: "What happens when a star dies?",
          author: "Admin",
          category: "Space",
          date: new Date().getFullYear(),
          img: blog1IMG,
          contentData: {
            order: ["p", "p", "i", "q", "p"],
            paragraphs: {
              count: 4,
              0: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                  molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                  non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
              1: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                  molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                  non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
              2: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                  molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                  non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
              3: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                  molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                  non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
            },
            quotes: [
              "The time it takes to die less than the time it takes to live",
            ],
            images: [blog1IMGSecondary],
          },
        },
        {
          id: 2,
          title: "How videogames mimic real world physics",
          author: "Admin",
          category: "Video Games",
          date: new Date().getFullYear(),
          img: blog2IMG,
          contentData: {
            order: ["p", "p", "i", "q", "p"],
            paragraphs: {
              count: 4,
              0: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                  molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                  non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
              1: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                  molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                  non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
              2: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                  molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                  non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
              3: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                  molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                  non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
            },
            quotes: [
              "The time it takes to die less than the time it takes to live",
            ],
            images: [blog2IMGSecondary],
          },
        },
        {
          id: 3,
          title: "When will we set up colonies on the Moon?",
          author: "Admin",
          category: "Society",
          date: new Date().getFullYear(),
          img: blog3IMG,
          contentData: {
            order: ["p", "p", "i", "q", "p"],
            paragraphs: {
              count: 4,
              0: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                  molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                  non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
              1: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                  molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                  non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
              2: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                  molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                  non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
              3: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                  molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                  non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
            },
            quotes: [
              "The time it takes to die less than the time it takes to live",
            ],
            images: [blog3IMGSecondary],
          },
        },
        {
          id: 4,
          title: "The power of AI",
          author: "Admin",
          category: "Programming",
          date: new Date().getFullYear(),
          img: blog4IMG,
          contentData: {
            order: ["p", "p", "i", "q", "p"],
            paragraphs: {
              count: 4,
              0: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                  molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                  non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
              1: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                  molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                  non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
              2: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                  molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                  non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
              3: {
                title: `The Outcome Of The Mind`,
                paragraph: `Hey! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum explicabo
                  molestiae eveniet! Esse accusantium quisquam possimus laudantium, minus
                  non dicta eius expedita. Cumque, consectetur placeat cum id cupiditate`,
              },
            },
            quotes: [
              "The time it takes to die less than the time it takes to live",
            ],
            images: [blog4IMGSecondary],
          },
        },
      ],
    };
  },
};
