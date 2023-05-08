-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema arome
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema arome
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `arome` DEFAULT CHARACTER SET utf8 ;
USE `arome` ;

-- -----------------------------------------------------
-- Table `arome`.`administradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arome`.`administradores` (
  `id_admin` INT(11) NOT NULL AUTO_INCREMENT,
  `nome_admin` VARCHAR(255) NOT NULL,
  `sobrenome_admin` VARCHAR(255) NOT NULL,
  `email_admin` VARCHAR(255) NOT NULL,
  `senha_admin` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_admin`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `arome`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arome`.`categorias` (
  `id_categoria` INT(11) NOT NULL AUTO_INCREMENT,
  `nome_categoria` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `arome`.`enderecos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arome`.`enderecos` (
  `id_endereco` INT(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` INT(11) NOT NULL,
  `cep` VARCHAR(255) NOT NULL,
  `logradouro` VARCHAR(255) NOT NULL,
  `numero` VARCHAR(255) NULL DEFAULT NULL,
  `bairro` VARCHAR(255) NOT NULL,
  `estado` VARCHAR(255) NOT NULL,
  `cidade` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_endereco`),
  INDEX `id_cliente` (`id_cliente` ASC) VISIBLE,
  CONSTRAINT `enderecos_ibfk_1`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `arome`.`clientes` (`id_cliente`))
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `arome`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arome`.`clientes` (
  `id_cliente` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `sobrenome` VARCHAR(255) NOT NULL,
  `telefone` VARCHAR(15) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `senha_cliente` VARCHAR(255) NOT NULL,
  `id_endereco` INT(11) NULL DEFAULT NULL,
  `data_nascimento` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id_cliente`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `telefone_UNIQUE` (`telefone` ASC) VISIBLE,
  INDEX `id_endereco_idx` (`id_endereco` ASC) VISIBLE,
  CONSTRAINT `id_endereco`
    FOREIGN KEY (`id_endereco`)
    REFERENCES `arome`.`enderecos` (`id_endereco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `arome`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arome`.`pedidos` (
  `id_pedido` INT(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` INT(11) NOT NULL,
  `data_pedido` DATE NOT NULL,
  `status_pedido` VARCHAR(50) NOT NULL,
  `total_pedido` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id_pedido`),
  INDEX `id_cliente` (`id_cliente` ASC) VISIBLE,
  CONSTRAINT `pedidos_ibfk_1`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `arome`.`clientes` (`id_cliente`))
ENGINE = InnoDB
AUTO_INCREMENT = 26
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `arome`.`produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arome`.`produtos` (
  `id_produto` INT(11) NOT NULL AUTO_INCREMENT,
  `id_categoria` INT(11) NOT NULL,
  `nome_produto` VARCHAR(255) NOT NULL,
  `descricao` TEXT NULL DEFAULT NULL,
  `preco` DECIMAL(10,2) NOT NULL,
  `quantidade` INT(11) NOT NULL,
  `disponivel` TINYINT(4) NOT NULL,
  `imagem` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id_produto`),
  INDEX `id_categoria` (`id_categoria` ASC) VISIBLE,
  CONSTRAINT `produtos_ibfk_1`
    FOREIGN KEY (`id_categoria`)
    REFERENCES `arome`.`categorias` (`id_categoria`))
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `arome`.`itens_pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arome`.`itens_pedido` (
  `id_pedido` INT(11) NOT NULL,
  `id_produto` INT(11) NOT NULL,
  `quantidade` INT(11) NOT NULL,
  `preco_unitario` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id_pedido`, `id_produto`),
  INDEX `id_produto` (`id_produto` ASC) VISIBLE,
  CONSTRAINT `itens_pedido_ibfk_1`
    FOREIGN KEY (`id_pedido`)
    REFERENCES `arome`.`pedidos` (`id_pedido`),
  CONSTRAINT `itens_pedido_ibfk_2`
    FOREIGN KEY (`id_produto`)
    REFERENCES `arome`.`produtos` (`id_produto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `arome`.`produto_categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arome`.`produto_categoria` (
  `id_produto` INT(11) NOT NULL,
  `id_categoria` INT(11) NOT NULL,
  PRIMARY KEY (`id_produto`, `id_categoria`),
  INDEX `id_categoria_idx` (`id_categoria` ASC) VISIBLE,
  CONSTRAINT `id_categoria`
    FOREIGN KEY (`id_categoria`)
    REFERENCES `arome`.`categorias` (`id_categoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_produto`
    FOREIGN KEY (`id_produto`)
    REFERENCES `arome`.`produtos` (`id_produto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
