import * as StudentsService from "../services/students.service";

export const getStudents = (req: any, res: any) => {
    res.status(200).json(StudentsService.getStudents());
};

export const getStudent = (req: any, res: any) => {
    const { id } = req.params;
    res.status(200).json(StudentsService.getStudent(id));
};

export const createStudent = (req: any, res: any) => {
    // req.params : contient les paramètres de la route dans l'url
    // req.body : contient les données envoyées par le client au serveur dans le corps de la requête (ex: methode POST, PUT)
    const { name, firstname, age } = req.body;
    res.status(200).json(StudentsService.createStudent(name, firstname, age));
};