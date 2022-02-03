import { absences } from "../services/crewmeister.service";
const absencesController = (req, res) => {
    absences().then(data => {
        res.send(data);
    })
}

export default absencesController;