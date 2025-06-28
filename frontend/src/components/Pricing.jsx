import { Check, X } from "lucide-react";
import React, { useState } from "react";
import Modal from "./modal"; // Make sure path is correct

const Pricing = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const openModal = (title) => {
    setSelectedPlan(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPlan("");
  };

  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 18000,
      length: 3,
      benefits: [true, true, true, true, true],
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HEAL_YEARLY",
      price: 34000,
      length: 6,
      benefits: [true, true, true, true, true],
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 67000,
      length: 12,
      benefits: [true, true, true, true, true],
    },
  ];

  const allBenefits = [
    "Equipment",
    "All Day Free Training",
    "Free Restroom",
    "24/7 Skilled Support",
    "20 Days Freezing Option",
  ];

  return (
    <section className="pricing" id="pricing">
      <h1>ELITE EDGE FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => (
          <div className="card" key={element.title}>
            <img src={element.imgUrl} alt={element.title} />
            <div className="title">
              <h1>{element.title}</h1>
              <h1>PACKAGE</h1>
              <h3>Rs {element.price}</h3>
              <p>For {element.length} Months</p>
            </div>
            <div className="description">
              {allBenefits.map((benefit, i) => (
                <p key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  {element.benefits[i] ? (
                    <Check color="green" />
                  ) : (
                    <X color="red" />
                  )}
                  {benefit}
                </p>
              ))}
              <button className="join-now-btn" onClick={() => openModal(element.title)}>
                Join Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} title={selectedPlan} />
    </section>
  );
};

export default Pricing;
