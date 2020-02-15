package com.example.mapdemo;

import com.google.gson.annotations.SerializedName;

public class LocationItem {

    @SerializedName("lat")
    private double lat;

    @SerializedName("lng")
    private double lng;

    @SerializedName("email")
    private String email;


    public LocationItem(double lat, double lng, String email)
    {
        this.lat = lat;
        this.lng = lng;
        this.email = email;
    }
}
