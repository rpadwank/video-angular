import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserProfile } from './user';
import { Observable } from 'rxjs';
import { UserUploadVideo } from './uploadVideo';

@Injectable()
export class UserService{

    baseUrl = "http://localhost:8085";
    uploadUrl = "http://localhost:8081";

    constructor(private http: HttpClient){}

    registerNewUser(user: UserProfile):Observable<UserProfile>{
        return this.http.post<UserProfile>(this.baseUrl+"/user",user);
    }

    // userLogin(email: string, password: string){
    //     return this.http.get(this.baseUrl+"/user/"+email+"/"+password);
    // }

    userLogin(email,password){
        return this.http.get(this.baseUrl+"/user/"+email+"/"+password);

    }

    uploadVideo(fd:FormData):Observable<UserUploadVideo>{
        alert(fd.get("userName"));
        return this.http.post<UserUploadVideo>(this.uploadUrl+"/upload/"+fd.get("userName"),fd);
    }

    fetch(username:String):Observable<Blob>{
        return this.http.get(this.uploadUrl+"/save/"+username, {responseType: 'blob'});
    }

    fetchAll(){
        return this.http.get(this.uploadUrl+"/save", {responseType: 'blob'});
    }
}