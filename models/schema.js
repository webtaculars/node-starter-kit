const Schema = new mongoose.Schema(
  {
    name: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Schema", Schema);
