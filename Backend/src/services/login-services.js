import config from "../../dbconfig.js";
import sql from 'mssql';
import CopiaError from "../modules/log-helper.js";

export default class LoginService {

    getById = async (id) => {
        console.log('login')
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pMail', sql.VarChar, mail)
                .input('pPassword', sql.Text, password)
                .query('SELECT * FROM Usuario WHERE mail = @pMail and password = @pPassword');
            returnEntity = result.recordsets[0][0]
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
}


