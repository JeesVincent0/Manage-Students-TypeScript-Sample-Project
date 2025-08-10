import express from 'express';
import session from 'express-session';
import { fileURLToPath } from 'url';
import path from 'path';
//importante variable assigning
const app = express();
const PORT = process.env.PORT || 3000;
//setting path variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//Middleware for 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Express session
app.use(session({
    secret: "JeesV!@#$%^&*",
    resave: false,
    saveUninitialized: true,
}));
//set uping static file path
app.use(express.static(path.join(__dirname, '../../frontend/public')));
//setting view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../frontend/view'));
console.log(path.join(__dirname, '../../frontend/public'));
app.listen(PORT, () => console.log("server connect at port 3000"));
//# sourceMappingURL=app.js.map