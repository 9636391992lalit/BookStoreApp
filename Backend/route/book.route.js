 import express  from "express";
 import {getBook, searchBooksByName} from "../Controller/book.controller.js"
 const router =express.Router();

 router.get("/",getBook);

 router.get("/search", searchBooksByName);
 export default router;