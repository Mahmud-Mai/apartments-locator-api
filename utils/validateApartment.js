const validateApartment = (req, res, next) => {
  const { name, address, neighbourhood, price, images, type } = req.body;

  // Check if required fields are missing
  if (!name || !address || !neighbourhood || !price || !type) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Check if price is a positive number
  if (isNaN(price) || price <= 0) {
    return res.status(400).json({ message: "Price must be a positive number" });
  }

  // Define valid values for neighbourhood and type
  const validNeighbourhoods = [
    "Danraka",
    "Samaru",
    "Dogon Itche",
    "Zango",
    "Zaria",
  ];
  const validTypes = [
    "1 bedroom with kitchen only",
    "1 bedroom self-contained",
    "2 bedroom with shared kitchen and toilet",
    "2 bedroom with living room",
    "2 bedroom without living room",
  ];

  // Check if the neighbourhood is valid
  if (!validNeighbourhoods.includes(neighbourhood)) {
    return res.status(400).json({ message: "Invalid neighbourhood" });
  }

  // Check if the apartment type is valid
  if (!validTypes.includes(type)) {
    return res.status(400).json({ message: "Invalid apartment type" });
  }

  next();
};

export default validateApartment;
