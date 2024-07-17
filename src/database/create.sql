CREATE TABLE client (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    trade_name VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    cpf VARCHAR(11),
    cnpj VARCHAR(14),
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(2) NOT NULL,
    country VARCHAR(100) NOT NULL,
    postal_code VARCHAR(10) NOT NULL,
    website VARCHAR(255),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);




-- Insert provided data
INSERT INTO client (id, name, trade_name, email, phone, cpf, cnpj, address, city, state, country, postal_code, website, is_active, created_at, updated_at) VALUES
(1, 'João da Silva', NULL, 'joao.silva@example.com', '987654321', '12345678901', NULL, 'Rua das Flores, 123', 'São Paulo', 'SP', 'Brasil', '01234-567', NULL, TRUE, '2024-07-12 05:00:12.127284', '2024-07-12 05:00:12.127284'),
(3, 'Maria Oliveira', NULL, 'maria.oliveira@example.com', '987654321', '98765432109', NULL, 'Rua das Palmeiras, 789', 'Belo Horizonte', 'MG', 'Brasil', '07890-123', NULL, TRUE, '2024-07-12 05:01:47.267938', '2024-07-12 05:01:47.267938'),
(7, 'Maria Oliveira', 'Mari Flor', 'maria.oliv@example.com', '987654321', '98765432109', NULL, 'Rua das Palmeiras, 789', 'Belo Horizonte', 'MG', 'Brasil', '07890-123', NULL, TRUE, '2024-07-12 05:06:16.54952', '2024-07-12 05:06:16.54952');
