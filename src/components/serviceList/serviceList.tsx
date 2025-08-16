import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./serviceList.sass";

type Service = {
    id: number;
    title: string;
    description: string;
    image: string;
    moreInfo: string;
};

type ServicesListProps = {
    services: Service[];
};

const ServicesList: React.FC<ServicesListProps> = ({ services }) => {
    const [expanded, setExpanded] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <div className="services-grid">
            {services.map((service) => (
                <div key={service.id} className="service-card">
                    {/* Imagen */}
                    <img src={service.image} alt={service.title} className="service-img" />

                    {/* Contenido */}
                    <div className="service-content">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>

                        <button
                            onClick={() => toggleExpand(service.id)}
                            className="service-btn"
                        >
                            {expanded === service.id ? "Leer menos" : "Leer más"}
                        </button>

                        {/* Acordeón */}
                        <AnimatePresence>
                            {expanded === service.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="service-more"
                                >
                                    {service.moreInfo}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesList;
