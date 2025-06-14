import { useState } from "react";

const FormularioContacto = () => {
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviado(true);
    e.target.reset();

    // Ocultar el mensaje después de 7 segundos
    setTimeout(() => setEnviado(false), 7000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={manejarEnvio} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nombre" className="block mb-2 font-medium">
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="correo" className="block mb-2 font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="telefono" className="block mb-2 font-medium">
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="paciente" className="block mb-2 font-medium">
              Edad del paciente
            </label>
            <input
              type="text"
              id="paciente"
              name="edad_paciente"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="servicio" className="block mb-2 font-medium">
            Servicio de interés
          </label>
          <select
            id="servicio"
            name="servicio"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Seleccione un servicio</option>
            <option value="circuncision">Circuncisión</option>
            <option value="hidronefrosis">Hidronefrosis</option>
            <option value="enuresis">Enuresis</option>
            <option value="hipospadias">Hipospadias</option>
            <option value="reflujo">Reflujo Vesicoureteral</option>
            <option value="criptorquidia">Criptorquidia</option>
            <option value="consulta">Consulta general</option>
          </select>
        </div>

        <div>
          <label htmlFor="mensaje" className="block mb-2 font-medium">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Enviar Mensaje
        </button>
      </form>

      {enviado && (
        <div className="mt-6 text-green-600 font-semibold text-center animate-fade-in">
          ✅ ¡Gracias por su mensaje! Nos pondremos en contacto con usted pronto.
        </div>
      )}
    </div>
  );
};

export default FormularioContacto;
