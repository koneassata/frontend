// import { useEffect, useRef } from 'react';

// function PayPalButton({ total, onSuccess }) {
//   const paypalRef = useRef();

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = `EEa44lm4LRFlK54hRt9juIGrqO6c79NpnFawI_3LfOxwfGCOjD2g2DomXbkwSQ-dQvBIKGkIoM9oL3A-`; 
//     script.addEventListener('load', () => {
//       if (window.paypal) {
//         window.paypal.Buttons({
//           createOrder: (data, actions) => {
//             return actions.order.create({
//               purchase_units: [{
//                 amount: {
//                   value: (total / 600).toFixed(2), // convertit FCFA en USD
//                 },
//               }],
//             });
//           },
//           onApprove: (data, actions) => {
//             return actions.order.capture().then((details) => {
//               alert(`Paiement approuvé par ${details.payer.name.given_name}`);
//               onSuccess(); // Vider panier
//               window.location.href = "/confirmation";
//             });
//           },
//           onError: (err) => {
//             console.error('Erreur PayPal :', err);
//             alert("Une erreur est survenue avec PayPal.");
//           },
//         }).render(paypalRef.current);
//       }
//     });

//     document.body.appendChild(script);
//   }, [total, onSuccess]);

//   return <div ref={paypalRef}></div>;
// }

// export default PayPalButton;



// "use client"
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const PayPalButton = () => {
//   return (
//     <PayPalScriptProvider options={{ "client-id": "EEa44lm4LRFlK54hRt9juIGrqO6c79NpnFawI_3LfOxwfGCOjD2g2DomXbkwSQ-dQvBIKGkIoM9oL3A-" }}>
//       <div>
//         <h3>Effectuer un paiement</h3>
//         <PayPalButtons
//           style={{
//             layout: "vertical",
//             shape: "rect",
//             color: "blue",
//           }}
//           createOrder={(data, actions) => {
//             return actions.order.create({
//               purchase_units: [
//                 {
//                   amount: {
//                     value: "10.00", // Le montant du paiement
//                   },
//                 },
//               ],
//             });
//           }}
//           onApprove={(data, actions) => {
//             return actions.order.capture().then((details) => {
//               alert(
//                 "Paiement réussi par " + details.payer.name.given_name
//               );
//             });
//           }}
//         />
//       </div>
//     </PayPalScriptProvider>
//   );
// };

// export default PayPalButton;


// "use client";

// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const PayPalButton = () => {
//   return (
//     <PayPalScriptProvider options={{ "client-id": "EEa44lm4LRFlK54hRt9juIGrqO6c79NpnFawI_3LfOxwfGCOjD2g2DomXbkwSQ-dQvBIKGkIoM9oL3A-" }}>
//       <div>
//         <h3>Effectuer un paiement</h3>
//         <PayPalButtons
//           style={{
//             layout: "vertical",
//             shape: "rect",
//             color: "blue",
//           }}
//           createOrder={(data, actions) => {
//             return actions.order.create({
//               purchase_units: [
//                 {
//                   amount: {
//                     value: "10.00",
//                   },
//                 },

//               ],
//             });
//           }}
//           onApprove={(data, actions) => {
//             return actions.order.capture().then((details) => {
//               alert("Paiement réussi par " + details.payer.name.given_name);
//             });
//           }}
//         />
//       </div>
//     </PayPalScriptProvider>
//   );
// };

// export default PayPalButton;


"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = () => {
  return (
    <PayPalScriptProvider options={{ "client-id": "ATkWEOEX2uyIMLwTcIPEKA-B8-yKkfqSf3JG_V4EDqQvW4XxNFrmsPH78iwLmOKAOujCaGLHYud2iX-b" }}>
      <div style={{ minHeight: "200px" }}>
        <h3>Effectuer un paiement</h3>
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{ amount: { value: "10.00" } }],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert("Paiement réussi par " + details.payer.name.given_name);
            });
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
