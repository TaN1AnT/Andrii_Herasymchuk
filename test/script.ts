import Dropbox from '../dropboxAPI/dropbox';
import { expect } from 'chai';
import 'mocha';

let dropbox: Dropbox = new Dropbox();

describe("Uploading file to DropBox", () => {
    it("Upload", async () => {
        const res = await dropbox.uploadFile();
        expect(res.status).to.equal(200);
    }).timeout(10000);
})

describe("Getting file meta data from DropBox", () => {
    it("Get", async () => {
        const res = await dropbox.getMetadata();
        expect(res.status).to.equal(200);
    }).timeout(10000);
})

describe("Deleting file from DropBox", () => {
    it("Delete", async () => {
        const res = await dropbox.deleteFile();
        expect(res.status).to.equal(200);
    }).timeout(10000);
})