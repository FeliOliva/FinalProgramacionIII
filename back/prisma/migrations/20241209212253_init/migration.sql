-- CreateTable
CREATE TABLE `clients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_time` DATE NULL,
    `nombre` VARCHAR(255) NULL,
    `apellido` VARCHAR(255) NULL,
    `direccion` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `telefono` VARCHAR(20) NULL,
    `cuil` VARCHAR(20) NULL,
    `estado` INTEGER NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
