USE [MiCanino]
GO
/****** Object:  Table [dbo].[Evento]    Script Date: 24/11/2023 10:33:32 ******/
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
/****** Object:  Table [dbo].[Historial]    Script Date: 24/11/2023 10:33:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Historial](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Medicamento] [text] NULL,
	[Fecha] [datetime] NULL,
	[Descripcion] [text] NULL,
 CONSTRAINT [PK_Historial] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Mascota]    Script Date: 24/11/2023 10:33:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Mascota](
	[Id] [int] NOT NULL,
	[Nombre] [varchar](100) NULL,
	[FechaNacimiento] [date] NULL,
	[IdRaza] [int] NOT NULL,
	[Descripcion] [varchar](max) NULL,
	[Peso] [float] NULL,
	[Foto] [varbinary](max) NULL,
	[PartidaNacimiento] [varbinary](max) NULL,
	[CarnetVacunacion] [varbinary](max) NULL,
 CONSTRAINT [PK_Mascota] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MascotaPerdida]    Script Date: 24/11/2023 10:33:32 ******/
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
/****** Object:  Table [dbo].[Razas]    Script Date: 24/11/2023 10:33:32 ******/
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
/****** Object:  Table [dbo].[Servicios]    Script Date: 24/11/2023 10:33:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Servicios](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Horario] [varchar](50) NULL,
	[Telefono] [int] NULL,
	[Mail] [varchar](50) NULL,
	[Descripcion] [varchar](50) NULL,
	[NombreServicio] [varchar](50) NULL,
	[IdServicio] [int] NULL,
 CONSTRAINT [PK_Servicios] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ServicioXUbicacion]    Script Date: 24/11/2023 10:33:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServicioXUbicacion](
	[Id] [int] NOT NULL,
	[IdServicio] [int] NULL,
	[IdUbicacion] [int] NOT NULL,
 CONSTRAINT [PK_ServicioXUbicacion] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ServicioXUbicacion+]    Script Date: 24/11/2023 10:33:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServicioXUbicacion+](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdServicio] [int] NULL,
	[IdUbicacion] [int] NOT NULL,
 CONSTRAINT [PK_ServicioXUbicacion+] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TipoServicios]    Script Date: 24/11/2023 10:33:32 ******/
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
/****** Object:  Table [dbo].[Ubicaciones]    Script Date: 24/11/2023 10:33:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ubicaciones](
	[Id] [int] NOT NULL,
	[Latitud] [float] NULL,
	[Longitud] [float] NULL,
 CONSTRAINT [PK_Ubicaciones] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 24/11/2023 10:33:32 ******/
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
/****** Object:  Table [dbo].[UsuariosXMascotas]    Script Date: 24/11/2023 10:33:32 ******/
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
/****** Object:  Table [dbo].[UsuarioXServicio]    Script Date: 24/11/2023 10:33:32 ******/
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
INSERT [dbo].[Mascota] ([Id], [Nombre], [FechaNacimiento], [IdRaza], [Descripcion], [Peso], [Foto], [PartidaNacimiento], [CarnetVacunacion]) VALUES (1, N'mofeta', CAST(N'2000-06-09' AS Date), 1, N'aaa', 122, NULL, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[Razas] ON 

INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (1, N'Hola')
SET IDENTITY_INSERT [dbo].[Razas] OFF
GO
SET IDENTITY_INSERT [dbo].[Servicios] ON 

INSERT [dbo].[Servicios] ([Id], [Horario], [Telefono], [Mail], [Descripcion], [NombreServicio], [IdServicio]) VALUES (1, NULL, NULL, NULL, NULL, N'Rata', 1)
SET IDENTITY_INSERT [dbo].[Servicios] OFF
GO
INSERT [dbo].[ServicioXUbicacion] ([Id], [IdServicio], [IdUbicacion]) VALUES (1, 1, 1)
GO
INSERT [dbo].[Ubicaciones] ([Id], [Latitud], [Longitud]) VALUES (1, -34.6021172, -58.4286219)
GO
SET IDENTITY_INSERT [dbo].[Usuario] ON 

INSERT [dbo].[Usuario] ([Id], [Nombre], [Apellido], [Mail], [Telefono], [Password]) VALUES (2, N'Ivan', N'Kwiatkowski', N'gordo@gmail.com', N'11111', N'gordo')
SET IDENTITY_INSERT [dbo].[Usuario] OFF
GO
ALTER TABLE [dbo].[Evento]  WITH CHECK ADD  CONSTRAINT [FK_Evento_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([Id])
GO
ALTER TABLE [dbo].[Evento] CHECK CONSTRAINT [FK_Evento_Usuario]
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
ALTER TABLE [dbo].[ServicioXUbicacion]  WITH CHECK ADD  CONSTRAINT [FK_ServicioXUbicacion_Servicios] FOREIGN KEY([IdUbicacion])
REFERENCES [dbo].[Servicios] ([Id])
GO
ALTER TABLE [dbo].[ServicioXUbicacion] CHECK CONSTRAINT [FK_ServicioXUbicacion_Servicios]
GO
ALTER TABLE [dbo].[ServicioXUbicacion]  WITH CHECK ADD  CONSTRAINT [FK_ServicioXUbicacion_Ubicaciones] FOREIGN KEY([IdUbicacion])
REFERENCES [dbo].[Ubicaciones] ([Id])
GO
ALTER TABLE [dbo].[ServicioXUbicacion] CHECK CONSTRAINT [FK_ServicioXUbicacion_Ubicaciones]
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
