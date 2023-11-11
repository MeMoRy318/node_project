import joi from "joi";

class CarValidator {
  static model = joi.string().min(2).max(25).trim().lowercase();
  static year = joi.number().min(1991).max(new Date().getFullYear());
  static producer = joi.string().min(2).max(25).trim().lowercase();
  static price = joi.number().min(1000).max(1000000);

  static create = joi.object({
    model: this.model.required(),
    year: this.year.required(),
    producer: this.producer.required(),
    price: this.price.required(),
  });

  static update = joi.object({
    model: this.model,
    year: this.year,
    producer: this.producer,
    price: this.price,
  });
}

export { CarValidator };