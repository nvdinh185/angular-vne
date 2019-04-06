import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class IpService{
    constructor(private http: Http){}

    getIp(){
        return this.http.get("http://localhost:3000/")
        .toPromise()
        .then(res => res.json())
        .then(resJson => resJson.ip);
    }
}