DROP TABLE IF EXISTS usuarios;
CREATE TABLE IF NOT EXISTS usuarios(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    contrasena VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS local;
CREATE TABLE IF NOT EXISTS local(
	id_local INT PRIMARY KEY AUTO_INCREMENT,
    direccion VARCHAR(80) NOT NULL
);

DROP TABLE IF EXISTS resenas;
CREATE TABLE IF NOT EXISTS resenas(
	id_resenas INT PRIMARY KEY AUTO_INCREMENT,
    comentarios VARCHAR(200),
    id_usuario INT,
    id_local INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
	FOREIGN KEY (id_local) REFERENCES local(id_local)
);

DROP TABLE IF EXISTS categorias;
CREATE TABLE IF NOT EXISTS categorias(
	id_categorias INT PRIMARY KEY AUTO_INCREMENT,
    nombre_categorias VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS resenas_categorias;
CREATE TABLE IF NOT EXISTS resenas_categorias(
	id_resenas INT,
    id_categorias INT,
    PRIMARY KEY (id_resenas, id_categorias),
    FOREIGN KEY (id_resenas) REFERENCES resenas (id_resenas),
    FOREIGN KEY (id_categorias) REFERENCES categorias (id_categorias)
);

SELECT * FROM usuarios;
SELECT * FROM local;
SELECT * FROM resenas;
SELECT * FROM categorias;
SELECT * FROM resenas_categorias;

