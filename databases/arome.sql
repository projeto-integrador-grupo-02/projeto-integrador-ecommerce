CREATE DATABASE  IF NOT EXISTS `arome` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `arome`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: arome
-- ------------------------------------------------------
-- Server version	5.7.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administradores`
--

DROP TABLE IF EXISTS `administradores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administradores` (
  `id_admin` int(11) NOT NULL AUTO_INCREMENT,
  `nome_admin` varchar(255) NOT NULL,
  `sobrenome_admin` varchar(255) NOT NULL,
  `email_admin` varchar(255) NOT NULL,
  `senha_admin` varchar(255) NOT NULL,
  PRIMARY KEY (`id_admin`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administradores`
--

LOCK TABLES `administradores` WRITE;
/*!40000 ALTER TABLE `administradores` DISABLE KEYS */;
INSERT INTO `administradores` VALUES (1,'João','Silva','joao.silva@email.com','senha123'),(2,'Maria','Santos','maria.santos@email.com','senha456'),(3,'Pedro','Souza','pedro.souza@email.com','senha789'),(4,'Ana','Costa','ana.costa@email.com','senha1011'),(5,'Lucas','Oliveira','lucas.oliveira@email.com','senha1213');
/*!40000 ALTER TABLE `administradores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `nome_categoria` varchar(255) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Vela perfumada'),(2,'Aromatizante com varetas'),(3,'Deodorante para têxtil'),(4,'Óleo essencial'),(5,'Difusor de ambiente'),(6,'Spray para ambiente'),(7,'Sachê perfumado'),(8,'Essência para aromatizador'),(9,'Aromatizador pessoal'),(10,'Aromatizador elétrico'),(11,'Cheir');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `sobrenome` varchar(255) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha_cliente` varchar(255) NOT NULL,
  `id_endereco` int(11) DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL,
  PRIMARY KEY (`id_cliente`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `telefone_UNIQUE` (`telefone`),
  KEY `id_endereco_idx` (`id_endereco`),
  CONSTRAINT `id_endereco` FOREIGN KEY (`id_endereco`) REFERENCES `enderecos` (`id_endereco`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (4,'Fulano','de Tal','999999999','fulano@example.com','123456',1,'1990-02-24'),(5,'João','Silva','9999-9999','joao.silva@email.com','senha123',2,'1990-01-01'),(6,'Maria','Santos','8888-8888','maria.santos@email.com','senha456',3,'1995-02-02'),(7,'Pedro','Fernandes','7777-7777','pedro.fernandes@email.com','senha789',4,'1985-03-03'),(8,'Ana','Gomes','6666-6666','ana.gomes@email.com','senha012',5,'1980-04-04'),(9,'Lucas','Oliveira','5555-5555','lucas.oliveira@email.com','senha345',6,'1992-05-05'),(10,'Carla','Martins','4444-4444','carla.martins@email.com','senha678',7,'1987-06-06'),(11,'Rafael','Almeida','3333-3333','rafael.almeida@email.com','senha901',8,'1998-07-07'),(12,'Mariana','Barbosa','2222-2222','mariana.barbosa@email.com','senha234',9,'1991-08-08'),(13,'Tiago','Ribeiro','1111-1111','tiago.ribeiro@email.com','senha567',10,'1994-09-09'),(14,'Camila','Nogueira','0000-0000','camila.nogueira@email.com','senha890',NULL,'1983-10-10');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enderecos`
--

DROP TABLE IF EXISTS `enderecos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enderecos` (
  `id_endereco` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) NOT NULL,
  `cep` varchar(255) NOT NULL,
  `logradouro` varchar(255) NOT NULL,
  `numero` varchar(255) DEFAULT NULL,
  `bairro` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  PRIMARY KEY (`id_endereco`),
  KEY `id_cliente` (`id_cliente`),
  CONSTRAINT `enderecos_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enderecos`
--

LOCK TABLES `enderecos` WRITE;
/*!40000 ALTER TABLE `enderecos` DISABLE KEYS */;
INSERT INTO `enderecos` VALUES (1,4,'12345-678','Rua A','123','Bairro X','SP','São Paulo'),(2,4,'12345-678','Rua A','123','Bairro X','SP','São Paulo'),(3,5,'23456-789','Rua B','456','Bairro Y','RJ','Rio de Janeiro'),(4,6,'34567-890','Rua C','789','Bairro Z','MG','Belo Horizonte'),(5,7,'45678-901','Rua D','321','Bairro W','RS','Porto Alegre'),(6,8,'56789-012','Rua E','654','Bairro V','SC','Florianópolis'),(7,9,'67890-123','Rua F','987','Bairro U','PR','Curitiba'),(8,10,'78901-234','Rua G','741','Bairro T','BA','Salvador'),(9,11,'89012-345','Rua H','852','Bairro S','ES','Vitória'),(10,12,'90123-456','Rua I','963','Bairro R','PE','Recife'),(11,13,'01234-567','Rua J','159','Bairro Q','CE','Fortaleza');
/*!40000 ALTER TABLE `enderecos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itens_pedido`
--

DROP TABLE IF EXISTS `itens_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `itens_pedido` (
  `id_pedido` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `preco_unitario` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_pedido`,`id_produto`),
  KEY `id_produto` (`id_produto`),
  CONSTRAINT `itens_pedido_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id_pedido`),
  CONSTRAINT `itens_pedido_ibfk_2` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id_produto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itens_pedido`
--

LOCK TABLES `itens_pedido` WRITE;
/*!40000 ALTER TABLE `itens_pedido` DISABLE KEYS */;
INSERT INTO `itens_pedido` VALUES (1,2,2,30.00),(1,5,1,45.00),(1,7,3,20.00),(2,3,4,50.00),(2,4,2,25.00),(3,1,1,100.00),(3,6,2,40.00),(3,8,3,15.00),(4,2,1,30.00),(4,4,2,25.00),(4,6,1,40.00);
/*!40000 ALTER TABLE `itens_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id_pedido` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) NOT NULL,
  `data_pedido` date NOT NULL,
  `status_pedido` varchar(50) NOT NULL,
  `total_pedido` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_pedido`),
  UNIQUE KEY `id_pedido_UNIQUE` (`id_pedido`),
  KEY `id_cliente` (`id_cliente`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,4,'2022-01-01','1',159.98),(2,5,'2022-01-02','2',299.98),(3,6,'2022-01-03','3',109.00),(4,7,'2022-01-04','1',99.99),(5,8,'2022-01-05','2',629.91),(6,9,'2022-01-06','3',399.98),(7,10,'2022-01-07','1',1332.00),(8,11,'2022-01-08','2',200.00),(9,12,'2022-01-09','3',10000.00),(10,13,'2022-01-10','1',400000.00),(11,14,'2022-01-11','2',2.00),(12,4,'2022-01-12','3',99.99),(13,5,'2022-01-13','1',799.96),(14,6,'2022-01-14','2',499.98),(15,7,'2022-01-15','3',666.00),(16,8,'2022-01-16','1',400.00),(17,9,'2022-01-17','2',2000.00),(18,10,'2022-01-18','3',100000.00),(19,11,'2022-01-19','1',1200.00),(20,12,'2022-01-20','2',500.00),(21,13,'2022-01-21','3',3000.00),(22,14,'2022-01-22','1',2000.00),(23,4,'2022-01-23','2',400.00),(24,5,'2022-01-24','3',200.00),(25,6,'2022-01-25','1',10000.00);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto_categoria`
--

DROP TABLE IF EXISTS `produto_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto_categoria` (
  `id_produto` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  PRIMARY KEY (`id_produto`,`id_categoria`),
  KEY `id_categoria_idx` (`id_categoria`),
  CONSTRAINT `id_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_produto` FOREIGN KEY (`id_produto`) REFERENCES `produtos` (`id_produto`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto_categoria`
--

LOCK TABLES `produto_categoria` WRITE;
/*!40000 ALTER TABLE `produto_categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `produto_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id_produto` int(11) NOT NULL AUTO_INCREMENT,
  `id_categoria` int(11) NOT NULL,
  `nome_produto` varchar(255) NOT NULL,
  `descricao` text,
  `preco` decimal(10,2) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `disponivel` tinyint(4) NOT NULL,
  `imagem` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_produto`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `produtos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,1,'Vela Encantadora','Vela com aroma suave de flores campestres, para deixar o ambiente ainda mais agradável e relaxante',59.99,5,1,'/img/vela-cabrita.jpg'),(2,1,'Vela de Caramelo','Vela com aroma doce de caramelo, na cor marrom escuro, para uma atmosfera acolhedora',99.99,5,1,'/img/Velas-1.avif'),(3,2,'Aromatizante Neném','Aromatizante com fragrância delicada de bebê, perfeito para manter o quarto do seu filho sempre cheiroso',109.00,5,1,'/img/Velas-14.avif'),(4,1,'Vela Babosa','Vela com aroma doce e refrescante de babosa, na cor verde suave, para uma atmosfera revigorante',99.99,5,1,'/img/Velas-16.avif'),(5,2,'Fragrância para Roupa','Aromatizante para roupa com fragrância leve e agradável, ideal para manter suas roupas sempre cheirosas',69.99,9,1,'/img/Velas-13.avif'),(6,2,'Aromatizador de Centeio','Aromatizador com aroma calmante de centeio, para um ambiente tranquilo e relaxante',199.99,5,1,'/img/Velas-19.avif'),(7,1,'Vela Diabo','Vela com aroma forte e misterioso, perfeita para quem gosta de uma atmosfera mais intensa',666.00,666,1,'/img/Velas-3.avif'),(8,1,'Vela Thiago','Vela com aroma suave de lavanda, perfeita para presentear alguém especial',100.00,1,1,'/img/vela-thiago.jpg'),(9,1,'Vela de Antonio','Vela com aroma intenso e sofisticado, perfeita para uma ocasião especial',10000.00,1,1,'/img/vela-de antonio.jpg'),(10,3,'Vela Alice','Vela com aroma delicado e floral, para um ambiente romântico e acolhedor',20000000.00,1,1,'/img/vela-alice.jpg'),(11,1,'Vela de Teste','Vela com aroma refrescante de menta, para um ambiente mais energizante',1.00,2,1,'/img/teste.jpg'),(12,1,'aaa','aaaa',12.00,11,1,'/img/aaa.jpg'),(13,1,'Vela Sofia','Vela com aroma infantil',198.00,5,1,'/img/vela-sofia.jpg'),(14,1,'sssss','ssssssss',888888.00,12,1,'/img/sssss.jpg'),(15,7,'xfgtfdg','dfdfdf',1212.00,33,1,'/img/xfgtfdg.jpg');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'arome'
--

--
-- Dumping routines for database 'arome'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-10 14:08:31
