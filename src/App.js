import React from 'react';
import './index.css';
const logoGolden = require('./images/goldenFoodLogo.jpg');
const quesoChocloImage = require('./images/queso_choclo.jpg');
const quesoChampinon = require('./images/queso_champinon.jpg');
const quesoChampinonChoclo = require('./images/queso_champinon_choclo.jpg');
const napolitana = require('./images/napolitana.jpg');
const queso = require('./images/queso.jpg');
const quesoEspinaca = require('./images/queso_espinaca.jpg');
const quesoAceituna = require('./images/queso_aceituna.jpg');
const jamonQueso = require('./images/jamon_queso.jpg');
const quesoCamaron = require('./images/queso_camaron.jpg');
const quesoMechada = require('./images/mechada_queso.jpg');
const mariscos = require('./images/pino_marisco.jpg');
const Chaparrita = require('./images/chaparrita.jpg');
const quesoPolloChoclo = require('./images/queso_pollo_choclo.png');


const papaIndividual = require('./images/IMG-20230816-WA0058.jpg');

const menuData = [
  {
    title: 'Empanadas',
    items: [
      {
        title: 'Queso Pollo Choclo',
        description: 'Rellena con Queso, Pollo Picado y Choclo en granos.',
        price: '$2.400',
        image: quesoPolloChoclo
      },
      {
        title: 'Queso Choclo',
        description: 'Relleno de Queso y Choclo en granos.',
        price: '$2.100',
        image: quesoChocloImage
      },
      {
          title: 'Queso Champiñon',
          description: 'Relleno de Queso y Champiñón natural picado.',
          price: '$2.200',
          image: quesoChampinon
      },
      {
          title: 'Queso Champiñon Choclo',
          description: 'Relleno de Queso, Champiñón Natural Picado y Choclo en granos.',
          price: '$2.400',
          image: quesoChampinonChoclo
      },
      {
          title: 'Napolitana',
          description: 'Napolitana rellena con queso, tomate y jamón picado, más aceituna entera y un toque de orégano.',
          price: '$2.200',
          image: napolitana
      },
      {
          title: 'Queso',
          description: 'Rellena con Queso',
          price: '$1.900',
          image: queso
      },
      {
          title: 'Queso Espinaca',
          description: 'Rellena con Queso y Espinaca picada',
          price: '$2.100',
          image: quesoEspinaca
      },
      {
          title: 'Queso Aceituna',
          description: 'Rellena con Queso y aceitunas picadas',
          price: '$2.100',
          image: quesoAceituna
      },
      {
          title: 'Jamón Queso',
          description: 'Rellena con Jamón picado y Queso',
          price: '$2.100',
          image: jamonQueso
      },
      {
          title: 'Queso Camarón',
          description: 'Rellena con Queso y Camarones picados',
          price: '$2.500',
          image: quesoCamaron
      },
      {
          title: 'Queso Mechada',
          description: 'Rellena con Queso y Carne picada',
          price: '$2.500',
          image: quesoMechada
      },
      {
          title: 'Mariscos',
          description: 'Rellena con Pino y Mariscos',
          price: '$2.400',
          image: mariscos
      },
      {
          title: 'Chaparrita',
          description: 'Rellena con Vienesa y Queso',
          price: '$1.800',
          image: Chaparrita
      },
    ],
  },
  {
    title: 'Hand Rolls',
    items: [
      {
        title: 'Pollo',
        description: 'Hand Roll relleno de Pollo, Queso Crema y Cebollín',
        price: '$2.300',
        image: 'ruta_imagen_hand_roll_salmon.jpg',
      },
      {
          title: 'Champiñon',
          description: 'Hand Roll relleno de Champiñón, Queso Crema y Cebollín',
          price: '$2.300',
          image: 'ruta_imagen_hand_roll_salmon.jpg',
      },
      {
        title: 'Camarón',
        description: 'Hand Roll Relleno con Camarones picado en trozos, queso crema y cebollín.',
        price: '$2.700',
        image: 'ruta_imagen_hand_roll_atun.jpg',
      },
      {
        title: 'Promo Hand Roll de Camarón',
        description: 'Hand Roll Relleno con Camarones picado en trozos, queso crema y cebollín.',
        price: '$2.700',
        image: 'ruta_imagen_hand_roll_atun.jpg',
      },
      {
          title: 'Promo X3 Hand Roll Pollo',
          description: 'Hand Roll relleno de Pollo, Queso Crema y Cebollín',
          price: '$6.500',
          image: 'ruta_imagen_hand_roll_salmon.jpg',
      },
      {
          title: 'Promo X3 Hand Roll Champiñon',
          description: 'Hand Roll relleno de Champiñón, Queso Crema y Cebollín',
          price: '$6.500',
          image: 'ruta_imagen_hand_roll_salmon.jpg',
      },
      {
          title: 'Promo X3 Hand Roll de Camarón',
          description: 'Hand Roll Relleno con Camarones picado en trozos, queso crema y cebollín.',
          price: '$7.500',
          image: 'ruta_imagen_hand_roll_atun.jpg',
        },
    ],
  },
  {
      title:"Papas Fritas",
      items:[
          {
              title: 'Papas Fritas Tamaño Individual',
              description:'Deliciosas Papas Fritas cortadas en tiras finas.',
              price :' $2.000',
              image: papaIndividual
          },
          {
              title: 'Papas Fritas Tamaño Grande',
              description:'Deliciosas Papas Fritas cortadas en tiras finas.',
              price :' $4.000',
              image: papaIndividual
          },
          {
              title: 'Salchipapas Tamaño Individual',
              description:'Deliciosas Papas Fritas cortadas en tiras finas con vienesas cortada en trozos.',
              price :' $2.500',
              image: "ruta_imagen_papasfritas.jpeg"
          },
          {
              title: 'Salchipapas Tamaño Grande',
              description:'Deliciosas Papas Fritas cortadas en tiras finas con vienesas cortada en trozos.',
              price :' $4.800',
              image: "ruta_imagen_papasfritas.jpeg"
          },
      ],
  },
  {
      title: 'Bebidas',
      items:[
          {
              title: 'Bebida Lata Regular 350cc Pepsi',
              description:'Bebida refrescante aromatizada con azúcar y edulcorantes, en lata 350cc',
              price :'$1.490',
              image: "ruta_imagen_bebidas_pepsi.png"
          },
          {
              title: 'Bebida Lata Regular 350cc Bilz',
              description:'Bebida gaseosa 350cc.',
              price :'$1.490',
              image: "ruta_imagen_bebidas_pepsi.png"
          },
          {
              title: 'Bebida Lata 350cc Pap',
              description:'Bebida gaseosa 350ml.',
              price :'$1.490',
              image: "ruta_imagen_bebidas_pepsi.png"
          },
          {
              title: 'Bebida Lata Regular 350cc Kem',
              description:'Bebida gaseosa 350ml.',
              price :'$1.490',
              image: "ruta_imagen_bebidas_pepsi.png"
          },
          {
              title: 'Néctar Durazno Didrio 300ml Watts',
              description:'Botella de jugo sabor Durazno. 300ml.',
              price :'$1.490',
              image: "ruta_imagen_bebidas_pepsi.png"
          }
      ],
  },
  {
      title: 'Salsas y Aderezos',
      items:[
          {
              title: 'Pocillo de Pebre',
              description:'Salsa típica chilena, que contiene tomate, cebolla, cilantro y ajo picado finamente, todo muy bien condimentado y aliñado. Recuerda que también puedes añadir tu pocillo de pebre al pedir tu empanada.',
              price: '$590',
              image :"ruta_imagen_salsas.jpg",
          }
      ]
  }
]
function ElementoMenu({ item }) {
  return (
    <div className="menu-item">
      <img className="menu-item-image" src={item.image} alt={item.title} />
      <div className="menu-item-text">
        <h3 className="item-title">{item.title}</h3>
        <p className="item-description">{item.description}</p>
        <p className="item-price">Precio: {item.price}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
     <nav className="navbar">
        <div className="navbar-logo">
          <img src={logoGolden} alt="Logo" />
        </div>
        <div className="navbar-links">
          {menuData.map((categoria, index) => (
            <a
              key={index}
              href={`#${categoria.title.toLowerCase().replace(/ /g, '-')}`}
              className="navbar-link"
            >
              {categoria.title}
            </a>
          ))}
        </div>
      </nav>
      <div className="menu-container">
        <h1>Menú</h1>
        <div id="menu-items" className="menu-items">
          {menuData.map((categoria, index) => (
            <div key={index}>
              <h2 id={categoria.title.toLowerCase().replace(/ /g, '-')}>{categoria.title}</h2>
              {categoria.items.map((item, itemIndex) => (
                <ElementoMenu key={itemIndex} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
