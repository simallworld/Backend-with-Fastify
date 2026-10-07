// User Schema-
const createUserSchema = {
  // Request body schema for the API endpoint
  body: {
    type: "object",
    required: ["name", "email", "password"],
    properties: {
      name: {
        type: "string",
      },
      email: {
        type: "string",
      },
      password: {
        type: "string",
      },
    },
  },
  // Response schema for the API endpoint
  response: {
    201: {
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        email: {
          type: "string",
        },
        password: {
          type: "string",
        },
      },
    },
  },
};

// User Route
const userRoute = async (fastify, opts) => {
  fastify.post("/api/users", { schema: createUserSchema }, (request, reply) => {
    console.log(request.body);

    reply.status(201).send({
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
    });

    return {
      message: "User created successfully!!",
    };
  });
};

export default userRoute;
