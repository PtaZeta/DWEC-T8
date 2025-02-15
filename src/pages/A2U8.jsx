import React, { useState, useEffect } from 'react';

function A2U8() {
  const [segundos, setSegundos] = useState(0);
  const [actuales, setActuales] = useState(0);
  const [conteo, setConteo] = useState(false);
  const [terminado, setTerminado] = useState(false);

  useEffect(() => {
    let temporizador;
    if (conteo && actuales < segundos) {
      temporizador = setInterval(() => {
        setActuales(prev => prev + 1);
      }, 1000);
    } else if (actuales >= segundos && conteo) {
      setConteo(false);
      setTerminado(true);
    }
    return () => clearInterval(temporizador);
  }, [conteo, actuales, segundos]);

  return (
    <div>
      <h2>Página A2U8</h2>

      {!conteo && !terminado ? (
        <div>
          <input
            type="number"
            value={segundos}
            onChange={(e) => setSegundos(Number(e.target.value))}
            placeholder="Ingresa los segundos"
          />
          <button onClick={() => { setConteo(true); setTerminado(false); }}>Iniciar</button>
        </div>
      ) : (
        <div>
          <p>Soy un conteo hasta el {segundos} y han transcurrido {actuales} segundos</p>
          {actuales >= segundos && terminado && (
            <React.Fragment>
              <p>SE HA TERMINADO EL TIEMPO</p>
              <button onClick={() => { setActuales(0); setConteo(false); setSegundos(0); setTerminado(false); }}>Reiniciar</button>
            </React.Fragment>
          )}
        </div>
      )}
    </div>
  );
}

export default A2U8;
