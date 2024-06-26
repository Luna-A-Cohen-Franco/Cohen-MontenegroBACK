import mongoose from 'mongoose';
import DbConfig from '../DbConfig';

async function connect(){
    let dbAddress = DbConfig.Header + DbConfig.Host + ':' + DbConfig.Port + '/' + DbConfig.Name
    await mongoose.connect(dbAddress, {});
}

export default connect;