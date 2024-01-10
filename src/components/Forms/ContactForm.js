"use client";

import styles from "./contactForm.module.css";
import { useState } from "react";
import Input from "../Elements/Input";
import Button from "../Elements/Button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <Input
        label="Name"
        value={form.name}
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="John Doe"
        required
      />

      <Input
        label="Email"
        value={form.email}
        onChange={handleChange}
        type="email"
        name="email"
        placeholder="john.doe@example.com"
        required
      />

      <Input
        label="Message"
        value={form.message}
        onChange={handleChange}
        textarea
        name="message"
        placeholder="Hello world!"
        required
      />

      <Button type="submit">Send</Button>
    </form>
  );
}
