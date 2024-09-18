import connection from '../database/db.js';

 export function read(callback){
    connection.query('SELECT * from compra', (err, result) => {
        if (err) {
            console.error('Erro ao ler dados do banco de dados:', err);
            callback(err, null);
            return;
        }
        console.log('Dados lidos do banco de dados:', result);
        callback(null, result);
    });
}

export function create(nome, descricao, preco, imagem_url) {
    return new Promise((resolve, reject) => {
        connection.query(
            'INSERT INTO compra (nome, descricao, preco, imagem_url) VALUES (?, ?, ?, ?)', 
            [nome, descricao, preco, imagem_url], 
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            }
        );
    });
}

export function deleteComp(id, callback){

    connection.query('DELETE from energiazen.compra where id = ?', [id], callback);

}