import app from './src/app.js'
 
const port  = process.env.PORT || 3000;
    
   app.listen(port, () => {
       console.log(`Servidor escutando em http://localhost:${port}`)
   })

   app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });