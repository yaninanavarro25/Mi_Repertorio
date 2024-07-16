import path from "path";
import { agregarCancionQueries, getSongsQuery, editSongQuery, deleteSongQueries } from "../models/queries.js";
const __dirname = path.resolve();

export const home = (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
}

export const agregarCancion = async (req, res) => {
    const { titulo, artista, tono } = req.body;
    const datos = [titulo, artista, tono];  
    
    const cancion = await agregarCancionQueries(datos);
    res.send(cancion);
}

export const getSongs = async (req, res) => {
    const canciones = await getSongsQuery();
    res.send(canciones);
}

export const editSong = async (req, res) => {
    const { id } = req.params;
    const { titulo, artista, tono } = req.body;
    const cancion = await editSongQuery(titulo, artista, tono, id);
    res.send(cancion);
}

export const deleteSong = async (req, res) => {
    const { id } = req.query
    const cancion = await deleteSongQueries(id);
    res.send(cancion);
}