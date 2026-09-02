const e=`# 📖 Manual de Usuario: Diferencia entre "Facturado Total Mesas" y "Abiertas Por Usuario" en Caja

> **¿Dónde está en el sistema?:** Menú principal → **Finanzas** → **Caja** → **Arqueos de Caja** → **Resumen de Ventas**  
> **¿Quién lo usa?:** Cajeros, Encargados de Turno y Supervisores  

---

## 🎯 ¿Qué es y para qué sirve este indicador?

En la pantalla del arqueo de caja, dentro de la sección **Resumen de Ventas**, vas a encontrar dos totales principales:

1. **Facturado Total Mesas:** Es la suma total del dinero de **todas las mesas que cobraste en tu caja** durante tu turno. No importa quién atendió o abrió la mesa; si la cobraste en tu caja, suma en este casillero.
2. **[X] Abiertas Por Usuario:** Es el monto total y la cantidad de mesas que **abriste vos con tu usuario** dentro del horario de tu turno de caja.

---

## ❓ ¿Por qué pueden dar números distintos (y mostrarse en rojo)?

Es totalmente normal que estos números no coincidan en las siguientes situaciones operativas:

- **Cobraste mesas de otros mozos o del turno anterior:** Si cobraste una mesa que abrió otro compañero o que venía del turno anterior, ese dinero suma a tu **Facturado Total Mesas**, pero no a tus mesas abiertas.
- **Tenés mesas sin cobrar:** Si abriste mesas en tu turno que todavía siguen abiertas en el salón o que se van a cobrar en el turno siguiente.
- **Se cobraron en otra caja:** Si abriste una mesa en tu usuario pero se cobró en otra caja del local.

---

## 💡 Significado de los colores visuales

- 🟢 **Verde:** Las mesas que abriste coinciden exactamente con lo que cobraste en la caja.
- 🔴 **Rojo:** Existe una diferencia entre las mesas que abriste y las que cobraste. No significa necesariamente que falte dinero, sino que hubo intercambio de mesas entre turnos o compañeros.

---

## ⚠️ ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| ¿Qué te pasa? | ¿Por qué puede ser? | ¿Cómo se soluciona? |
|---|---|---|
| El número en rojo es muy grande y no me cierra la caja. | Hay mesas cobradas en efectivo que no se ingresaron o mesas abiertas por error. | Revisá el detalle de mesas del turno para confirmar quién abrió y quién cobró cada mesa. |
`;export{e as default};
