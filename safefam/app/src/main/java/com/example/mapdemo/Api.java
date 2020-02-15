package com.example.mapdemo;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface Api {

    String BASE_URL = "http://192.168.43.232:5000";

    @POST("/sos")
    Call<String> sendMessage(@Body LocationItem locationItem) ;
}
