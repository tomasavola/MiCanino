USE [MiCanino]
GO
/****** Object:  Table [dbo].[Evento]    Script Date: 8/9/2023 11:54:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Evento](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NULL,
	[Fecha] [date] NULL,
	[Descripcion] [varchar](50) NULL,
	[IdUsuario] [int] NULL,
 CONSTRAINT [PK_Evento] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Historial]    Script Date: 8/9/2023 11:54:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Historial](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Medicamento] [varchar](50) NULL,
	[Fecha] [date] NULL,
	[IdUsuario] [int] NULL,
 CONSTRAINT [PK_Historial] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Mascota]    Script Date: 8/9/2023 11:54:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Mascota](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](100) NULL,
	[FechaNacimiento] [date] NULL,
	[IdRaza] [int] NULL,
	[Descripcion] [varchar](max) NULL,
	[Peso] [float] NULL,
	[Foto] [varchar](max) NULL,
	[PartidaNacimiento] [varchar](max) NULL,
	[CarnetVacunacion] [varchar](max) NULL,
 CONSTRAINT [PK_Mascota] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MascotaPerdida]    Script Date: 8/9/2023 11:54:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MascotaPerdida](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdMascota] [int] NULL,
	[IdUsuario] [int] NULL,
	[Ubicacion] [varchar](320) NULL,
	[FechaPerdido] [datetime] NULL,
 CONSTRAINT [PK_MascotaPerdida] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Razas]    Script Date: 8/9/2023 11:54:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Razas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](100) NULL,
 CONSTRAINT [PK_Razas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Servicios]    Script Date: 8/9/2023 11:54:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Servicios](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdUsuario] [int] NULL,
	[idTipoServicio] [int] NOT NULL,
	[NombreEstablecimiento] [varchar](max) NULL,
 CONSTRAINT [PK_Servicios] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TipoServicios]    Script Date: 8/9/2023 11:54:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TipoServicios](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NULL,
 CONSTRAINT [PK_TipoServicios] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 8/9/2023 11:54:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](100) NOT NULL,
	[Apellido] [varchar](100) NOT NULL,
	[Mail] [varchar](320) NOT NULL,
	[Telefono] [varchar](20) NOT NULL,
	[Password] [varchar](20) NOT NULL,
 CONSTRAINT [PK_Usuario_1] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UsuariosXMascotas]    Script Date: 8/9/2023 11:54:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UsuariosXMascotas](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdMascota] [int] NULL,
	[IdUsuario] [int] NULL,
	[EnAdopcion] [bit] NULL,
 CONSTRAINT [PK_UsuariosXMascotas] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UsuarioXServicio]    Script Date: 8/9/2023 11:54:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UsuarioXServicio](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdUsuario] [int] NOT NULL,
	[idServicio] [int] NOT NULL,
 CONSTRAINT [PK_Servicio] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Evento]  WITH CHECK ADD  CONSTRAINT [FK_Evento_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([Id])
GO
ALTER TABLE [dbo].[Evento] CHECK CONSTRAINT [FK_Evento_Usuario]
GO
ALTER TABLE [dbo].[Historial]  WITH CHECK ADD  CONSTRAINT [FK_Historial_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([Id])
GO
ALTER TABLE [dbo].[Historial] CHECK CONSTRAINT [FK_Historial_Usuario]
GO
ALTER TABLE [dbo].[Mascota]  WITH CHECK ADD  CONSTRAINT [FK_Mascota_Razas] FOREIGN KEY([IdRaza])
REFERENCES [dbo].[Razas] ([Id])
GO
ALTER TABLE [dbo].[Mascota] CHECK CONSTRAINT [FK_Mascota_Razas]
GO
ALTER TABLE [dbo].[MascotaPerdida]  WITH CHECK ADD  CONSTRAINT [FK_MascotaPerdida_Mascota] FOREIGN KEY([IdMascota])
REFERENCES [dbo].[Mascota] ([Id])
GO
ALTER TABLE [dbo].[MascotaPerdida] CHECK CONSTRAINT [FK_MascotaPerdida_Mascota]
GO
ALTER TABLE [dbo].[MascotaPerdida]  WITH CHECK ADD  CONSTRAINT [FK_MascotaPerdida_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([Id])
GO
ALTER TABLE [dbo].[MascotaPerdida] CHECK CONSTRAINT [FK_MascotaPerdida_Usuario]
GO
ALTER TABLE [dbo].[UsuariosXMascotas]  WITH CHECK ADD  CONSTRAINT [FK_UsuariosXMascotas_Mascota] FOREIGN KEY([IdMascota])
REFERENCES [dbo].[Mascota] ([Id])
GO
ALTER TABLE [dbo].[UsuariosXMascotas] CHECK CONSTRAINT [FK_UsuariosXMascotas_Mascota]
GO
ALTER TABLE [dbo].[UsuariosXMascotas]  WITH CHECK ADD  CONSTRAINT [FK_UsuariosXMascotas_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([Id])
GO
ALTER TABLE [dbo].[UsuariosXMascotas] CHECK CONSTRAINT [FK_UsuariosXMascotas_Usuario]
GO
ALTER TABLE [dbo].[UsuarioXServicio]  WITH CHECK ADD  CONSTRAINT [FK_Servicio_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([Id])
GO
ALTER TABLE [dbo].[UsuarioXServicio] CHECK CONSTRAINT [FK_Servicio_Usuario]
GO
ALTER TABLE [dbo].[UsuarioXServicio]  WITH CHECK ADD  CONSTRAINT [FK_UsuarioXServicio_Servicios] FOREIGN KEY([idServicio])
REFERENCES [dbo].[Servicios] ([Id])
GO
ALTER TABLE [dbo].[UsuarioXServicio] CHECK CONSTRAINT [FK_UsuarioXServicio_Servicios]
GO
