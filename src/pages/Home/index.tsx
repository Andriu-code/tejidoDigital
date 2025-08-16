import React from 'react'
import './home.sass'
import Banner from '../../components/Banner'
import Delimiter from '../../components/delimiter'
import ServicesList from '../../components/serviceList/serviceList';
import desarrolloWeb from "./../../assets/services/sitiosWeb.png";
import appMovil from "./../../assets/services/appMovil.png";
import ecommerce from "./../../assets/services/eCommerce.png";
import sistemaMedida from "./../../assets/services/sistemaAMedida.png";
import hostDominio from "./../../assets/services/hostDominio.png";
import sistemaTurnos from "./../../assets/services/sistemaTurnos.png";

const servicesData = [
    {
        id: 1,
        title: "Desarrollo Web",
        description: "Creamos páginas y aplicaciones web modernas.",
        image: desarrolloWeb,
        moreInfo:
            "Usamos tecnologías como React, Node.js y bases de datos modernas para garantizar calidad y escalabilidad.",
    },
    {
        id: 2,
        title: "Aplicaciones Moviles",
        description: "Constuimos la aplicaciòn mòvil de tu negocio.",
        image: appMovil,
        moreInfo:
            "Usamos tecnologías como React, Node.js y bases de datos modernas para garantizar calidad y escalabilidad.",
    },
    {
        id: 3,
        title: "E-commerce",
        description: "Creamos E-commerce para tu emprendimiento.",
        image: ecommerce,
        moreInfo:
            "Usamos tecnologías como React, Node.js y bases de datos modernas para garantizar calidad y escalabilidad.",
    },
    {
        id: 4,
        title: "Sistemas Personalizados",
        description: "Creamos Sistemas a la medida de tu negocio.",
        image: sistemaMedida,
        moreInfo:
            "Usamos tecnologías como React, Node.js y bases de datos modernas para garantizar calidad y escalabilidad.",
    },
    {
        id: 5,
        title: "Hosting y Dominio",
        description: "Creamos el entorno para tu soluciòn web.",
        image: hostDominio,
        moreInfo:
            "Usamos tecnologías como React, Node.js y bases de datos modernas para garantizar calidad y escalabilidad.",
    },
    {
        id: 6,
        title: "Sistemas de Citas",
        description: "Construimos sistemas automatizados para mejoras la interacciòn con tu cliente.",
        image: sistemaTurnos,
        moreInfo:
            "Usamos tecnologías como React, Node.js y bases de datos modernas para garantizar calidad y escalabilidad.",
    },
];

function index() {
    return (
        <>
            <Banner />
            <Delimiter
                message1='Ingresando al mundo digital, tus negocios pueden generar mas ganancias'
                message2='Mas de 2000 sitios web al dia, duplican sus clientes e ingresos'
                message3='Mas de 2000 sitios web al dia, duplican sus clientes e ingresos'
            />
            <ServicesList services={servicesData} />
        </>
    )
}

export default index