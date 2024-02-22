import {Request, Response} from "express";

function formatContact(contact_number: string): string | null {
  const format_validationRegex = /^\(\d{2}\)\s\d{1}\s\d{4}-\d{4}$|^\(\d{2}\)\s\d{4}-\d{4}$/;
  if (!format_validationRegex.test(contact_number)) {return "Formato de telefone inválido";}

  const number_phone = contact_number.replace(/\D/g, "");

  if (number_phone.length !== 11) {
    return "Número de telefone deve conter exatamente 11 dígitos";}
  if (!/^\d+$/.test(number_phone)) {
    return "Número de telefone deve conter apenas números";}
  return `(${number_phone.substr(0, 2)}) ${number_phone.substr(2, 5)}-${number_phone.substr(7)}`;}


export const processcontact = (req: Request, res: Response) => {
  const { name, email, contact } = req.body;

  if (!name || typeof name !== "string") {return res.status(400).json({ message: "Nome inválido" });}

  try {const contactFormat = formatContact(contact);
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Contact:", contactFormat);
      res.send("Thank you for getting in touch!");}
  catch (error) {
      console.error("Error formatting phone number");
      res.status(400).json({ message: "Error formatting phone number" });}
};
