USE [MiCanino]
GO
/****** Object:  Table [dbo].[Mascota]    Script Date: 12/5/2023 12:00:42 ******/
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
/****** Object:  Table [dbo].[MascotaPerdida]    Script Date: 12/5/2023 12:00:42 ******/
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
/****** Object:  Table [dbo].[Razas]    Script Date: 12/5/2023 12:00:42 ******/
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
/****** Object:  Table [dbo].[Servicios]    Script Date: 12/5/2023 12:00:42 ******/
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
/****** Object:  Table [dbo].[TipoServicios]    Script Date: 12/5/2023 12:00:42 ******/
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
/****** Object:  Table [dbo].[Usuario]    Script Date: 12/5/2023 12:00:42 ******/
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
/****** Object:  Table [dbo].[UsuariosXMascotas]    Script Date: 12/5/2023 12:00:42 ******/
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
/****** Object:  Table [dbo].[UsuarioXServicio]    Script Date: 12/5/2023 12:00:42 ******/
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
SET IDENTITY_INSERT [dbo].[Mascota] ON 

INSERT [dbo].[Mascota] ([Id], [Nombre], [FechaNacimiento], [IdRaza], [Descripcion], [Peso], [Foto], [PartidaNacimiento], [CarnetVacunacion]) VALUES (1, N'Gaudi', NULL, 4, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Mascota] ([Id], [Nombre], [FechaNacimiento], [IdRaza], [Descripcion], [Peso], [Foto], [PartidaNacimiento], [CarnetVacunacion]) VALUES (2, N'Mora', NULL, 1, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Mascota] ([Id], [Nombre], [FechaNacimiento], [IdRaza], [Descripcion], [Peso], [Foto], [PartidaNacimiento], [CarnetVacunacion]) VALUES (3, N'Tanque', NULL, 47, N'Gordito', 190, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Mascota] OFF
GO
SET IDENTITY_INSERT [dbo].[Razas] ON 

INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (1, N'Affenpinscher')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (2, N'Afgano')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (3, N'Akita japones')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (4, N'Basenji')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (5, N'Basset Azul de Gascuna')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (6, N'Basset Grifon vandeano (grande)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (7, N'Basset Grifon vandeano (pequeno)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (8, N'Basset Hound')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (9, N'Basset leonado de Bretana')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (10, N'Beagle')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (11, N'Beauceron')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (12, N'Bedlington Terrier')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (13, N'Bergamasco')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (14, N'Bichon Bolones')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (15, N'Bichon Frise')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (16, N'Bloodhound')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (17, N'Bobtail (antiguo perro pastor ingles)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (18, N'Border Collie')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (19, N'Border Terrier')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (20, N'Borzoi')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (21, N'Boston Terrier')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (22, N'Boxer')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (23, N'Boyero de Berna')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (24, N'Boyero de Flandes')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (25, N'Bracco italiano')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (26, N'Braco aleman (Weimaraner) de pelo corto')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (27, N'Braco aleman (Weimaraner) de pelo duro')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (28, N'Braco de Weimar (Weimaraner) de pelo corto y suave')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (29, N'Braco hungaro(Vizsla)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (30, N'Braco hungaro (Vizsla) de pelo duro')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (31, N'Breton')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (32, N'Buhund noruego')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (33, N'Bull Terrier')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (34, N'Bull Terrier miniatura')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (35, N'Bulldog')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (36, N'Bulldog Frances')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (37, N'Bullmastiff')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (38, N'Cairn Terrier')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (39, N'Caniche enano')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (40, N'Caniche grande')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (41, N'Caniche toy')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (42, N'Carlino(Pug)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (43, N'Cavalier King Charles Spaniel')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (44, N'Cazador de alces noruego (elkhound noruego)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (45, N'Chihuahua (de pelo largo)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (46, N'Chihuahua (de pelo suave)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (47, N'Chin japones')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (48, N'Chow chow (de pelo duro)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (49, N'Chow Chow (de pelo suave)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (50, N'Clumber Spaniel')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (51, N'Cobrador de Nueva Escocia')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (52, N'Cocker Spaniel americano')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (53, N'Cocker Spaniel ingles')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (54, N'Collie barbudo')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (55, N'Collie de pelo corto')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (56, N'Corgi gales de Cardigan (de pelo medio/largo)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (57, N'Corgi gales de Pembroke')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (58, N'Coton de Tulear')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (59, N'Crestado chino')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (60, N'Crestado rodesiano (rhodesian ridgeback)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (61, N'Dalmata')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (62, N'Dandie Dinmont Terrier')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (63, N'Doberman')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (64, N'Dogo de Burdeos')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (65, N'Field Spaniel')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (66, N'Fox Terrier de pelo duro')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (67, N'Fox Terrier de pelo liso')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (68, N'Foxhound')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (69, N'Galgo')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (70, N'Galgo italiano')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (71, N'Golden Retriever')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (72, N'Gran azul de Gascuna')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (73, N'Gran danes')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (74, N'Grifon de Bruselas (de pelo corto y duro)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (75, N'Grifon de Bruselas (pelaje corto y aspero)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (76, N'Habanero')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (77, N'Hamilton Stovare')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (78, N'Hovawart')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (79, N'Husky siberiano')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (80, N'Keeshond')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (81, N'Kerry blue Terrier')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (82, N'King Charles Spaniel')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (83, N'Komondor')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (84, N'Kuvasz hungaro')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (85, N'Labrador Retriever')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (86, N'Laekenois')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (87, N'Lakeland Terrier')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (88, N'Lancashire Heeler')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (89, N'Lebrel escoces')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (90, N'Leonberger')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (91, N'Lhasa Apso')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (92, N'Lobero irlandes')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (93, N'Lowchen (pequeño perro leon)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (94, N'Malamute de Alaska')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (95, N'Maltes')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (96, N'Manchester Terrier')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (97, N'Mastin ingles o mastiff')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (98, N'Mastin napolitano')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (99, N'Mastin tibetano')
GO
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (100, N'Munsterlander (grande)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (101, N'Otterhound')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (102, N'Papillon')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (103, N'Parson jack russell terrier (de pelo corto/suave)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (104, N'Pastor aleman')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (105, N'Pastor australiano')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (106, N'Pastor belga Groenendael')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (107, N'Pastor belga Malinois')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (108, N'Pastor belga Tervueren')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (109, N'Pastor de Anatolia')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (110, N'Pastor de Brie o Briard')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (111, N'Pastor de Los Pirineos')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (112, N'Pastor de Maremma')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (113, N'Pastor de Shetland (Shetland sheepdog)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (114, N'Pastor ganadero australiano')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (115, N'Pastor lapon de Suecia')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (116, N'Pastor polaco de las llanuras')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (117, N'Perro de agua espanol')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (118, N'Perro de agua irlandes')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (119, N'Perro de agua portugues')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (120, N'Perro de Canaan')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (121, N'Perro de montana de los Pirineos')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (122, N'Perro del faraon')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (123, N'Perro finlandes de Laponia')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (124, N'Perro Serra da Estrela')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (125, N'Pinscher aleman')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (126, N'Pinscher miniatura')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (127, N'Podenco ibicenco (de pelo corto y liso)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (128, N'Pointer')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (129, N'Pomerania')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (130, N'Puli hungaro')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (131, N'Retriever de Chesapeake')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (132, N'Retriever de pelo liso')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (133, N'Retriever de pelo rizado')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (134, N'Rottweiler')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (135, N'Rough Collie (Pastor Escoces)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (136, N'Sabueso bavaro de montana')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (137, N'Sabueso italiano (de pelo corto y suave)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (138, N'Saluki (galgo persa)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (139, N'Samoyedo')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (140, N'San Bernardo (de pelo medio/largo)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (141, N'Schipperke')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (142, N'Schnauzer estandar')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (143, N'Schnauzer gigante')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (144, N'Schnauzer miniatura')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (145, N'Sealyham Terrier
')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (146, N'Setter escoces')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (147, N'Setter ingles')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (148, N'Setter irlandes')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (149, N'Setter irlandes rojo y blanco')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (150, N'Shar Pei')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (151, N'Shiba Inu japones')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (152, N'Shih Tzu')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (153, N'Silky Terrier australiano')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (154, N'Skye Terrier')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (155, N'Sloughi (galgo arabe)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (156, N'Soft Coated Wheaten Terrier')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (157, N'Spaniel holandes')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (158, N'Spaniel tibetano')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (159, N'Spinone italiano')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (160, N'Spitz aleman mediano')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (161, N'Spitz aleman pequeno')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (162, N'Spitz finlandes')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (163, N'Spitz japones')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (164, N'Springer Spaniel gales')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (165, N'Springer Spaniel ingles')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (166, N'Staffordshire Bull Terrier')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (167, N'Sussex Spaniel')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (168, N'Dachshund (Perro salchicha) pelo largo')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (169, N'Dachshund (Perro salchicha) de pelo duro')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (170, N'Dachshund (Perro salchicha) de pelo liso')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (171, N'Dachshund (Perro salchicha) miniatura de pelo duro')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (172, N'Dachshund (Perro salchicha) miniatura de pelo largo')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (173, N'Dachshund (Perro salchicha) miniatura de pelo liso')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (174, N'Terranova (Newfoundland)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (175, N'Terrier australiano')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (176, N'Terrier Checo')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (177, N'Terrier de Airedale')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (178, N'Terrier de Norfolk (Norfolk Terrier)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (179, N'Terrier de Norwich (Norwich terrier)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (180, N'Terrier escoces (scottish terrier)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (181, N'Terrier gales')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (182, N'Terrier irlandes')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (183, N'Terrier tibetano')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (184, N'Toy Terrier ingles (negro y fuego)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (185, N'Vallhund sueco')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (186, N'West Highland White Terrier')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (187, N'Whippet')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (188, N'Xoloitzcuintle (mediano)')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (189, N'Yorkshire Terrier')
INSERT [dbo].[Razas] ([Id], [Nombre]) VALUES (190, N'Otra')
SET IDENTITY_INSERT [dbo].[Razas] OFF
GO
SET IDENTITY_INSERT [dbo].[Servicios] ON 

INSERT [dbo].[Servicios] ([Id], [IdUsuario], [idTipoServicio], [NombreEstablecimiento]) VALUES (1, 3, 2, N'PaseadoresLazz')
INSERT [dbo].[Servicios] ([Id], [IdUsuario], [idTipoServicio], [NombreEstablecimiento]) VALUES (2, 5, 1, N'VetTano')
INSERT [dbo].[Servicios] ([Id], [IdUsuario], [idTipoServicio], [NombreEstablecimiento]) VALUES (3, 4, 4, N'PeluPolshu')
SET IDENTITY_INSERT [dbo].[Servicios] OFF
GO
SET IDENTITY_INSERT [dbo].[TipoServicios] ON 

INSERT [dbo].[TipoServicios] ([Id], [Nombre]) VALUES (1, N'Veterinaria')
INSERT [dbo].[TipoServicios] ([Id], [Nombre]) VALUES (2, N'Paseadores')
INSERT [dbo].[TipoServicios] ([Id], [Nombre]) VALUES (3, N'Adiestrador')
INSERT [dbo].[TipoServicios] ([Id], [Nombre]) VALUES (4, N'Peluqueria')
INSERT [dbo].[TipoServicios] ([Id], [Nombre]) VALUES (5, N'Negocio')
INSERT [dbo].[TipoServicios] ([Id], [Nombre]) VALUES (6, N'Guarderia')
SET IDENTITY_INSERT [dbo].[TipoServicios] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuario] ON 

INSERT [dbo].[Usuario] ([Id], [Nombre], [Apellido], [Mail], [Telefono], [Password]) VALUES (2, N'Ivan', N'Kwiat', N'Ivan@gmail.com', N'11155555', N'1231231')
INSERT [dbo].[Usuario] ([Id], [Nombre], [Apellido], [Mail], [Telefono], [Password]) VALUES (3, N'Santino', N'Lazzari', N'sanl@gmail.com', N'55545454', N'654654654')
INSERT [dbo].[Usuario] ([Id], [Nombre], [Apellido], [Mail], [Telefono], [Password]) VALUES (4, N'polshu', N'ulman', N'pol@gmail.com', N'1212312', N'1231231')
INSERT [dbo].[Usuario] ([Id], [Nombre], [Apellido], [Mail], [Telefono], [Password]) VALUES (5, N'Tano', N'Lazzari', N'Tanito@gmail.com', N'1121850820', N'TanoGol123')
INSERT [dbo].[Usuario] ([Id], [Nombre], [Apellido], [Mail], [Telefono], [Password]) VALUES (6, N'Tone', N'Gargola', N'tone@shemale.com', N'1189456700', N'ToneJuly')
SET IDENTITY_INSERT [dbo].[Usuario] OFF
GO
SET IDENTITY_INSERT [dbo].[UsuariosXMascotas] ON 

INSERT [dbo].[UsuariosXMascotas] ([Id], [IdMascota], [IdUsuario], [EnAdopcion]) VALUES (1, 1, 2, 0)
INSERT [dbo].[UsuariosXMascotas] ([Id], [IdMascota], [IdUsuario], [EnAdopcion]) VALUES (2, 2, 3, 1)
INSERT [dbo].[UsuariosXMascotas] ([Id], [IdMascota], [IdUsuario], [EnAdopcion]) VALUES (3, 3, 5, 0)
SET IDENTITY_INSERT [dbo].[UsuariosXMascotas] OFF
GO
SET IDENTITY_INSERT [dbo].[UsuarioXServicio] ON 

INSERT [dbo].[UsuarioXServicio] ([Id], [IdUsuario], [idServicio]) VALUES (1, 3, 1)
INSERT [dbo].[UsuarioXServicio] ([Id], [IdUsuario], [idServicio]) VALUES (2, 5, 2)
INSERT [dbo].[UsuarioXServicio] ([Id], [IdUsuario], [idServicio]) VALUES (3, 4, 3)
SET IDENTITY_INSERT [dbo].[UsuarioXServicio] OFF
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
