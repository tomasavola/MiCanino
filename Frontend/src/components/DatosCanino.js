return function DatosCanino(){
    {canino ? (
        <div>
            <h1 className="letraNegra">Información del Canino</h1>
            <p className="letraNegra">Nombre: {canino.nombre}</p>
            <p className="letraNegra">Fecha de Nacimiento: {canino.FechaNacimiento}</p>
            <p className="letraNegra">ID de Raza: {canino.idRaza}</p>
            <p className="letraNegra">Descripción: {canino.descripcion}</p>
            <p className="letraNegra">Peso: {canino.peso}</p>
        </div>
    ) : (
        <p>Cargando información del canino...</p>
    )}
    }