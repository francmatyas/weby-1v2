import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function FAQItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`FAQItem ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className="FAQItemHeader">
        <h3 className={"FAQItemQuestion"}>{props.question}</h3>
        <HiChevronDown className="FAQItemHeaderChevron" size={24} />
      </div>
      <div className="FAQItemBody">
        <p className={"FAQItemAnswer"}>{props.answer}</p>
      </div>
    </div>
  );
}
