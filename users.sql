USE [master]
GO
--
-- Primero hay que crear la base de datos 'DAI-Pizzas'
--

IF NOT EXISTS (SELECT * FROM sys.server_principals WHERE [name] = N'Mascota')
BEGIN
	PRINT 'Creando Login'
	CREATE LOGIN [Mascota] WITH 
		PASSWORD=N'mascota123', 
		DEFAULT_DATABASE=[MiCanino], 
		CHECK_EXPIRATION=OFF, 
		CHECK_POLICY=OFF
END
GO

USE [MiCanino]
IF NOT EXISTS (SELECT * FROM sys.database_principals WHERE [name] = N'Mascota')
BEGIN
	PRINT 'Creando User'
	CREATE USER [Mascota] FOR LOGIN [Mascota]
	ALTER ROLE [db_owner] ADD MEMBER [Mascota]
END 
GO
