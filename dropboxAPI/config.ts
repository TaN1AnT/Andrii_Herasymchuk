import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

class Config{
    private static  uploadUrl: string = "https://content.dropboxapi.com/2/files/upload";
    private static  metaDataUrl: string = "https://api.dropboxapi.com/2/files/get_metadata";
    private static  deleteUrl: string = "https://api.dropboxapi.com/2/files/delete_v2";
    private static  token: string = "vwPeWrYPYcAAAAAAAAAAAanrDbKQU40cNiHT8nUc-7ruKJ2Uwp2Bqs_LvyInmrEc";
    private static  imagePath: string = "/img.jpg";
    private uploadFileConfig: AxiosRequestConfig;
    private getFileConfig: AxiosRequestConfig;
    private deleteFileConfig: AxiosRequestConfig;

    constructor() {    
        this.uploadFileConfig = {
            method: 'post',
            url: Config.uploadUrl,
            headers: {
                'Content-Type': 'application/octet-stream',
                'Authorization': 'Bearer ' + Config.token,
                'Dropbox-API-Arg': `{"mode":"add","path":"${Config.imagePath}","mute":false,"autorename":true}`
            },
            data: {
                binary: "../pics/img.jpg"
            }
        };

        this.getFileConfig = {
            method: 'post',
            url: Config.metaDataUrl,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Config.token
            },
            data: {
                "path": Config.imagePath
            }
        };

        this.deleteFileConfig = {
            method: 'post',
            url: Config.deleteUrl,
            headers: {
                'Authorization': 'Bearer ' + Config.token,
                'Content-Type': 'application/json'
            },
            data: {
                "path": Config.imagePath
            }
        };
    }
    
    UploadConfig(){
        return this.uploadFileConfig;
    }

    getMetaDataConfig(){
        return this.getFileConfig;
    }

    DeleteConfig(){
        return this.deleteFileConfig;
    }
}

export default Config;