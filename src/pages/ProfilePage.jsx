const ProfilePage = () => {
  return (
    <>
      <div>
  <h1>Mi Perfil</h1>
  <div className="profile-info">
    <h2>Información Personal</h2>
    <form className="profile-form">
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" required />
      <label htmlFor="email">Correo Electrónico:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="telefono">Teléfono:</label>
      <input type="tel" id="telefono" name="telefono" />
      <button type="submit">Guardar Cambios</button>
    </form>
  </div>
  <div className="shipping-address">
    <h2>Direcciones de Envío</h2>
    <form className="address-form">
      <label htmlFor="direccion">Dirección:</label>
      <input type="text" id="direccion" name="direccion" required />
      <label htmlFor="ciudad">Ciudad:</label>
      <input type="text" id="ciudad" name="ciudad" required />
      <label htmlFor="codigo-postal">Código Postal:</label>
      <input type="text" id="codigo-postal" name="codigo-postal" required />
      <label htmlFor="pais">País:</label>
      <input type="text" id="pais" name="pais" required />
      <button type="submit">Guardar Dirección</button>
    </form>
  </div>
</div>

    </>
  )
}

export default ProfilePage