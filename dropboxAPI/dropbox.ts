import Config from "./config";
import axios, {AxiosResponse} from "axios";
 
class Dropbox {
    private config: Config;

    constructor() {
        this.config = new Config();        
    }

    uploadFile(): Promise<AxiosResponse> {
        return axios(this.config.UploadConfig());
    }

    getMetadata(): Promise<AxiosResponse> {
        return axios(this.config.getMetaDataConfig());
    }

    deleteFile(): Promise<AxiosResponse> {
        return axios.request(this.config.DeleteConfig());
    }
}

export default Dropbox;