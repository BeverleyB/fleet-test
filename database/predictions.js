const mysql = require('mysql');

const db = mysql.createConnection({   
    host: "localhost",   
    user: "root",   
    password: "root",
}); 

db.connect((err) => {   
    if (err) throw err;   
    console.log("Connect to db MySQL!"); 

    db.query('USE ecommerce', (err) => {
        if (err) throw err;
  
        const query = `
            SELECT product_id, SUM(total_amount) AS total_sales
            FROM orders
            GROUP BY product_id;
        `;
        
        db.query(query, (err, results) => {
            if (err) throw err;

            const predictions = results.map(result => ({
                product_id: result.product_id,
                average_sales: result.total_sales
            }));
    
          console.log('Predictions of the sales amounts', predictions);
    
          db.end();
        });
    });
});
