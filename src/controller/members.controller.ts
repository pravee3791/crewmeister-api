import { members } from "../services/crewmeister.service";

const  membersController = (req, res) =>{
    members().then(data =>{
        res.send(data);
    })
}

export default membersController;