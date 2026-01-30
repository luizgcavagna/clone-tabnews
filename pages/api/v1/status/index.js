function status(request, response) {
  response.status(200).json({ curso: "curso.dev" });
}

export default status;
