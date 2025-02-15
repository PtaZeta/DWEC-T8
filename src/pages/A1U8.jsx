import React, { useState } from 'react';

function A1U8() {
  const [conteo, setConteo] = useState(0);

  return (
    <div>
      <h2>Ejercicio A1U8</h2>
      <button onClick={() => setConteo((conteo) => conteo + 1)}>
          Haz click para subir el contador:  {conteo}
      </button>
    </div>
  );
}

export default A1U8;
