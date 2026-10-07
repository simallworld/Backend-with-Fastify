import Fastify from "fastify";

const fastify = new Fastify({ logger: true });

// Routing-
fastify.get("/", async (request, reply) => {
  await reply.send({ message: "Hello from server" });
});

fastify.get("/auth", async (request, reply) => {
  return {
    message: "Authenticated successfully",
  };
});

// Listen Server-
const start = async () => {
  const PORT = process.env.PORT || 8000;
  try {
    fastify.listen({ port: PORT });
    console.log(`Server is listening on PORT- ${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
