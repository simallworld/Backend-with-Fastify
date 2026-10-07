// Schema-
const createUserSchema = {
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
};

const userRoute = async (fastify, opts) => {
  fastify.post("/api/users", { schema: createUserSchema }, (request, reply) => {
    // Validate user data using createUserSchema

    return {
      message: "User created successfully!!",
    };
  });
};

export default userRoute;
