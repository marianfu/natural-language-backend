import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(example);
});

export default router;

const example = {
  posts: [
    { id: 1, title: "json-server", author: "typicode" }
  ],
  comments: [
    { id: 1, body: "some comment", postId: 1 }
  ],
  profile: { name: "typicode" },
  lessons: [
    {
      id: 1,
      level: "Inicial",
      exercises: [
        { id: 1,
          title: "¿Cuál es tu nombre?",
          description: "¡Bienvenido! Dime tu nombre para conocernos mejor",
          instructions: "Escribe tu nombre de la siguiente forma, nombre es '' y presiona Enter",
          done: false
        },
        {
          id: 2,
          title: "Sumar dos números",
          description: "test",
          instructions: "test",
          done: false
        }
      ]
    },
    {
      id: 2,
      level: "Intermedio",
      exercises: []
    }
  ]
};
